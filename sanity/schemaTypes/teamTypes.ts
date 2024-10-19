import {defineField, defineType} from 'sanity'

export const teamType = defineType({
  name: 'team',
  type: 'object',
  title: 'Team members',
  fields: [

    defineField({
      name: 'Member',
      type: 'array',
      title: 'Team member',
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