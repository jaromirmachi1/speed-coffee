import { defineType, defineField } from "sanity";

export const orderSchema = defineType({
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    defineField({
      name: "orderNumber",
      title: "Order number",
      type: "string",
      description: "Human-friendly order ID shown to the customer.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Paid", value: "paid" },
          { title: "Fulfilled", value: "fulfilled" },
          { title: "Cancelled", value: "cancelled" },
        ],
        layout: "radio",
      },
      initialValue: "pending",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "customerName",
      title: "Customer name",
      type: "string",
    }),
    defineField({
      name: "customerEmail",
      title: "Customer email",
      type: "string",
    }),
    defineField({
      name: "shippingAddress",
      title: "Shipping address",
      type: "text",
      description:
        "Full shipping address. You can also split this into multiple fields later if needed.",
    }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [
        defineField({
          name: "item",
          title: "Item",
          type: "object",
          fields: [
            {
              name: "product",
              title: "Product",
              type: "reference",
              to: [{ type: "product" }],
            },
            {
              name: "quantity",
              title: "Quantity",
              type: "number",
              validation: (Rule) => Rule.required().min(1),
            },
            {
              name: "unitPrice",
              title: "Unit price",
              type: "number",
              description: "Price per unit at the time of order.",
            },
            {
              name: "currency",
              title: "Currency",
              type: "string",
              initialValue: "EUR",
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "total",
      title: "Order total",
      type: "number",
      description: "Total order amount in the original currency.",
    }),
    defineField({
      name: "currency",
      title: "Currency",
      type: "string",
      initialValue: "EUR",
    }),
    defineField({
      name: "stripeSessionId",
      title: "Stripe session ID",
      type: "string",
      description: "Stripe Checkout session or payment identifier, if applicable.",
    }),
  ],
  orderings: [
    {
      title: "Newest first",
      name: "createdAtDesc",
      by: [{ field: "_createdAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "orderNumber",
      subtitle: "status",
      customerName: "customerName",
      total: "total",
      currency: "currency",
    },
    prepare({ title, subtitle, customerName, total, currency }) {
      const status = subtitle ? subtitle.toUpperCase() : "UNKNOWN";
      const amount =
        typeof total === "number" ? `${(currency || "EUR")} ${total.toFixed(2)}` : "";
      return {
        title: title || "Order",
        subtitle: [status, customerName, amount].filter(Boolean).join(" • "),
      };
    },
  },
});

