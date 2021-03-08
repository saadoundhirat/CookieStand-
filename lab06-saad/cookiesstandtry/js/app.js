'use strict';
function randomgenerator (min ,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let storenumberone = {
  location : 'Seattle',
  minhourlycustomer : 23 ,
  maxhourlycustomer : 65 ,
  avgcookiesale : 6.3 ,
  working_hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  //generate random customer
  getrandomcustomer : function () {
    for (let index = 0; index <this.working_hours.length; index++)
    {this.randomcustomer[index] = randomgenerator(this.minhourlycustomer, this.maxhourlycustomer);}
  },
  randomcustomer : [],
  numberofcookiessales : 0,
  //number of cookies sales per hour 
  numberofcookiesperhout : function() {
    for (let index = 0; index < this.working_hours.length; index++) {
      this.finalvalue[index] = Math.ceil(this.avgcookiesale * this.randomcustomer[index]);
      this.numberofcookiessales += this.finalvalue[index];//this for looping and calculate all value of cookies
    }
  },
  //final value is the number of cookies
  finalvalue : [] , // this to show how many cookies has been saled in working hours 
  //creat display function
  displayoutput : function (){
    let pageoutput = document.getElementById('show-output'); // call element 
    let header = document.createElement('h2'); // create element 
    header.textContent =this.location; // to show the location 
    pageoutput.appendChild(header);
    let element = document.createElement('ul');
    pageoutput.appendChild(element);
    for (let index =0 ; index <this.working_hours.length ; index ++){
      let listitem = document.createElement('li');
      listitem.textContent =(this.working_hours[index] +' : '+ this.finalvalue[index]);
      element.appendChild(listitem);
    }
    let displaycookies = document.createElement('li');
    displaycookies.textContent = ('cookies-sales-in :'+ this.location + '='+this.numberofcookiessales);
    element.appendChild(displaycookies);
    pageoutput.appendChild(element);
  }
};
storenumberone.getrandomcustomer();
storenumberone.numberofcookiesperhout();
storenumberone.displayoutput();
///////////////////////////////////////////////////////////////////////////////////
let storenumbertwo = {
  location : 'Tokyo',
  minhourlycustomer : 3 ,
  maxhourlycustomer : 24 ,
  avgcookiesale : 1.2 ,
  working_hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  //generate random customer
  getrandomcustomer : function () {
    for (let index = 0; index <this.working_hours.length; index++)
    {this.randomcustomer[index] = randomgenerator(this.minhourlycustomer, this.maxhourlycustomer);}
  },
  randomcustomer : [],
  numberofcookiessales : 0,
  //number of cookies sales per hour 
  numberofcookiesperhout : function() {
    for (let index = 0; index < this.working_hours.length; index++) {
      this.finalvalue[index] = Math.ceil(this.avgcookiesale * this.randomcustomer[index]);
      this.numberofcookiessales += this.finalvalue[index];//this for looping and calculate all value of cookies
    }
  },
  //final value is the number of cookies
  finalvalue : [] , // this to show how many cookies has been saled in working hours 
  //creat display function
  displayoutput : function (){
    let pageoutput = document.getElementById('show-output'); // call element 
    let header = document.createElement('h2'); // create element 
    header.textContent =this.location; // to show the location 
    pageoutput.appendChild(header);
    let element = document.createElement('ul');
    pageoutput.appendChild(element);
    for (let index =0 ; index <this.working_hours.length ; index ++){
      let listitem = document.createElement('li');
      listitem.textContent =(this.working_hours[index] +' : '+ this.finalvalue[index]);
      element.appendChild(listitem);
    }
    let displaycookies = document.createElement('li');
    displaycookies.textContent = ('cookies-sales-in :'+ this.location + '='+this.numberofcookiessales);
    element.appendChild(displaycookies);
    pageoutput.appendChild(element);
  }
};
storenumbertwo.getrandomcustomer();
storenumbertwo.numberofcookiesperhout();
storenumbertwo.displayoutput();
/////////////////////////////////////////////////////////////////////////////////////////////////
let storenumberthree = {
  location : 'Dubai',
  minhourlycustomer : 11 ,
  maxhourlycustomer : 38 ,
  avgcookiesale : 3.7 ,
  working_hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  //generate random customer
  getrandomcustomer : function () {
    for (let index = 0; index <this.working_hours.length; index++)
    {this.randomcustomer[index] = randomgenerator(this.minhourlycustomer, this.maxhourlycustomer);}
  },
  randomcustomer : [],
  numberofcookiessales : 0,
  //number of cookies sales per hour 
  numberofcookiesperhout : function() {
    for (let index = 0; index < this.working_hours.length; index++) {
      this.finalvalue[index] = Math.ceil(this.avgcookiesale * this.randomcustomer[index]);
      this.numberofcookiessales += this.finalvalue[index];//this for looping and calculate all value of cookies
    }
  },
  //final value is the number of cookies
  finalvalue : [] , // this to show how many cookies has been saled in working hours 
  //creat display function
  displayoutput : function (){
    let pageoutput = document.getElementById('show-output'); // call element 
    let header = document.createElement('h2'); // create element 
    header.textContent =this.location; // to show the location 
    pageoutput.appendChild(header);
    let element = document.createElement('ul');
    pageoutput.appendChild(element);
    for (let index =0 ; index <this.working_hours.length ; index ++){
      let listitem = document.createElement('li');
      listitem.textContent =(this.working_hours[index] +' : '+ this.finalvalue[index]);
      element.appendChild(listitem);
    }
    let displaycookies = document.createElement('li');
    displaycookies.textContent = ('cookies-sales-in :'+ this.location + '='+this.numberofcookiessales);
    element.appendChild(displaycookies);
    pageoutput.appendChild(element);
  }
};
storenumberthree.getrandomcustomer();
storenumberthree.numberofcookiesperhout();
storenumberthree.displayoutput();
//////////////////////////////////////////////////////////////////////////////////////////////////
let storenumberfour= {
  location : 'paris',
  minhourlycustomer : 20 ,
  maxhourlycustomer : 38 ,
  avgcookiesale : 2.3 ,
  working_hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  //generate random customer
  getrandomcustomer : function () {
    for (let index = 0; index <this.working_hours.length; index++)
    {this.randomcustomer[index] = randomgenerator(this.minhourlycustomer, this.maxhourlycustomer);}
  },
  randomcustomer : [],
  numberofcookiessales : 0,
  //number of cookies sales per hour 
  numberofcookiesperhout : function() {
    for (let index = 0; index < this.working_hours.length; index++) {
      this.finalvalue[index] = Math.ceil(this.avgcookiesale * this.randomcustomer[index]);
      this.numberofcookiessales += this.finalvalue[index];//this for looping and calculate all value of cookies
    }
  },
  //final value is the number of cookies
  finalvalue : [] , // this to show how many cookies has been saled in working hours 
  //creat display function
  displayoutput : function (){
    let pageoutput = document.getElementById('show-output'); // call element 
    let header = document.createElement('h2'); // create element 
    header.textContent =this.location; // to show the location 
    pageoutput.appendChild(header);
    let element = document.createElement('ul');
    pageoutput.appendChild(element);
    for (let index =0 ; index <this.working_hours.length ; index ++){
      let listitem = document.createElement('li');
      listitem.textContent =(this.working_hours[index] +' : '+ this.finalvalue[index]);
      element.appendChild(listitem);
    }
    let displaycookies = document.createElement('li');
    displaycookies.textContent = ('cookies-sales-in :'+ this.location + '='+this.numberofcookiessales);
    element.appendChild(displaycookies);
    pageoutput.appendChild(element);
  }
};
storenumberfour.getrandomcustomer();
storenumberfour.numberofcookiesperhout();
storenumberfour.displayoutput();
///////////////////////////////////////////////////////////////////////////////////////
let storenumberfive = {
  location : 'lima',
  minhourlycustomer : 2 ,
  maxhourlycustomer : 16	 ,
  avgcookiesale : 4.6 ,
  working_hours : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  //generate random customer
  getrandomcustomer : function () {
    for (let index = 0; index <this.working_hours.length; index++)
    {this.randomcustomer[index] = randomgenerator(this.minhourlycustomer, this.maxhourlycustomer);}
  },
  randomcustomer : [],
  numberofcookiessales : 0,
  //number of cookies sales per hour 
  numberofcookiesperhout : function() {
    for (let index = 0; index < this.working_hours.length; index++) {
      this.finalvalue[index] = Math.ceil(this.avgcookiesale * this.randomcustomer[index]);
      this.numberofcookiessales += this.finalvalue[index];//this for looping and calculate all value of cookies
    }
  },
  //final value is the number of cookies
  finalvalue : [] , // this to show how many cookies has been saled in working hours 
  //creat display function
  displayoutput : function (){
    let pageoutput = document.getElementById('show-output'); // call element 
    let header = document.createElement('h2'); // create element 
    header.textContent =this.location; // to show the location 
    pageoutput.appendChild(header);
    let element = document.createElement('ul');
    pageoutput.appendChild(element);
    for (let index =0 ; index <this.working_hours.length ; index ++){
      let listitem = document.createElement('li');
      listitem.textContent =(this.working_hours[index] +' : '+ this.finalvalue[index]);
      element.appendChild(listitem);
    }
    let displaycookies = document.createElement('li');
    displaycookies.textContent = ('cookies-sales-in :'+ this.location + '='+this.numberofcookiessales);
    element.appendChild(displaycookies);
    pageoutput.appendChild(element);
  }
};
storenumberfive.getrandomcustomer();
storenumberfive.numberofcookiesperhout();
storenumberfive.displayoutput();














// let storeone = {
//   location : 'Seattle',
//   minhourlycustomer : 23 ,
//   maxhourlycustomer : 65 ,
//   avgcookiesale : 6.3 ,
//   avgcustomerperhour : [] ,
//   customerperhour : function () {
//     for (let index = 0; index < 14; index++) {this.avgcustomerperhour[index] = randomgenerator(this.minhourlycustomer, this.maxhourlycustomer); }},
//   //number of cookies per hour
//   nummber_cookiessales_perhour : function() {
//     return Math.floor(this.avgcookiesale * this.customerperhour);
//   },
// };
// let storetwo = {
//   location : 'Tokyo',
//   minhourlycustomer : 3 ,
//   maxhourlycustomer : 24 ,
//   avgcookiesale : 1.2 ,
//   avgcustomerperhour : [] ,
//   customerperhour : function () {
//     for (let index = 0; index < 14; index++) {this.avgcustomerperhour[index] = randomgenerator(this.minhourlycustomer, this.maxhourlycustomer); }},
//   nummber_cookiessales_perhour : function() {
//     return Math.floor(this.avgcookiesale *this.customerperhour());
//   },
// };
// let storethree = {
//   location : 'Dubai',
//   minhourlycustomer : 11 ,
//   maxhourlycustomer : 38 ,
//   avgcookiesale : 3.7 ,
//   avgcustomerperhour : [] ,
//   customerperhour : function () {
//     for (let index = 0; index < 14; index++) {this.avgcustomerperhour[index] = randomgenerator(this.minhourlycustomer, this.maxhourlycustomer); }},
//   nummber_cookiessales_perhour : function() {
//     return Math.floor(this.avgcookiesale *this.customerperhour())},
// };
// let storefour = {
//   location : 'Paris',
//   minhourlycustomer : 20 ,
//   maxhourlycustomer : 38 ,
//   avgcookiesale : 2.3 ,
//   avgcustomerperhour : [] ,
//   customerperhour : function () {
//     for (let index = 0; index < 14; index++) {this.avgcustomerperhour[index] = randomgenerator(this.minhourlycustomer, this.maxhourlycustomer); }},
//   nummber_cookiessales_perhour : function() {
//     return Math.floor(this.avgcookiesale *this.customerperhour())},
// };
// let storefive = {
//   location : 'Lima',
//   minhourlycustomer : 2 ,
//   maxhourlycustomer : 16 ,
//   avgcookiesale : 4.6 ,
//   avgcustomerperhour : [] ,
//   customerperhour : function () {
//     for (let index = 0; index < 14; index++) {this.avgcustomerperhour[index] = randomgenerator(this.minhourlycustomer, this.maxhourlycustomer); }},
//   nummber_cookiessales_perhour : function() {
//     return Math.floor(this.avgcookiesale *this.customerperhour())},
// };

// function randomgenerator (min ,max){
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// storeone.customerperhour();
// console.log(storeone.avgcustomerperhour);
// console.log(storetwo.avgcustomerperhour);
// console.log(storethree.avgcustomerperhour);
// console.log(storefour.avgcustomerperhour);
// console.log(storefive.avgcustomerperhour);


////////////////////////////////////////////////
// let working_hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// function randomgenerator (min ,max){
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function Storenumber (location ,minhourlycustomer,maxhourlycustomer,avgcookiesale ){
//   this.location = location;
//   this.minhourlycustomer = minhourlycustomer ;
//   this.maxhourlycustomer = maxhourlycustomer ;
//   this.avgcookiesale = avgcookiesale ;
//   this.working_hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//   this.getrandomcustomer = function () {
//     for (let index = 0; index <this.working_hours.length; index++)
//     {this.randomcustomer[index] = randomgenerator(this.minhourlycustomer, this.maxhourlycustomer);}
//   };
//   this.randomcustomer = [];
//   this.numberofcookiesperhout = function() {
//     for (let index = 0; index < this.working_hours.length; index++) {
//       this.finalvalue[index] = Math.ceil(this.avgcookiesale * this.randomcustomer[index]);
//     }
//   };
//   //final value is the number of cookies that have to be created per hour
//   this.finalvalue = [] ;
//   this.displayoutput = function (){
//     let pageoutput = document.getElementById('show-output');
//     let header = document.createElement('h2');
//     header.textContent =this.location;
//     pageoutput.appendChild(header);
//     let element = document.createElement('ul');
//     pageoutput.appendChild(element);
//     for (let index =0 ; index <this.working_hours.length ; index ++){
//       let listitem = document.createElement('li');
//       listitem.textContent =(this.working_hours[index] +' : '+ this.finalvalue[0]);
//       element.appendChild(listitem);
//     }
//     this.numberofcookiessales = 0;
//     let displaycookies = document.createElement('li');
//     this.getsumofcookiesforeachdayinlocation = function(){
//       for (let index = 0; index < this.finalvalue.length; index++) {
//         this.numberofcookiessales += this.finalvalue[index];
//       }
//       displaycookies.textContent = ('cookies-sales-in :'+ this.location + '='+this.numberofcookiessales);
//       element.appendChild(displaycookies);
//       pageoutput.appendChild(element);
//     };
//   };
// }

// let objectstoreone = new Storenumber ('jordan',50,65,6.3);
// objectstoreone.displayoutput();
