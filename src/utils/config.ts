import List from "@editorjs/list";
import Header from "@editorjs/header";
import Delimiter from "@editorjs/delimiter";
import Image from "@editorjs/image";
import Quote from "@editorjs/quote";
import Paragraph from "@editorjs/paragraph";
import Code from "@editorjs/code";
import Marker from "@editorjs/marker";
import Checklist from "@editorjs/checklist";
import { server } from "../api";
export const editorjsConfig = {
  // holder: "editorjs",
  minHeight: 150,
  tools: {
    list: {
      class: List,
      inlineToolbar: true,
    },
    marker: {
      class: Marker,
      inlineToolbar: true,
    },
    header: {
      class: Header,
      inlineToolbar: true,
      config: {
        placeholder: "Enter a header",
        levels: [2, 3, 4],
        defaultLevel: 3,
      },
    },
    paragraph: {
      class: Paragraph,
      inlineToolbar: true,
    },
    checklist: {
      class: Checklist,
      inlineToolbar: true,
    },
    delimiter: {
      class: Delimiter,
      inlineToolbar: true,
    },
    quote: {
      class: Quote,
      inlineToolbar: true,
      config: {
        quotePlaceholder: "Enter a quote",
        captionPlaceholder: "Quote's author",
      },
    },
    code: {
      class: Code,
      inlineToolbar: true,
    },
    image: {
      class: Image,
      inlineToolbar: true,
      config: {
        endpoints: {
          byFile: server + "/file/upload",
        },
        additionalRequestHeaders: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Access-Control-Allow-Credentials": true,
        },
      },
    },
  },
};
