import { PackageIcon, TrolleyIcon } from "@sanity/icons";
import type { StructureResolver } from "sanity/structure";

/**
 * Desk layout for the embedded admin: products + orders first (Shopify-like grouping).
 */
export const adminStructure: StructureResolver = (S) =>
  S.list()
    .title("Speed Coffee — Admin")
    .items([
      S.listItem()
        .title("Products")
        .icon(PackageIcon)
        .child(
          S.documentTypeList("product")
            .title("Products")
            .defaultOrdering([{ field: "display_order", direction: "asc" }]),
        ),
      S.listItem()
        .title("Orders")
        .icon(TrolleyIcon)
        .child(
          S.documentTypeList("order")
            .title("Orders")
            .defaultOrdering([{ field: "_createdAt", direction: "desc" }]),
        ),
    ]);
