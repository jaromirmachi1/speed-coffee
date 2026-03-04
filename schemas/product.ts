import { defineType, defineField } from "sanity";

/**
 * HOW TO USE (Studio tips)
 *
 * Gallery images:
 * - Open a product in Sanity Studio.
 * - In the "Gallery images" field, click "Add item" and upload up to 5 images.
 * - The first image is shown as the main product image on the detail page.
 * - The rest appear as small thumbnails under the main image that you can click through.
 *
 * Advantages:
 * - In the "Advantages" field, click "Add item" for each bullet point you want.
 * - Fill in:
 *   - Title (EN) / Title (CZ) – short label (e.g. "Green tea", "Natural caffeine").
 *   - Description (EN) / Description (CZ) – one short sentence for each language.
 * - On the frontend we do NOT pick icons from Sanity. React Icons are assigned
 *   by position (1st, 2nd, 3rd, …) in the list:
 *   - 1st → leaf icon
 *   - 2nd → bolt icon
 *   - 3rd → mug icon
 *   - 4th+ repeat this pattern.
 *   So in Studio you only manage the text; icons are handled in code.
 */

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
      name: "gallery",
      title: "Gallery images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (Rule) => Rule.max(5),
      description:
        "Optional additional images shown as thumbnails on the product page (up to 5).",
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
      name: "advantages",
      title: "Advantages",
      type: "array",
      of: [
        {
          name: "advantage",
          title: "Advantage",
          type: "object",
          fields: [
            {
              name: "title_en",
              title: "Title (EN)",
              type: "string",
            },
            {
              name: "title_cz",
              title: "Title (CZ)",
              type: "string",
            },
            {
              name: "description_en",
              title: "Description (EN)",
              type: "text",
            },
            {
              name: "description_cz",
              title: "Description (CZ)",
              type: "text",
            },
          ],
        },
      ],
      description:
        "Short bullet advantages for this product. These are shown with icons on the product detail page.",
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
