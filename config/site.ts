export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "My Portfolio",
  description:
    "Portoflio de web developer creado con next.js y tailwind",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/AinsGp",
    github: "https://github.com/Ainsdev",
    docs: "https://ui.shadcn.com",
  },
  lastProject: ""
}
