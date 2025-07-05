import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CountUpProps {
  to: number;
  from?: number;
  direction?: "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

export default function CountUp({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2.5,
  className = "",
  startWhen = true,
  separator = "",
  onStart,
  onEnd,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? to : from);

  const damping = 12 + 18 * (1 / duration);
  const stiffness = 45 * (1 / duration);

  const springValue = useSpring(motionValue, {
    damping,
    stiffness,
    restDelta: 0.001,
    restSpeed: 0.001,
    mass: 0.8,
  });

  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = String(direction === "down" ? to : from);
    }
  }, [from, to, direction]);

  useEffect(() => {
    if (isInView && startWhen) {
      if (typeof onStart === "function") {
        onStart();
      }

      const timeoutId = setTimeout(() => {
        motionValue.set(direction === "down" ? from : to);
      }, delay * 1000);

      const durationTimeoutId = setTimeout(
        () => {
          if (typeof onEnd === "function") {
            onEnd();
          }
        },
        delay * 1000 + duration * 1000
      );

      return () => {
        clearTimeout(timeoutId);
        clearTimeout(durationTimeoutId);
      };
    }
  }, [
    isInView,
    startWhen,
    motionValue,
    direction,
    from,
    to,
    delay,
    onStart,
    onEnd,
    duration,
  ]);

  useEffect(() => {
    let animationId: number;
    
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        // Use requestAnimationFrame for smoother updates
        cancelAnimationFrame(animationId);
        animationId = requestAnimationFrame(() => {
          if (ref.current) {
            const options = {
              useGrouping: !!separator,
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            };

            // Use Math.round for smoother transitions
            const roundedValue = Math.round(latest);
            const formattedNumber = Intl.NumberFormat("en-US", options).format(
              roundedValue
            );

            ref.current.textContent = separator
              ? formattedNumber.replace(/,/g, separator)
              : formattedNumber;
          }
        });
      }
    });

    return () => {
      unsubscribe();
      cancelAnimationFrame(animationId);
    };
  }, [springValue, separator]);

  return <span className={`${className}`} ref={ref} />;
} 