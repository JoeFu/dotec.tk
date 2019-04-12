module.exports = {
  title: 'Wine Plus',
  description: 'Wine Plus development summary, search and trace the procee of the project',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'WinePlus', link: '/wineplus/' },
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/Zh-cn/' },
          { text: 'English', link: '/' }
        ]
      }
    ],
    lastUpdated: 'Last Updated',
    displayAllHeaders: true // 默认值：false
  }
}