import { defineType, defineField } from "sanity";

export const eventSchema = defineType({
  name: "event",
  title: "Event",
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
      name: "description_en",
      title: "Description (EN)",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "description_cz",
      title: "Description (CZ)",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "startDate",
      title: "Start date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "endDate",
      title: "End date",
      type: "datetime",
      description: "Optional — use for multi-day events.",
    }),
    defineField({
      name: "location_en",
      title: "Location (EN)",
      type: "string",
    }),
    defineField({
      name: "location_cz",
      title: "Location (CZ)",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Cover image",
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
      name: "externalUrl",
      title: "External link",
      type: "url",
      description: "Optional link to tickets, event page, or Instagram post.",
    }),
    defineField({
      name: "linkLabel_en",
      title: "Link label (EN)",
      type: "string",
      initialValue: "Learn more",
    }),
    defineField({
      name: "linkLabel_cz",
      title: "Link label (CZ)",
      type: "string",
      initialValue: "Více informací",
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
      description: "Featured events appear larger in the grid.",
    }),
    defineField({
      name: "isPublished",
      title: "Published",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "display_order",
      title: "Display order",
      type: "number",
      initialValue: 0,
      description: "Lower numbers appear first among events on the same date.",
    }),
  ],
  orderings: [
    {
      title: "Start date (newest first)",
      name: "startDateDesc",
      by: [{ field: "startDate", direction: "desc" }],
    },
    {
      title: "Display order",
      name: "displayOrderAsc",
      by: [{ field: "display_order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title_en: "title_en",
      startDate: "startDate",
      media: "image",
      isPublished: "isPublished",
    },
    prepare({ title_en, startDate, media, isPublished }) {
      const date = startDate
        ? new Date(startDate).toLocaleDateString("cs-CZ", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })
        : "No date";
      return {
        title: title_en || "Untitled event",
        subtitle: `${date}${isPublished === false ? " · Draft" : ""}`,
        media,
      };
    },
  },
});
