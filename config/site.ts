export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "My Portfolio",
  description:
    "Portoflio de developer creado con next.js y tailwind",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/AinsGp",
    github: "https://github.com/Ainsdev",
    linkedin: "https://www.linkedin.com/in/ains-gonzalez/",
  },
  lastProject: "https://yourpoints.vercel.app/"
}
