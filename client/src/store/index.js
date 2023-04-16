import { proxy } from "valtio";

const state = proxy({

  intro: true,
  color: "#0074CA",
  isStickerTexture: true,
  isFullTexture: false,
  stickerDecal:"./logo.png",
  fullDecal:"./logo.png",
});

export default state;
