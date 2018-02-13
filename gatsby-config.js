module.exports = {
  siteMetadata: {
    title: 'Eclectic language version manager',
  },

  pathPrefix: '/staging/',

  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',

    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/components/favicon/favicon.svg',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },

    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    }
  ],
};
