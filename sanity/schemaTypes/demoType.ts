import {defineField, defineType} from 'sanity'

export const demoType = defineType({
  name: 'demo',
  type: 'object',
  title: 'Demo section',
  fields: [
    defineField({
      name: 'bulletPoints',
      type: 'array',
      of:[
        defineField({
            name:"point",
            type:"text",
            title:'Point'
        })
      ]
    }),
    defineField({
      name: 'integrationImages',
      type: 'array',
      title: 'Integration Images',
      of: [
        defineField({
          name: 'image',
          type: 'image',
          title: 'Image',
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
              description: 'Alternative text for the image'
            })
          ]
        })
      ],
    }),
    
  ]
})