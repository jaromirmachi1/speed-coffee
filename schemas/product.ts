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
 * - You can also pick an icon per advantage via "Icon".
 *   The frontend maps this key to a React Icon component.
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
            {
              name: "icon_key",
              title: "Icon",
              type: "string",
              options: {
                list: [
                  { title: "Leaf", value: "leaf" },
                  { title: "Bolt", value: "bolt" },
                  { title: "Mug", value: "mug" },
                  { title: "Coffee Pot", value: "coffee_pot" },
                  { title: "Chocolate Bar", value: "chocolate_bar" },
                  { title: "Fire", value: "fire" },
                  { title: "Droplet", value: "droplet" },
                  { title: "Snowflake", value: "snowflake" },
                ],
              },
              initialValue: "leaf",
            },
          ],
        },
      ],
      description:
        "Short bullet advantages for this product. These are shown with icons on the product detail page.",
    }),
    defineField({
      name: "variants",
      title: "Variants",
      type: "array",
      of: [
        defineField({
          name: "variant",
          title: "Variant",
          type: "object",
          fields: [
            defineField({
              name: "key",
              title: "Key",
              type: "string",
              description: "Stable key for this variant (e.g. 250ml, can-330).",
              validation: (Rule) => Rule.required(),
            }),
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
              name: "price",
              title: "Price",
              type: "number",
              validation: (Rule) => Rule.required().min(0),
            }),
            defineField({
              name: "currency",
              title: "Currency",
              type: "string",
              options: {
                list: [
                  { title: "EUR", value: "EUR" },
                  { title: "CZK", value: "CZK" },
                ],
              },
              initialValue: "EUR",
            }),
          ],
          preview: {
            select: {
              title: "title_en",
              subtitle: "price",
              currency: "currency",
            },
            prepare({ title, subtitle, currency }) {
              return {
                title: title || "Variant",
                subtitle:
                  typeof subtitle === "number"
                    ? `${currency || "EUR"} ${subtitle.toFixed(2)}`
                    : "No price",
              };
            },
          },
        }),
      ],
      description: "Optional: define product variants with their own titles and prices.",
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
