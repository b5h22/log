module.exports = {
  title: "Daily Log",
  description: "Daily Log - vuepress",
  base: "/log/",
  themeConfig: {
    nav: [{ text: "Github", link: "https://github.com/b5h22" }], // github주소
    sidebar: [
      {
        type: 'group',
        title: 'Logbook',
        collapsable: true,
        children: [
          {
            type: 'group',
            title: '21-August',
            collapsable: true,
            children: [
              '/logbook/21-August/Aug-09',
            ]
          }
        ],
      }
    ]
  },
};