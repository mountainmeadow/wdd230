// date //
const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("aside");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

datefield.innerHTML = `<em>${fulldate}</em>`;


/* last modified */
let text = document.lastModified;
document.getElementById("time").innerHTML = text;

document.getElementById("year").innerHTML = new Date().getFullYear();



// nav //
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');


hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);



// copyright//
document.getElementById("year").innerHTML = new Date().getFullYear();


//announcement// 
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    
    var n = weekday[d.getDay()];
    if (n == "Monday"){
        document.getElementById("meeting").style.display = "block"; /*visible*/

    }
	else if  (n == "Tuesday"){
        document.getElementById("meeting").style.display = "block"; /*visible*/
		
	}
	else {
        document.getElementById("meeting").style.display = "none"; /*hidden*/
    }

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
//number of vists//

const todayDisplay = document.querySelector("#today");
const visitsDisplay = document.querySelector("#visits");
const daysLeftOutput = document.querySelector("#daysleft");


let numVisits = Number(window.localStorage.getItem("visits-ls")); 
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}


numVisits++;

localStorage.setItem("visits-ls", numVisits);
