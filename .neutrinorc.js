const react = require('@neutrinojs/react');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    react({
      html: {
        title: 'cosmos-neutrino-test',
        template: require.resolve('./src/template.ejs'),
      }
    }),
  ],
};
