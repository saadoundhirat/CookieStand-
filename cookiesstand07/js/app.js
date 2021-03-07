'use strict';
let Seattle = {
  city_name: 'Seattle',
  min_cust: 23,
  max_cust: 65,
  Avg_Cookie: 6.3,
  working_hors: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  result: [],
  number_of_cutomers_hourly: function () {
    let number_of_customers = Math.floor(Math.random() * (this.max_cust - this.min_cust) + this.min_cust);
    // console.log(number_of_customers);
    return number_of_customers;
  },
  simulated_amount_of_cookies: function () {
    return Math.floor(this.Avg_Cookie * this.number_of_cutomers_hourly());
  },
  show_the_result: function () {
    let sum = 0;
    let element = document.getElementById(this.city_name);
    for (let i = 0; i < this.working_hors.length; i++) {
      this.result.push(this.simulated_amount_of_cookies());
      sum = sum + this.result[i];
      let tag = document.createElement('li');
      tag.innerHTML = this.working_hors[i] + ' ' + this.result[i];
      element.appendChild(tag);
      // console.log(this.working_hors[i] + ' ' + this.simulated_amount_of_cookies());
    }
    let tag = document.createElement('li');
    tag.innerHTML = 'Total is : ' + sum;
    element.appendChild(tag);
    console.log(sum);
  },
};

let Tokyo = {
  city_name: 'Tokyo',
  min_cust: 3,
  max_cust: 24,
  Avg_Cookie: 1.2,
  working_hors: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  result: [],
  number_of_cutomers_hourly: function () {
    let number_of_customers = Math.floor(Math.random() * (this.max_cust - this.min_cust) + this.min_cust);
    // console.log(number_of_customers);
    return number_of_customers;
  },
  simulated_amount_of_cookies: function () {
    return Math.floor(this.Avg_Cookie * this.number_of_cutomers_hourly());
  },
  show_the_result: function () {
    let sum = 0;
    let element = document.getElementById(this.city_name);
    for (let i = 0; i < this.working_hors.length; i++) {
      this.result.push(this.simulated_amount_of_cookies());
      sum = sum + this.result[i];
      let tag = document.createElement('li');
      tag.innerHTML = this.working_hors[i] + ' ' + this.result[i];
      element.appendChild(tag);
      // console.log(this.working_hors[i] + ' ' + this.simulated_amount_of_cookies());
    }
    let tag = document.createElement('li');
    tag.innerHTML = 'Total is : ' + sum;
    element.appendChild(tag);
    console.log(sum);
  },
};


let Dubai = {
  city_name: 'Dubai',
  min_cust: 11,
  max_cust: 38,
  Avg_Cookie: 3.7,
  working_hors: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  result: [],
  number_of_cutomers_hourly: function () {
    let number_of_customers = Math.floor(Math.random() * (this.max_cust - this.min_cust) + this.min_cust);
    // console.log(number_of_customers);
    return number_of_customers;
  },
  simulated_amount_of_cookies: function () {
    return Math.floor(this.Avg_Cookie * this.number_of_cutomers_hourly());
  },
  show_the_result: function () {
    let sum = 0;
    let element = document.getElementById(this.city_name);
    for (let i = 0; i < this.working_hors.length; i++) {
      this.result.push(this.simulated_amount_of_cookies());
      sum = sum + this.result[i];
      let tag = document.createElement('li');
      tag.innerHTML = this.working_hors[i] + ' ' + this.result[i];
      element.appendChild(tag);
      // console.log(this.working_hors[i] + ' ' + this.simulated_amount_of_cookies());
    }
    let tag = document.createElement('li');
    tag.innerHTML = 'Total is : ' + sum;
    element.appendChild(tag);
    console.log(sum);
  },
};


let Paris = {
  city_name: 'Paris',
  min_cust: 20,
  max_cust: 38,
  Avg_Cookie: 2.3,
  working_hors: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  result: [],
  number_of_cutomers_hourly: function () {
    let number_of_customers = Math.floor(Math.random() * (this.max_cust - this.min_cust) + this.min_cust);
    // console.log(number_of_customers);
    return number_of_customers;
  },
  simulated_amount_of_cookies: function () {
    return Math.floor(this.Avg_Cookie * this.number_of_cutomers_hourly());
  },
  show_the_result: function () {
    let sum = 0;
    let element = document.getElementById(this.city_name);
    for (let i = 0; i < this.working_hors.length; i++) {
      this.result.push(this.simulated_amount_of_cookies());
      sum = sum + this.result[i];
      let tag = document.createElement('li');
      tag.innerHTML = this.working_hors[i] + ' ' + this.result[i];
      element.appendChild(tag);
      // console.log(this.working_hors[i] + ' ' + this.simulated_amount_of_cookies());
    }
    let tag = document.createElement('li');
    tag.innerHTML = 'Total is : ' + sum;
    element.appendChild(tag);
    console.log(sum);
  },
};


let Lima = {
  city_name: 'Lima',
  min_cust: 2,
  max_cust: 16,
  Avg_Cookie: 4.6,
  working_hors: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  result: [],
  number_of_cutomers_hourly: function () {
    let number_of_customers = Math.floor(Math.random() * (this.max_cust - this.min_cust) + this.min_cust);
    // console.log(number_of_customers);
    return number_of_customers;
  },
  simulated_amount_of_cookies: function () {
    return Math.floor(this.Avg_Cookie * this.number_of_cutomers_hourly());
  },
  show_the_result: function () {
    let sum = 0;
    let element = document.getElementById(this.city_name);
    for (let i = 0; i < this.working_hors.length; i++) {
      this.result.push(this.simulated_amount_of_cookies());
      sum = sum + this.result[i];
      let tag = document.createElement('li');
      tag.innerHTML = this.working_hors[i] + ' ' + this.result[i];
      element.appendChild(tag);
      // console.log(this.working_hors[i] + ' ' + this.simulated_amount_of_cookies());
    }
    let tag = document.createElement('li');
    tag.innerHTML = 'Total is : ' + sum;
    element.appendChild(tag);
    console.log(sum);
  },
};



Seattle.show_the_result();
Tokyo.show_the_result();
Dubai.show_the_result();
Paris.show_the_result();
Lima.show_the_result();

