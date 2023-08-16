'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

function getCountryData(country){
  fetch(`https://restcountries.com/v3.1/name/${country}`)
  .then(response => response.json())
  .then(data => {
    const [datas] = data;
    console.log(datas);

    const language = datas.languages;
    console.log(language);
    
    Object.values(language).forEach(language => {
      const languages = language;
      console.log(languages);

    const currency = datas.currencies;
    console.log(currency);

    Object.values(currency).forEach(currency => {
      const currencys = currency.name;
      console.log(currencys);
    
    

    const html = `
    <article class="country">
               <img class="country__img" src="${datas.flags.png}" />
               <div class="country__data">
                 <h3 class="country__name">${datas.name.common}</h3>
                 <h4 class="country__region">${datas.region}</h4>
                 <p class="country__capital">Capital : ${datas.capital}</p>
                 <br>
                 <p class="country__row"><span>👫</span>${(datas.population /  1000000).toFixed(1)} Million</p>
                 <p class="country__row"><span>🗣️</span>${languages}</p>
                 <p class="country__row"><span>💰</span>${currencys}</p>
          </div>
        </article>`;
    
     countriesContainer.insertAdjacentHTML('afterend' , html)
     countriesContainer.style.opacity = '1';
    ;
  })
})
})
.catch(error => {
  console.error(`Can't fetch the data for '${country}', "${error.message}" 🔥 🔥. <br> Please try Again... 😔`);
  const h1 = document.createElement('h1');
  h1.innerHTML = `<center>Can't fetch the data for <span>'${country}'</span>, "${error.message}" 🔥 🔥. <br> Please try Again... 😔</center>`;
  const parent = document.querySelector('#div1');
  parent.appendChild(h1);
})
}

getCountryData('portugels');

// function getCountryDetails(country){
// fetch(`https://restcountries.com/v3.1/name/${country}`)
// .then(response => response.json())
// .then(data => {
//   console.log(data);
//   const html = `
//   <article class="country">
//           <img class="country__img" src="${data.flags}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(data.population /  1000000).toFixed(1)} Million</p>
//             <p class="country__row"><span>🗣️</span>${data.languages}</p>
//             <p class="country__row"><span>💰</span>${data.currencies}</p>
//           </div>
//         </article>`;

//         countriesContainer.insertAdjacentHTML('afterend' , html)
//         countriesContainer.style.opacity = '1';
// })
// }

// getCountryDetails('portugal');