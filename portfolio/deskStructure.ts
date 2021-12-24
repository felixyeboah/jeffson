import S from "@sanity/desk-tool/structure-builder";
import Iframe from "sanity-plugin-iframe-pane";

import { resolveProductionUrl } from "./resolveProductionUrl";

// Here we declare which view panes show up for which schema types
export const getDefaultDocumentNode = ({ schemaType }) => {
  if (schemaType === `movie`) {
    return S.document().views([
      S.view.form(),
      // Including the iframe pane, with a function to create the url
      S.view
        .component(Iframe)
        .options({ url: (doc) => resolveProductionUrl(doc) })
        .title("Preview"),
    ]);
  }

  return S.document();
};

// Then we export the default list of menu items
export default () =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("post").title("Writings"),
      S.documentTypeListItem("bookmarks").title("Bookmarks"),
      S.documentTypeListItem("books").title("Books"),
      S.documentTypeListItem("inspirations").title("Inspirations"),
      S.documentTypeListItem("podcasts").title("Podcasts"),
      S.documentTypeListItem("projects").title("Projects"),
      S.documentTypeListItem("author").title("Author"),
      S.documentTypeListItem("uses").title("Uses"),
      S.documentTypeListItem("videos").title("Videos"),
      S.documentTypeListItem("comment").title("Comment"),
      S.documentTypeListItem("websites").title("Websites"),
    ]);
