import { defineField, defineType } from "sanity";

export const usecaseType = defineType({
  name: "useCase",
  type: "document",
  title: "Use Case",
  fields: [
    defineField({
      name: "title",
      title: "Use Case Title",
      type: "string",
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: "mainHeading",
      type: "text",
      title: "Main heading",
    }),
    defineField({
      name: "content",
      type: "array",
      title: "Subtext points",
      of: [
        defineField({
          name: "points",
          type: "object",
          title: "Use cases",
          fields: [
            defineField({
              name: "pointHeading",
              type: "string",
              title: "Sub heading",
            }),
            defineField({
              name: "subtext",
              type: "text",
              title: "Subheading text",
            }),
          ],
        }),
      ],
    }),
  ],
});
