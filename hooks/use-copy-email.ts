'use client';

import { useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Mail } from 'lucide-react';

export function useCopyEmail() {
  const { toast } = useToast();
  const email = 'anishrane.dev@gmail.com';

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(email);
      toast({
        title: 'Email copied!',
        description: `${email} has been copied to your clipboard`,
        duration: 3000,
      });
    } catch (err) {
      // Fallback for older browsers
      try {
        const textArea = document.createElement('textarea');
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        toast({
          title: 'Email copied!',
          description: `${email} has been copied to your clipboard`,
          duration: 3000,
        });
      } catch (fallbackErr) {
        toast({
          title: 'Copy failed',
          description: 'Unable to copy email. Please copy manually: ' + email,
          variant: 'destructive',
          duration: 5000,
        });
      }
    }
  }, [toast]);

  return { copyEmail, email };
}
