import React from 'react';

export const experiencesList = [
  {
    id: 1,
    title: "GRAPHIC DESIGNER",
    period: "2021 - 2023",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eget ullamcorper faucibus aliquet scelerisque. Risus in aliquet nisl pharetra adipiscing. Id commodo fermentum morbi eros. Nunc fames sed id praesent purus consectetur.",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    period: "2021 - 2023",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eget ullamcorper faucibus aliquet scelerisque. Risus in aliquet nisl pharetra adipiscing. Id commodo fermentum morbi eros. Nunc fames sed id praesent purus consectetur.",
  },
  {
    id: 3,
    title: "FE Developer",
    period: "2023 - Present",
    description:
      "Developing high performance modern web applications with Next.js, React, and Tailwind CSS. Crafting interactive retro-brutalist user experiences and responsive designs.",
  },
];

export const toolsList = [
  {
    name: "Antigravity",
    icon: (
      <svg className="w-6 h-6 text-[#2A30FF]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 180 180">
        <path d="M90 0a90 90 0 100 180 90 90 0 000-180zm43.3 147.2L74.8 67.5V135H60V45h17.3l55.8 77V45h14.8v102.2h-4.6z" />
      </svg>
    ),
  },
  {
    name: "React",
    icon: (
      <svg className="w-6 h-6 text-[#61DAFB]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <ellipse cx="12" cy="12" rx="10" ry="4.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg className="w-6 h-6 text-[#3178C6]" fill="currentColor" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <text x="5" y="17" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="sans-serif">TS</text>
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg className="w-6 h-6 text-[#06B6D4]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <svg className="w-6 h-6 text-[#F7DF1E]" fill="currentColor" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <text x="5" y="17" fill="#000" fontSize="13" fontWeight="bold" fontFamily="sans-serif">JS</text>
      </svg>
    ),
  },
  {
    name: "Figma",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 38 57" fill="none">
        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#1ABCFE" />
        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
      </svg>
    ),
  },
  {
    name: "HTML5",
    icon: (
      <svg className="w-6 h-6 text-[#E34F26]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718h10.059l.236-2.625H5.404l.698 8.062h9.107l-.375 4.125-3.864 1.05-3.864-1.05-.25-2.765H4.18l.492 5.563 7.302 2.016 7.286-2.016 1.016-11.64H8.531z" />
      </svg>
    ),
  },
  {
    name: "CSS3",
    icon: (
      <svg className="w-6 h-6 text-[#1572B6]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718h10.059l.236-2.625H5.404l.698 8.062h9.107l-.375 4.125-3.864 1.05-3.864-1.05-.25-2.765H4.18l.492 5.563 7.302 2.016 7.286-2.016 1.016-11.64H8.531z" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg className="w-6 h-6 text-[#339933]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0L1.75 5.92v11.84L12 23.68l10.25-5.92V5.92L12 0zm-1 16.5l-4-2.3v-4.6l4 2.3v4.6zm6-3.5l-4 2.3v-4.6l4-2.3v4.6z" />
      </svg>
    ),
  },
  {
    name: "Git",
    icon: (
      <svg className="w-6 h-6 text-[#F05032]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.41-1.994L12.7 8.795v6.52c.16.082.31.189.439.319.72.72.72 1.884 0 2.604-.719.719-1.882.719-2.601 0-.719-.719-.719-1.884 0-2.604.181-.182.387-.311.605-.39v-6.57c-.218-.079-.424-.208-.605-.39-.533-.533-.674-1.321-.422-1.974L6.685 3.65 1.454 8.882c-.604.604-.604 1.583 0 2.188l10.479 10.478c.604.604 1.583.604 2.188 0l9.425-9.425c.604-.604.604-1.583 0-2.188z" />
      </svg>
    ),
  },
  {
    name: "VS Code",
    icon: (
      <svg className="w-6 h-6 text-[#007ACC]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.15 2.587L18.21.21a1.494 1.494 0 00-1.705.29l-9.46 8.63L2.8 5.865a.747.747 0 00-1.026.195L.19 8.21a.747.747 0 00.19 1.027l4.084 3.064L.38 15.367a.747.747 0 00-.19 1.027l1.583 2.15a.747.747 0 001.026.195l4.246-3.267 9.46 8.63a1.494 1.494 0 001.705.29l4.94-2.377A1.495 1.495 0 0024 20.627V3.973a1.495 1.495 0 00-.85-1.386zM18 16.5L12.5 12 18 7.5v9z" />
      </svg>
    ),
  },
  {
    name: "Photoshop",
    icon: (
      <svg className="w-6 h-6 text-[#31A8FF]" fill="currentColor" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#001E36" />
        <text x="4" y="16" fill="#31A8FF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Ps</text>
      </svg>
    ),
  },
];

export const projectsList = [
  {
    id: 1,
    title: "Bali Limestone.id",
    category: "UI/UX Designer",
    image: "/projects/bali-limestone.jpg",
    link: "https://balilimestone.id",
    description: "Trusted Construction Materials & Heavy Equipment Solutions in Bali",
  },
  {
    id: 2,
    title: "Project Portfolio.id",
    category: "FE Developer",
    image: "/projects/project-2.jpg",
    link: "https://github.com",
    description: "Modern Retro-Brutalist Web Application Portfolio",
  },
  {
    id: 3,
    title: "Dribbble Portfolio.id",
    category: "Graphic Designer",
    image: "/projects/project-3.jpg",
    link: "https://dribbble.com/Ihsanmaulanas",
    description: "Creative Design Shots & Brand Identity Portfolio",
  },
];
