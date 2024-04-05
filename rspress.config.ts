import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'NFGenAI',
  description: 'Rustaceans Docs',
  icon: '/nfgenai-logo.png',
  logo: {
    light: '/nfgenai-logo.png',
    dark: '/nfgenai-logo.png',
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/NFGenAI' },
    ],
  },
});
