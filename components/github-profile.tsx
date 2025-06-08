import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Users, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function GithubProfile() {
  const githubData = {
    name: "Anish Rane",
    username: "AnishRane",
    avatarUrl: "https://github.com/AnishRane.png",
    profileUrl: "https://github.com/AnishRane",
    followers: 6,
    following: 4,
    stars: 10,
    socials: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anishrane",
        icon: <Linkedin className="h-4 w-4" />
      },
      {
        name: "X",
        url: "https://x.com/stark_ar98",
        icon: <Twitter className="h-4 w-4" />
      }
    ]
  };

  const stats = {
    stats: "https://github-readme-stats.vercel.app/api?username=AnishRane&theme=dark&hide_border=false&include_all_commits=true&count_private=false",
    streak: "https://github-readme-streak-stats.herokuapp.com/?user=AnishRane&theme=dark&hide_border=false",
    topLangs: "https://github-readme-stats.vercel.app/api/top-langs/?username=AnishRane&theme=dark&hide_border=false&include_all_commits=true&count_private=true&layout=compact"
  };

  return (
    <section id="github-profile" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
            Find Me on GitHub
          </h2>
          <div className="glass-card-hover glass-glow p-8 rounded-xl">
            <div className="flex flex-col sm:flex-row items-center gap-8">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <Image
                  src={githubData.avatarUrl}
                  alt={`${githubData.name}'s GitHub Avatar`}
                  width={128}
                  height={128}
                  className="rounded-full border-4 border-primary/50"
                />
              </div>
              
              {/* Profile Info */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-2xl font-bold">{githubData.name}</h3>
                <Link href={githubData.profileUrl} target="_blank" rel="noopener noreferrer">
                  <p className="text-lg text-muted-foreground hover:text-primary transition-colors">@{githubData.username}</p>
                </Link>

                {/* Stats */}
                <div className="flex justify-center sm:justify-start items-center gap-4 my-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-primary" />
                    <span><span className="font-bold text-foreground">{githubData.followers}</span> followers</span>
                  </div>
                  <span>·</span>
                  <div className="flex items-center gap-1">
                    <span><span className="font-bold text-foreground">{githubData.following}</span> following</span>
                  </div>
                  <span>·</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-primary" />
                    <span><span className="font-bold text-foreground">{githubData.stars}</span> stars</span>
                  </div>
                </div>
                
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href={githubData.profileUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Follow on GitHub
                  </Link>
                </Button>
              </div>
            </div>

            {/* GitHub Stats */}
            <div className="mt-8 pt-8 border-t border-primary/20">
              <h4 className="text-xl font-semibold mb-4 text-center text-gradient">GitHub Stats</h4>
              <div className="flex flex-col items-center gap-4">
                <Image src={stats.stats} alt="GitHub Stats" width={495} height={195} className="rounded-lg w-full h-auto" />
                <Image src={stats.streak} alt="GitHub Streak" width={495} height={195} className="rounded-lg w-full h-auto" />
                <Image src={stats.topLangs} alt="Top Languages" width={495} height={195} className="rounded-lg w-full h-auto" />
              </div>
            </div>
            
            {/* Socials */}
            <div className="mt-8 pt-8 border-t border-primary/20 flex justify-center gap-4">
              {githubData.socials.map((social) => (
                 <Button asChild key={social.name} variant="outline" className="glass-card-subtle hover:glass-card">
                   <Link href={social.url} target="_blank" rel="noopener noreferrer">
                     {social.icon}
                     <span className="ml-2">{social.name}</span>
                   </Link>
                 </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 