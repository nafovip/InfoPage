
module.exports = {
  siteMetadata: {
    title: `NAFO`,
    description: `The $NAFO token helps Ukrainian people and Ukrainian forces in their fight against the invaders. Buy $NAFO to become a fella and contribute to Ukraine's victory and well-being. Stop wasting your money on useless memecoins and make a real impact instead!`,
    author: `@jonh`,
    siteUrl: `https://nafo.vip`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#1D1D1D`,
        theme_color: `#1D1D1D`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Inter:500,600,700,800"],
        },
        subsets: ["latin-ext"],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/   
        }
      }
    },
  ],
}
