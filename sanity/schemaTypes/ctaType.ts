import {defineField, defineType} from 'sanity'

export const ctaType = defineType({
  name: 'cta',
  type: 'object',
  title: 'CTA Section',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
    }),
    defineField({
        name:"buttonText",
        type:"text",
        title:"Button Title"
    })
    
  ]
})