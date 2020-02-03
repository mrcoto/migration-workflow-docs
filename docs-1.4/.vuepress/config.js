module.exports = {
  base: '/migration-workflow-docs/1.4/',
  title: 'Migration Workflow V1.4',
  description: 'Migration Workflow Laravel Package',
  markdown: {
    lineNumbers: false
  },
  themeConfig: {
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'GitHub', link: 'https://github.com/mrcoto/migration-workflow-docs/' }
    ],
    sidebar: [
      {
        title: 'Getting Started',
        path: '/content/getting-started/',
        collapsable: true,
        sidebarDepth: 2,
      },
      {
        title: 'Installation',
        path: '/content/installation/',
        collapsable: true,
        sidebarDepth: 2,
      },
      {
        title: 'Quickstart',
        path: '/content/quickstart/',
        collapsable: true,
        sidebarDepth: 2,
      },
      {
        title: 'Make Command',
        path: '/content/commands/make/',
        collapsable: true,
        sidebarDepth: 2,
      },
      {
        title: 'Module Make Command',
        path: '/content/commands/module-make/',
        collapsable: true,
        sidebarDepth: 2,
      },
      {
        title: 'Deploy Command',
        path: '/content/commands/deploy/',
        collapsable: true,
        sidebarDepth: 2,
      },
      {
        title: 'Migrate Command',
        path: '/content/commands/migrate/',
        collapsable: true,
        sidebarDepth: 2,
      },
      {
        title: 'Delete Command',
        path: '/content/commands/delete/',
        collapsable: true,
        sidebarDepth: 2,
      },
    ],
    lastUpdated: 'Last Updated', // string | boolean
  }
}