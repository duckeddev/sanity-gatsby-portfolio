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
                  buildHookId: '5dac7f09b9a2fbc26fa9405f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-kzf9n4sk',
                  apiId: '099c1f0d-68d8-4b7a-af4c-340b38d13d13'
                },
                {
                  buildHookId: '5dac7f0a9033c4b3b59bcb6c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-uxuwgi9p',
                  apiId: '91107d47-a58b-464d-8e77-9a18404136be'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vpikta/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-uxuwgi9p.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
