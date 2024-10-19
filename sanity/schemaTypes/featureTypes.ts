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
              name: "link",
              type: "string",
              title: "Link"
            }),
            defineField({
              name: "color",
              type: "string",
              title: "color"
            }),
            defineField({
              name: "bulletBgcolor",
              type: "string",
              title: "bulletBgcolor"
            }),
            defineField({
              name: "description",
              type: "text",
              title: "Description"
            }),
            defineField({
              name:"bullets",
              type:"array",
              title:"Bullets",
              of: [
                defineField({
                  name: "bullet",
                  type: "string",
                  title: "Bullet"
                })
              ]
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