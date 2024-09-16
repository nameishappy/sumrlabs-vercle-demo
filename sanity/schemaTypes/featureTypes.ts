import {defineField, defineType} from 'sanity'

export const featureType = defineType({
  name: 'feature',
  type: 'object',
  title: 'Feature Array',
  fields: [
    defineField({
      name: 'features',
      type: 'array',
      title: 'Features',
      of: [
        defineField({
          name: "feature",
          type: "object",
          title: "Feature",
          
          fields: [
            defineField({
              name: "heading",
              type: "string",
              title: "Heading"
            }),
            defineField({
              name: "color",
              type: "string",
              title: "Color"
            }),
            defineField({
              name: "image",
              type: "image",
              title: "Image",
              fields: [
                defineField({
                  name: "alt",
                  type: "string",
                  title: "Alt Text"
                })
              ]
            })
          ]
        })
      ]
    }),
  ],
})