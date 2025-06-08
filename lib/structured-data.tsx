export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Humoyunbek",
    jobTitle: "Full-Stack Software Developer",
    description:
      "Passionate full-stack software developer specializing in JavaScript, TypeScript, React, Next.js, Node.js, Python, and Django.",
    url: "https://humoyunbek.dev", // Replace with your actual domain
    image: "https://humoyunbek.dev/profile-image.jpg", // Replace with your actual image URL
    birthDate: "2007-07-25",
    birthPlace: {
      "@type": "Place",
      name: "Tashkent, Uzbekistan",
    },
    nationality: "Uzbek",
    knowsLanguage: [
      {
        "@type": "Language",
        name: "Uzbek",
      },
      {
        "@type": "Language",
        name: "English",
      },
    ],
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "Django",
      "MongoDB",
      "SQL",
      "PostgreSQL",
      "Redux",
      "Full-Stack Development",
      "Frontend Development",
      "Backend Development",
      "Web Development",
      "Software Engineering",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Software Developer",
      occupationLocation: {
        "@type": "Place",
        name: "Tashkent, Uzbekistan",
      },
      skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Python",
        "Django",
        "MongoDB",
        "SQL",
      ],
    },
    sameAs: [
      "https://github.com/humoyunbek", // Replace with your actual GitHub
      "https://linkedin.com/in/humoyunbek", // Replace with your actual LinkedIn
      // Add other social profiles
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "professional",
      email: "contact@humoyunbek.dev", // Replace with your actual email
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
