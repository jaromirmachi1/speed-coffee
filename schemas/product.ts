import { defineType, defineField } from "sanity";

export const productSchema = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "title_en",
      title: "Title (EN)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title_cz",
      title: "Title (CZ)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle_en",
      title: "Subtitle (EN)",
      type: "string",
    }),
    defineField({
      name: "subtitle_cz",
      title: "Subtitle (CZ)",
      type: "string",
    }),
    defineField({
      name: "description_en",
      title: "Description (EN)",
      type: "text",
    }),
    defineField({
      name: "description_cz",
      title: "Description (CZ)",
      type: "text",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "price_currency",
      title: "Currency",
      type: "string",
      initialValue: "EUR",
      options: {
        list: [
          { title: "EUR", value: "EUR" },
          { title: "CZK", value: "CZK" },
        ],
      },
    }),
    defineField({
      name: "image",
      title: "Product image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "alt_text_en",
      title: "Image alt text (EN)",
      type: "string",
    }),
    defineField({
      name: "alt_text_cz",
      title: "Image alt text (CZ)",
      type: "string",
    }),
    defineField({
      name: "is_active",
      title: "Active",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "display_order",
      title: "Display order",
      type: "number",
      initialValue: 0,
      description: "Lower numbers appear first in the shop.",
    }),
  ],
  orderings: [
    {
      title: "Display order",
      name: "displayOrderAsc",
      by: [{ field: "display_order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title_en: "title_en", media: "image" },
    prepare({ title_en, media }) {
      return {
        title: title_en,
        media,
      };
    },
  },
});
