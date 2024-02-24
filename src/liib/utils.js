
export function constractMetaDatata({
  title = "Нечупара- магазин дитячих товарів",
  description = "магазин дитячих товарів",
  icons = "/favicon.ico",
  image = "/thumbnail.png",
}) {
  return {
    title,
    description,
      icons,
    image
  };
}