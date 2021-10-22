module.exports = {
  siteMetadata: {
    siteUrl: 'https://limeunseop.github.io/chilsung-cider',
    title: 'Chilsung Cider',
  },
  pathPrefix: 'chilsung-cider',
  plugins: [
    'gatsby-plugin-root-import',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
