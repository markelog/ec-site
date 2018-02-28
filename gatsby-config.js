const isProduction = process.env.NODE_ENV === 'production';

const config = {
  siteMetadata: {
    title: 'Eclectic language version manager',
  },

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

    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-114040943-1',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: false,
      },
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

if (isProduction) {
  config.pathPrefix = '/staging/';
}

module.exports = config;
