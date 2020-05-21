'use strict';

module.exports = {
  url: 'https://lumen.netlify.com',
  pathPrefix: '/',
  title: 'Blog by yoshiki ohashi',
  subtitle: 'TODO ',
  copyright: '© 2020 Yoshiki Ohashi All rights reserved.',
  disqusShortname: '',
  postsPerPage: 4,
  googleAnalyticsId: 'UA-157574909-3',
  useKatex: false,
  menu: [
    {
      label: 'Top',
      path: '/'
    },
    {
      label: 'Category',
      path: '/category'
    },
    {
      label: 'Tags',
      path: '/tags'
    },
    // {
    //   label: 'Works',
    //   path: '/'
    // },
    {
      label: 'About me',
      path: '/pages/about'
    },
    // { TODO 制作物リストを作る
    //   label: 'Portfolio & Resume =>',
    //   path: 'https://yoshikiohashi.dev'
    // },
  ],
  author: {
    name: 'Yoshiki Ohashi',
    photo: 'https://avatars3.githubusercontent.com/u/20635620?s=400&u=280a071aeba97582646be64a5b75921fff99cfdf&v=4',
    bio: '27歳のフリーランスエンジニア。SI企業1年, Webベンチャー企業2年で上流から下流のリードエンジニアを経て独立。 エンジニアらしく性格は温和。プロジェクトチームに心理的安全性を求める。最近はWebアプリ案件で' +
        'Spring5、Spring Cloud Gatewayで実装。',
    contacts: {
      email: 'rrrtcdish2@gmail.com',
      facebook: 'yoshiki.ohashi0428',
      telegram: '',
      twitter: 'yoshiki__0428',
      github: 'yoshiki-0428',
      rss: '',
      vkontakte: '',
      linkedin: '',
      instagram: '',
      line: '',
      gitlab: '',
      weibo: '',
      codepen: '',
      youtube: '',
      soundcloud: '',
    }
  }
};
