export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '614c513d11d1a28d2b6e1203',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-gg3ipp8c',
                  apiId: '616caac4-51c3-43eb-93dd-a087554d98a9'
                },
                {
                  buildHookId: '614c513ddd77998b04787fd2',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-zsaq9zwk',
                  apiId: '608bcc0e-43cd-4380-91b1-a10c38bb6456'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tfriberg/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-zsaq9zwk.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
