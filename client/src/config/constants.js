import { swatch, fileIcon, ai, logoShirt, stylishShirt } from "../assets";

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
    icon: sticker,
  },
  {
    name: "carColor",
    icon: car_color,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "stickerDecal",
    filterTab: "carSticker",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "carColor",
  },
};
