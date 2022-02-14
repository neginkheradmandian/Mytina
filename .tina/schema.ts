import { defineSchema } from '@tinacms/cli'

const heroBlock = {
  name: 'hero',
  label: 'Hero',
  ui: {
    defaultItem :{
      tagLine : "Here's some",
      headLine: 'this Big',
      text: 'Phasellus', 
    },
    fields: [
      {
        type: 'String',
        label: 'Tagline',
        name: 'tagLine',
      },
      {
        type: 'string',
        label: 'HeadLine',
        name: 'headLine',
      },
      {
        type:'string',
        label: 'Text',
        nane:'text',
        ui: {
          component: 'markdown',
        }, 
      },
    ],
  }
}

const featureBlock = {
  name : 'features',
  label: 'Features',
  fields: [
    {
      type: 'object',
      label: 'Feature Items',
      name: 'items',
      list: true,
      fields: [
        {
          type: 'string',
          label: 'Title',
          name: 'title'
        },
        {
          type: 'string',
          label: 'Text',
          name: 'text'
        },
      ],
    },
  ],
}
const contentBlock = {
  name: 'content',
  label: 'Content',
  ui:{
    defaultItem: {
      body: 'Lorem ipsum ',
    },
  },
  fields: [
    {
      type: 'string',
      ui: {
        component: 'markdown',
      },
      label: 'Body',
      name: 'body',
    },
  ],
}

export default defineSchema({
  collections: [
    {
      label: 'Page Content Test',
      name: 'page',
      path: 'content/page',
      fields: [
        {
          name: 'body',
          label: 'Main Content Test:',
          type: 'rich-text',
          isBody: true,
          templates:[{
            name: 'callout',
            label:'Callout',
            fields:[{
              name:'message',
              label:'Message',
              type:'string'
            }]
          }]
        },
        {
          name: 'email',
          label: 'Email',
          type: 'string',
          ui: {
            component:'text-email'
          }
        },
        {
          label: "Categories",
          name: "categories",
          type:"string",
          options:["movies", "art", "food", "sport"],
          list:true
        },
        {
          label: "Social Media",
          name: "socialmedia",
          type:"object",
          fields:[{
            label:"Handle",
            name:"handle",
            type:"string",
          },{
            label: "Service",
            name: "service",
            type:"string",
            options:["twitter", "instagram", "tiktok"],
            list: true,
          }]
        }
      ],
    },
    {
      label: 'Blog Posts',
      name: 'post',
      path: 'content/post',
      fields: [
        {
          type: 'string',
          label: 'post Title',
          name: 'title',
        },
        {
          type: 'string',
          label: 'Description',
          name: 'description',
          ui : {
            component : "radio-group",
            options : [{ value : "XL" , label: "XL"},{ value : "L" , label: "L"}]
          }
        },
        {
          type: 'datetime',
          label: 'Date',
          name: 'date',
          ui: {
            dateFormat:"DD.MM.YYYY",
            timeFormat: "HH:MM"
          }
        },
        {
          label:'Image',
          name:'image',
          type:'image'
        },
        {
          type:'boolean',
          label:'Published',
          name:'published'
        },
        {
          type:'reference',
          label:'Author02',
          name:'author',
          collections: ['author']
        },
        {
          type: 'rich-text',
          label: 'post Body',
          name: 'body',
          isBody:true,
          templates: [
            {
              name:'Cta',
              label: 'Call to Action',
              fields : [
                {
                  type: 'string',
                  name: 'heading',
                  label: 'Heading',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: 'Author01',
      name:'author',
      path:'content/post/authors',
      fields:[{
        label:'Avatar',
        name:'avatar',
        type:'string'
      },
      {
        label:'Avaname',
        name:'avaname',
        type:'string'
      }]
    }
  ],
})
