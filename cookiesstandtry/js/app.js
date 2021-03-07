
let storeone = {
  location : 'Seattle',
  minhourlycustomer : 23 ,
  maxhourlycustomer : 65 ,
  avgcookiesale : 6.3 ,
  avgcustomerperhour : [] ,
  customerperhour : function () {
    for (let index = 0; index < 14; index++) {this.avgcustomerperhour[index] = randomgenerator(this.minhourlycustomer, this.maxhourlycustomer); }},
  nummber_cookiessales_perhour : function() {
    return Math.floor(this.avgcookiesale *this.customerperhour());
  },
};
let storetwo = {
  location : 'Tokyo',
  minhourlycustomer : 3 ,
  maxhourlycustomer : 24 ,
  avgcookiesale : 1.2 ,
  avgcustomerperhour : [] ,
  customerperhour : function () {
    for (let index = 0; index < 14; index++) {this.avgcustomerperhour[index] = randomgenerator(this.minhourlycustomer, this.maxhourlycustomer); }},
  nummber_cookiessales_perhour : function() {
    return Math.floor(this.avgcookiesale *this.customerperhour());
  },
};
let storethree = {
  location : 'Dubai',
  minhourlycustomer : 11 ,
  maxhourlycustomer : 38 ,
  avgcookiesale : 3.7 ,
  avgcustomerperhour : [] ,
  customerperhour : function () {
    for (let index = 0; index < 14; index++) {this.avgcustomerperhour[index] = randomgenerator(this.minhourlycustomer, this.maxhourlycustomer); }},
  nummber_cookiessales_perhour : function() {
    return Math.floor(this.avgcookiesale *this.customerperhour())},
};
let storefour = {
  location : 'Paris',
  minhourlycustomer : 20 ,
  maxhourlycustomer : 38 ,
  avgcookiesale : 2.3 ,
  avgcustomerperhour : [] ,
  customerperhour : function () {
    for (let index = 0; index < 14; index++) {this.avgcustomerperhour[index] = randomgenerator(this.minhourlycustomer, this.maxhourlycustomer); }},
  nummber_cookiessales_perhour : function() {
    return Math.floor(this.avgcookiesale *this.customerperhour())},
};
let storefive = {
  location : 'Lima',
  minhourlycustomer : 2 ,
  maxhourlycustomer : 16 ,
  avgcookiesale : 4.6 ,
  avgcustomerperhour : [] ,
  customerperhour : function () {
    for (let index = 0; index < 14; index++) {this.avgcustomerperhour[index] = randomgenerator(this.minhourlycustomer, this.maxhourlycustomer); }},
  nummber_cookiessales_perhour : function() {
    return Math.floor(this.avgcookiesale *this.customerperhour())},
};

function randomgenerator (min ,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
storeone.customerperhour();
console.log(storeone.avgcustomerperhour);
console.log(storetwo.avgcustomerperhour);
console.log(storethree.avgcustomerperhour);
console.log(storefour.avgcustomerperhour);
console.log(storefive.avgcustomerperhour);
