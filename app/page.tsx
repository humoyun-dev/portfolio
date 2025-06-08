import { AuroraBackground } from "@/components/aceternity/aurora-background";
import { FlipWords } from "@/components/aceternity/flip-words";
import { TextGenerateEffect } from "@/components/aceternity/text-generate-effect";
import { AnimatedColorBackground } from "@/components/custom/animated-color-background";
import { Button } from "@/components/ui/button";
import Img from "@/components/ui/image";
import {
  BriefcaseIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
} from "lucide-react";
import React from "react";

const Page = () => {
  const bio = `I'm a frontend developer passionate about building modern, performant, and user-centric web applications. I enjoy working with React, Next.js, and TypeScript. Outside of coding, I'm interested in history, politics, and play chess in my free time.`;

  return (
    <div className="w-full md:h-screen">
      <AuroraBackground>
        <div className="backdrop-blur-lg w-full md:h-screen">
          <div className="container mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between h-full py-12 px-4">
            <div className="text-center md:text-left">
              <FlipWords
                words={["Hi", "I'm Humoyunbek", "Frontend Developer"]}
              />
              <TextGenerateEffect
                words={bio}
                className="text-lg text-foreground/80 mt-4 max-w-xl"
              />
              {/* <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
                <Button className="gap-2">
                  <BriefcaseIcon className="h-4 w-4" />
                  View Projects
                </Button>
                <Button variant="outline" className="gap-2">
                  <MailIcon className="h-4 w-4" />
                  Contact Me
                </Button>
              </div> */}
              <div className="flex gap-4 mt-6 justify-center md:justify-start">
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://github.com/humoyun-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://linkedin.com/in/humoyun-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedinIcon className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="mailto:humoyunbektursunniyazov@gmail.com">
                    <MailIcon className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="tel:+998900112507">
                    <PhoneIcon className="h-5 w-5" />
                    <span className="sr-only">Phone</span>
                  </a>
                </Button>
              </div>
            </div>
            <div className="mb-8 md:mb-0">
              <AnimatedColorBackground
                colors={["#667eea", "#764ba2", "#6dd5ed", "#2193b0", "#cc2b5e"]}
                animationType="gradient-shift"
                className="w-[300px] h-[300px] md:w-[600px] md:h-[600px]"
              >
                <Img
                  sizes="600px"
                  alt="Humoyunbek Tursunniyozov's portrait"
                  className="object-cover shadow-2xl border-4 border-transparent aspect-square rounded-full relative z-10"
                  src="/images/image1.jpeg"
                />
              </AnimatedColorBackground>
            </div>
          </div>
        </div>
      </AuroraBackground>
    </div>
  );
};

export default Page;
