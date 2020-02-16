module.exports = {
  siteMetadata: {
    title: `Heitor Lessa's blog`,
    name: `Heitor Lessa`,
    siteUrl: `https://heitorlessa.com`,
    description: `Heitor Lessa's website`,
    hero: {
      heading: `Heitor Lessa's personal space`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/heitor_lessa`,
      },
      {
        name: `github`,
        url: `https://github.com/heitorlessa`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/heitorlessa/`,
      }
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Heitor Lessa`,
        short_name: `Heitor Lessa`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
