const new_Confirmed = document.getElementById('newConfirmed');
const new_Deaths = document.getElementById('newDeaths');
const new_Recovered = document.getElementById('newRecovered');
const Last_Update = document.querySelector('h6');



// var Total_Confirmed = [],Total_Deaths=[],Total_Recovered=[];
// var Total_Active = [] , date = [];

fetch('https://api.covid19api.com/summary')
   .then((response) => {
      return response.json();
   })
   .then((data) => {
      console.log(data);
      new_Confirmed.querySelector('span').append((data.Countries[76].NewConfirmed).toLocaleString());
      new_Deaths.querySelector('span').append((data.Countries[76].NewDeaths).toLocaleString());
      new_Recovered.querySelector('span').append((data.Countries[76].NewRecovered).toLocaleString());
      Last_Update.append(data.Countries[76].Date);
   });






//      return fetch('https://api.covid19api.com/country/india');
// }).then((response) =>{
//      return response.json();   
// }).then((data) =>{
//     console.log(data);
//     data.forEach((item)=>{
//       Total_Active.push(item.Active);
//       date.push(item.Date.substring(8,10));
//       Total_Confirmed.push({y:item.Confirmed,x:item.Date});
//       Total_Deaths.push({y:item.Deaths,x:item.Date});
//       Total_Recovered.push({y:item.Recovered,x:item.Date});
//     })  
//     var dates = new Date();
//     console.log(dates);
//     console.log(date[491]);
// });






