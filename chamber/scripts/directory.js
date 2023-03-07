
const url = 'https://naomismith1.github.io/wdd230/chamber/data.json';

async function getCompanyData() {
  const response = await fetch(url);
  const data = await response.json();
  displayCompanies(data.companies);
  displayCompaniesList(data.companies)
  
}

function displayCompanies(companies) {
  const cards = document.querySelector('div.cards');

  companies.forEach((company) => {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let imageurl = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('p');
    let membershiplevel = document.createElement('p');
    h2.setAttribute('class', 'companynames');
    imageurl.setAttribute('src', company.imageurl);
    imageurl.setAttribute('alt', `img ${company.name}`);
    imageurl.setAttribute('loading', 'lazy');
    imageurl.setAttribute('width', 'auto');
    imageurl.setAttribute('height', '60');

    h2.textContent = `${company.companyname}`;;
    address.textContent = `Address: ${company.address}`;
    phone.textContent = `Phone: ${company.phonenumber}`;
    website.textContent = `Website: ${company.website}`;
    membershiplevel.textContent = `Membership level: ${company.membershiplevel}`;
  

    card.appendChild(imageurl);
    card.appendChild(h2);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website)
    card.appendChild(membershiplevel);


    cards.appendChild(card);
  })
}

getCompanyData();

