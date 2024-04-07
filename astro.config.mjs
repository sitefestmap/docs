import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Sitefest Map',
    customCss: [
      './src/styles/app.css',
    ],
    social: {
      github: 'https://github.com/withastro/starlight'
    },
    sidebar: [{
      label: 'Guides',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Example Guide',
        link: '/guides/example/'
      }]
    },{
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    },]
  }), solidJs()]
});