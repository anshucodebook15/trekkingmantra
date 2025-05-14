const ImgPublicPath = (path: string): string => {
  return `./assets/${path}`;
};
const svgIcon = (icon: string): string => {
  return `./assets/icons/${icon}.svg`;
};
const bannerImg = (img: string): string => {
  return `./assets/banners/${img}`;
};
const assetsImg = (img: string): string => {
  return `./assets/${img}`;
};
const utilsImg = (img: string): string => {
  return `./assets/utils/${img}.svg`;
};

export { ImgPublicPath, svgIcon, bannerImg, assetsImg,utilsImg };
