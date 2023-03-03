
const url = directory.json

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const directorys = jsonObject['directorys'];
    const cards = document.querySelector('.cards');

    directorys.forEach(directory => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let pimg = document.createElement('img');

        h2.textContent = `${directory.name}}`;
        p.textContent = `addresses: ${directory.addresses}`;
        p2.textContent = `Phone NUmber: ${directory.phonenumber}`;
        p3.textContent = `Website: ${directory.website}`;
        p4.textContent = `Membership: ${directory.membershiplevel}`;
        pimg.setAttribute('src', directory.imageurl);
        pimg.setAttribute('alt', `Name: ${directory.name}`);
        pimg.setAttribute('loading','lazy');
        card.append(h2);
        card.append(p);
        card.append(p2);
        card.append(p3);
        card.append(p4);
        card.append(pimg);
        cards.append(card);
    });
  });