import { Product } from "../types/product.interface";

//  this is just a utility function for the sake of the images in this file. I would normally not place this here and would not recommend fetching images like this in a professional scenario
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export const productList: Product[] = [{
  "index": 0,
  "isSale": false,
  "price": "$49.99",
  "productImage": `https://placebeer.com/${getRandomInt(30, 200)}/${getRandomInt(30, 200)}`,
  "productName": "Pure Blonde Crate",
  "type": "Beer"
},
{
  "index": 1,
  "isSale": true,
  "price": "$14.99",
  "productImage": `https://placebeer.com/${getRandomInt(30, 200)}/${getRandomInt(30, 200)}`,
  "productName": "Victoria Bitter 4x6x375ml",
  "type": "Beer"
},
{
  "index": 2,
  "isSale": false,
  "price": "$24.99",
  "productImage": `https://placebeer.com/${getRandomInt(30, 200)}/${getRandomInt(30, 200)}`,
  "productName": "Kirin Megumi 4x6x330ml",
  "type": "Beer"
},
{
  "index": 3,
  "isSale": true,
  "price": "$4.99",
  "productImage": `https://placebeer.com/${getRandomInt(30, 200)}/${getRandomInt(30, 200)}`,
  "productName": "Panhead CH Johnny Octane Can",
  "type": "Beer"
},
{
  "index": 4,
  "isSale": false,
  "price": "$25.99",
  "productImage": `https://placebeer.com/${getRandomInt(30, 200)}/${getRandomInt(30, 200)}`,
  "productName": "Aquila Spark SauvB Bottle",
  "type": "Wine"
},
{
  "index": 5,
  "isSale": true,
  "price": "$29.99",
  "productImage": `https://placebeer.com/${getRandomInt(30, 200)}/${getRandomInt(30, 200)}`,
  "productName": "Bernadino Spumante Bottle",
  "type": "Wine"
},
{
  "index": 6,
  "isSale": true,
  "price": "$69.99",
  "productImage": `https://placebeer.com/${getRandomInt(30, 200)}/${getRandomInt(30, 200)}`,
  "productName": "Grey Goose Orginal 10x12x50ml",
  "type": "Spirits"
},
{
  "index": 7,
  "isSale": false,
  "price": "$49.99",
  "productImage": `https://placebeer.com/${getRandomInt(30, 200)}/${getRandomInt(30, 200)}`,
  "productName": "Scrumpy RBerry 6x1.25L",
  "type": "Cider"
}];
