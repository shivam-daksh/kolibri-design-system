export default {
  mode: 'universal',
  head: {
    title: 'Kolibri Design System',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/kolibri.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i&display=swap&subset=cyrillic,cyrillic-ext,devanagari,greek,greek-ext,latin-ext,vietnamese',
      },
    ],
  },
  rootDir: './',
  srcDir: './docs/',
  plugins: ['~/plugins/load-common-components.js'],
  build: {
    extend(config) {
      // handles <mat-svg/>, <ion-svg/>, <iconic-svg/>, and <file-svg/> svg inlining
      config.module.rules.push({
        test: /\.vue$/,
        enforce: 'pre',
        loader: 'svg-icon-inline-loader',
        exclude: /node_modules/,
      });
    },
  },
  router: {
    // disable scroll behavior because we don't use client-side routing
    scrollBehavior() {},
  },
};
