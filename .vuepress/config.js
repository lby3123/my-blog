module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  title: "木白",
  description: '书上有路勤为径，学海无涯苦作舟。',
  dest: 'public',
  head: [
    // ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
      /*{ text: 'Docs',
        icon: 'reco-message',
        items: [
          { text: 'vuepress-reco', link: '/docs/theme-reco/' }
        ]
      },*/
      { text: 'github', link: 'https://github.com/lby3123', icon: 'reco-github' },
      { text: '关于',
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/lby3123', icon: 'reco-github' }
        ]
      },
    ],
    sidebar: {
      '/docs/theme-reco/': [
        '',
        'theme',
        'plugin',
        'api'
      ]
    },
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
    friendLink: [
      {
        title: 'github',
        link: 'https://github.com/lby3123'
      },
    ],
    logo: '/head.jpg',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: '木白',
    // 作者头像
    authorAvatar: '/head.jpg',
    // 备案号
    // record: 'xxxx',
    // 项目开始时间
    startYear: '2021'
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  plugins: [
    ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
      title: '公告',
      body: [
        {
          type: 'title',
          content: '欢迎加我的QQ',
          style: 'text-aligin: center;',
        },
        {
          type: 'text',
          content: 'QQ：157620486',
          style: 'text-align: center;'
        },
      ],
    }],
  ],
  markdown: {
    lineNumbers: true
  }
}  
