/* eslint-disable @typescript-eslint/no-unused-vars */
import { BlockNoteSchema, defaultBlockSpecs } from "@blocknote/core";
import { Theme, lightDefaultTheme } from "@blocknote/react";

export const lightRedTheme = {
  colors: {
    editor: {
      text: "#222222",
      background: "#F0EBE1",
    },
    highlights: lightDefaultTheme.colors!.highlights,
  },
  borderRadius: 4,
  fontFamily: "Helvetica Neue, sans-serif",
} satisfies Theme;

const { image, table, ...newBlockSpecs } = defaultBlockSpecs

export const schema = BlockNoteSchema.create({
  blockSpecs: {
    ...newBlockSpecs,
  },
});