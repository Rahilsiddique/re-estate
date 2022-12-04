import { indianCities } from "../data/cities";
import { propertyType } from "../data/propertyType";
import { houseImages } from "../data/houseImages";

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

function randomPrices(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const mainData = [...Array(500)].map(() => {
  return {
    location: indianCities[Math.floor(Math.random() * indianCities.length)],
    price: randomPrices(10000, 55000),
    propertyType: propertyType[Math.floor(Math.random() * propertyType.length)],
    time: randomDate(new Date("01/01/2022"), new Date()).toLocaleDateString(),
    img: houseImages[Math.floor(Math.random() * houseImages.length)]
  };
});
