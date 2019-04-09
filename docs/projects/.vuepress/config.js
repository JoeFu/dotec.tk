module.exports = {
  title: 'My Tec Blog',
  description: 'Record my word and improvement'
}

module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'Notes', link: '/notes/' },
      { text: 'Fun', link: '/fun' },
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/Zh-cn/' },
          { text: 'English', link: '/' }
        ]
      }
    ],
    lastUpdated: 'Last Updated'
  }
}
