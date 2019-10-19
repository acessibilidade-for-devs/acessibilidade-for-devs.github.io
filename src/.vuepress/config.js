require('dotenv').config()

module.exports = {
  title: 'Guia de Acessibilidade na Web',
  description: 'Uma guia de acessbilidade para desenvolvedores web, aqui você encontra conteúdo de qualidade sobre o tema")',
  head: [
    ['link', {
      rel: 'icon',
      href: `/logo.png`
    }],
    ['link', {
      rel: 'manifest',
      href: '/manifest.json'
    }],
    ['meta', {
      name: 'theme-color',
      content: '#151A24'
    }],
    ['script', {
      src: 'https://kit.fontawesome.com/d028c48977.js',
      crossorigin: 'anonymous'
    }]
  ],
  themeConfig: {
    smoothScroll: true,
    search: false,
    locales: {
      '/': {
        selectText: 'Idiomas',
        label: 'Português (BR)',
        ariaLabel: 'Idiomas',
        editLinkText: 'Edite essa página no Github',
        serviceWorker: {
          updatePopup: {
            message: "Novo conteúdo disponível.",
            buttonText: "Refresh"
          }
        }
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        }
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top'],
    [
      '@vuepress/google-analytics',
      {
        'ga': process.env.GA
      }
    ]
  ],
  locales: {
    '/': {
      lang: 'pt-BR',
      title: 'Guia de Acessibilidade na Web',
      description: 'Uma guia de acessbilidade para desenvolvedores web, aqui você encontra conteúdo de qualidade sobre o tema")'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Web Accesibility Guide',
      description: 'An accessibility guide for web developers. Here you find quality content about this topic'
    }
  }
}
