import {defineArrayMember, defineField, defineType} from 'sanity'

export const pageType = defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        defineArrayMember({
          name: 'hero',
          type: 'hero',
        }),
        defineArrayMember({
          name: 'infiniteText',
          type: 'infiniteText',
        }),
        defineArrayMember({
          name:"feature",
          type:"feature"
        }),
        defineArrayMember({
          name:"integration",
          type:"integration"
        }),
        defineArrayMember({
          name:"demo",
          type:"demo"
        }),
        defineArrayMember({
          name:"compliance",
          type:"compliance"
        }),
        defineArrayMember({
          name:"CTA",
          type:"cta"
        }),
      
      ],
    }),
  ],
})