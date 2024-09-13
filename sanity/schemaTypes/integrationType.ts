import {defineField, defineType} from 'sanity'

export const integrationType = defineType({
  name: 'integration',
  type: 'object',
  title: 'Integration Section',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
    }),
    defineField({
      name: 'subheading',
      type: 'text',
      title: 'Subheading',
      description: 'A brief description or subheading'
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
      validation: Rule => Rule.min(1).max(4)
    }),
    
  ]
})