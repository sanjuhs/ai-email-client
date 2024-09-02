import Image from "next/image";

// app/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto py-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image src="/logo.svg" alt="Hugin Logo" width={40} height={40} />
            <span className="text-2xl font-bold">Hugin</span>
          </div>
          <div className="flex space-x-4">
            <Link href="https://github.com/your-repo" target="_blank">
              <Github className="h-6 w-6" />
            </Link>
            <Link href="https://linkedin.com/your-post" target="_blank">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="/mail">
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        <section className="container mx-auto py-20 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Achieve Inbox Zero with Hugin
          </h1>
          <p className="text-xl mb-8">
            AI-powered email management inspired by Odin s ravens
          </p>
          <Button asChild size="lg">
            <Link href="/mail">Try Hugin Now</Link>
          </Button>
        </section>

        <section className="bg-gray-100 py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10">Meet Your AI Assistant</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {["Intelligent", "Efficient", "Adaptive", "Intuitive"].map(
                (trait) => (
                  <Card key={trait}>
                    <CardHeader>
                      <CardTitle>{trait}</CardTitle>
                    </CardHeader>
                  </Card>
                )
              )}
            </div>
          </div>
        </section>

        <section className="container mx-auto py-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Open Source",
                description: "Transparent and community-driven development",
              },
              {
                title: "Self-Hostable",
                description: "Take control of your data and privacy",
              },
              {
                title: "AI-Powered",
                description: "Intelligent sorting and task automation",
              },
            ].map((feature) => (
              <Card key={feature.title}>
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-gray-100 py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Roadmap</h2>
            <div className="space-y-4">
              {[
                { task: "Gmail API Integration", done: true },
                { task: "AI-powered Email Classification", done: false },
                { task: "Custom Tagging System", done: false },
                { task: "Advanced Search Functionality", done: false },
              ].map((item) => (
                <div key={item.task} className="flex items-center space-x-2">
                  <input type="checkbox" checked={item.done} readOnly />
                  <span>{item.task}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Hugin Email Client. All rights reserved.</p>
          <p className="mt-2">
            Built with{" "}
            <Link href="https://ui.shadcn.com/" className="underline">
              shadcn/ui
            </Link>
            . Licensed under MIT.
          </p>
        </div>
      </footer>
    </div>
  );
}
