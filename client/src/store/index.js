import { proxy } from "valtio";

const state = proxy({

  intro: true,
  color: "#061161",
  isStickerTexture: true,
  isFullTexture: false,
  stickerDecal:"./logo.png",
  fullDecal:"./logo.png",
});

export default state;
