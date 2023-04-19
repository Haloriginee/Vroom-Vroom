import { swatch, file, eve, carSticker, carColor } from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: file,
  },
  {
    name: "aipicker",
    icon: eve,
  },
];

export const FilterTabs = [
  {
    name: "carSticker",
    icon: carSticker,
  },
  {
    name: "carColor",
    icon: carColor,
  },
];

export const DecalTypes = {
  sticker: {
    stateProperty: "stickerDecal",
    filterTab: "carSticker",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "carColor",
  },
};
