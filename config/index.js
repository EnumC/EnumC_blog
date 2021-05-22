const site = {
  pathPrefix: '/gatsby-simple-blog',
  title: 'Eric\'s Random Blog',
  author: 'Eric Qian',
  description: 'Random Stuff I\'ve came across.',
  siteUrl: 'https://ericqian.me/blog',
  twitter: '',
  github: 'EnumC',
  medium: '',
  facebook: '',
  disqusShortName: 'enumc',
  googleTrackingId: 'G-XXXXXXXX',
  lang: 'en',
  displayTranslations: true,
  postsPerPage: 3,
};

const supportedLanguages = {
  en: 'English',
  'zh-hans': '简体中文',
};

module.exports = {
  site,
  supportedLanguages,
};
