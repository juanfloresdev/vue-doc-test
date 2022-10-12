export default {
  themeConfig: {
    siteTitle: 'Servicios CGI',
    base: 'agc',

    sidebar: [
      {
        text: 'General',
        items: [
          { text: 'Introducción', link: '/' },
          { text: 'Versiones', link: '/versiones' },
        ]
      },
      {
        text: 'Front-end',
        collapsible: true,
        items: [
          { text: 'Empezando', link: '/front-end/empezando' },
          { text: 'Login', link: '/front-end/login' },
          { text: 'Home', link: '/item-d' },
          { text: 'JS', link: '/item-d' },
        ]
      },
      {
        text: 'Back-end',
        collapsible: true,
        items: [
          { text: 'Empezando', link: '/back-end/empezando'},
          { text: 'Autenticación', link: '/item-d' },
          { text: 'Autorización', link: '/item-d' },
          { text: 'Token', link: '/item-d' },
        ]
      },
      {
        text: 'Apps',
        collapsible: true,
        items: [
          { text: 'Cuestionarios', link: '/back-end/empezando', items:[{ text: 'AGC', link: '/back-end/empezando'}, { text: 'IGC', link: '/back-end/empezando'}]},
          { text: 'Iktan', link: '/item-d' },
          { text: 'Consultas', link: '/item-d' },
        ]
      },
    ],

  }
}

  
