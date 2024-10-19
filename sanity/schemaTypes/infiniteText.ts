
import { defineField, defineType } from 'sanity';

export const infiniteTextType = defineType({
  name: 'infiniteText',
  type: 'object',
  title: 'Infinite Text',
  fields: [
    defineField({
      name: 'text1',
      type: 'string',
      title: 'Heading Text 1',
    }),
    defineField({
      name: 'text2',
      type: 'string',
      title: 'Heading Text 2',
    }),
    defineField({
      name: 'text3',
      type: 'string',
      title: 'Heading Text 3',
    }),
  ],
});