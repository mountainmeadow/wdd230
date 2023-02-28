const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    const cards = document.querySelector('.cards');

    prophets.forEach(prophet => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let p5 = document.createElement('p');
        let pimg = document.createElement('img');

        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        p.textContent = `Date of Birth: ${prophet.birthdate}`;
        p2.textContent = `Place of Birth: ${prophet.birthplace}`;
        p4.textContent = `Years prophet: ${prophet.length}`;
        p5.textContent = `Prophet number: ${prophet.order}`;
        p3.textContent = `Number of children: ${prophet.numofchildren}`;
        pimg.setAttribute('src', prophet.imageurl);
        pimg.setAttribute('alt', `Date of Birth: ${prophet.birthdate}`);
        pimg.setAttribute('loading','lazy');
        card.append(h2);
        card.append(p);
        card.append(p2);
        card.append(p3);
        card.append(p4);
        card.append(p5);
        card.append(pimg);
        cards.append(card);
    });
  });