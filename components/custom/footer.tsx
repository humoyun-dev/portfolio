"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  CalendarIcon,
  HeartIcon,
  ExternalLinkIcon,
  ChevronUpIcon,
} from "lucide-react";
import Link from "next/link";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/humoyun-dev",
      icon: <GithubIcon className="h-5 w-5" />,
      description: "View my projects and contributions",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/humoyun-dev",
      icon: <LinkedinIcon className="h-5 w-5" />,
      description: "Connect with me professionally",
    },
    {
      name: "Email",
      href: "mailto:humoyunbektursunniyazov@gmail.com",
      icon: <MailIcon className="h-5 w-5" />,
      description: "Send me a message",
    },
    {
      name: "Phone",
      href: "tel:+998900112507",
      icon: <PhoneIcon className="h-5 w-5" />,
      description: "Give me a call",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Career", href: "/career" },
  ];

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "MongoDB",
  ];

  return (
    <footer className="relative bg-gradient-to-t from-muted/50 to-background border-t">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Humoyun
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Frontend Developer passionate about creating modern, user-centric
              web applications. Based in Tashkent, Uzbekistan.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPinIcon className="h-4 w-4" />
              <span>Tashkent, Uzbekistan</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarIcon className="h-4 w-4" />
              <span>Available for opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            {/* <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Button
                    variant="link"
                    size="sm"
                    className="h-auto p-0 text-muted-foreground hover:text-foreground justify-start"
                  >
                    <Link href={link.href}>{link.name}</Link>
                  </Button>
                </li>
              ))}
            </ul> */}
          </div>

          {/* Skills */}
          <div className="space-y-4">
            <h4 className="font-semibold">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
            <div className="pt-2">
              <p className="text-xs text-muted-foreground">
                Always learning and exploring new technologies to build better
                solutions.
              </p>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-semibold">Get In Touch</h4>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <motion.div
                  key={social.name}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-auto p-2 w-full justify-start gap-3 text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    asChild
                  >
                    <a
                      href={social.href}
                      target={
                        social.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        social.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {social.icon}
                      <div className="text-left">
                        <div className="text-sm font-medium">{social.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {social.description}
                        </div>
                      </div>
                      {social.href.startsWith("http") && (
                        <ExternalLinkIcon className="h-3 w-3 ml-auto" />
                      )}
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Humoyunbek Tursunniyozov.</span>
            <span>Made with</span>
            <HeartIcon className="h-4 w-4 text-red-500 fill-current" />
            <span>using Next.js & Tailwind CSS</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-xs text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="gap-2 hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronUpIcon className="h-4 w-4" />
              Back to top
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </footer>
  );
}
