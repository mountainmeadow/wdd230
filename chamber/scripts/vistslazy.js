//number of vists//
const todayDisplay = document.querySelector("#today");
const visitsDisplay = document.querySelector("#visits");
const daysLeftOutput = document.querySelector("#daysleft");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls")); // Using the Number() function ensures that if the storage item does not exist, it will be converted into a zero (0) which helps on the if block condition.

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
// show todays date demonstration
todayDisplay.textContent = Date.now();
//84600000 equals the number of miliseconds in one day.

//lazy loaning//
const imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px",
};

if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver(items => {
        items.forEach(item => {
            if (item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);

    imagesToLoad.forEach(img => {
        imgObserver.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}


