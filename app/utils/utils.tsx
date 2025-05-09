const ImgPublicPath = (path: string): string => {
  return `./assets/${path}`;
};

const svgIcon = (icon: string): string => {
  return `./assets/icons/${icon}.svg`;
};
const bannerImg = (img: string): string => {
  return `./assets/banners/${img}`;
};

export { ImgPublicPath, svgIcon, bannerImg };
