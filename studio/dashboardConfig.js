export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '632c2bc86e62207668b262ca',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-iur4p34j',
                  apiId: 'd1f2eeda-e626-49d5-bb7d-64d13e5f88d0'
                },
                {
                  buildHookId: '632c2bc95368f37690ee3fe0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-m2trh68a',
                  apiId: '1c94605d-9421-4b6e-bf13-6caaa456da92'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/contact-arunonline/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-m2trh68a.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
