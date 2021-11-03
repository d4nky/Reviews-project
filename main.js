// Buttons
const previousBtn = document.getElementById('previous'); 
const nextBtn = document.getElementById('next');
const surpriseBtn = document.getElementById('surprise');

// Information
const Img = document.getElementById('img'); 
const Name = document.getElementById('name');
const Job = document.getElementById('job');
const Review = document.getElementById('review');

// Object list
const reviews = [
{
    id: 1, name: 'Susan Smith', 
    job: 'WEB DEVELOPER',
    review: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    img: 'url(/images/web_developer.jpg)',
},

{  
    id: 2, name: 'Anna Johnson', 
    job: 'WEB DESIGNER',
    review: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    img: 'url(/images/web_designer.jpg)',
},

{   
    id: 3, name: 'Peter Jones', 
    job: 'INTERN',
    review: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    img: 'url(/images/intern.jpg)',
},

{   
    id: 4, 
    name: 'Bill Anderson', 
    job: 'THE BOSS',
    review:"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
    img: 'url(/images/theboss.jpg)',
},
];

let currentItem = 0;
// User array

// load initial item


function showPerson(currentItem){
    const item = reviews[currentItem];
    Name.innerHTML = item.name;
    Job.innerHTML = item.job;
    Review.innerHTML = item.review;
    Img.style.backgroundImage =  item.img;
}

window.addEventListener('DOMContentLoaded', function showPerson(){
    const item = reviews[currentItem];
    Name.innerHTML = item.name;
    Job.innerHTML = item.job;
    Review.innerHTML = item.review;
    Img.style.backgroundImage =  reviews[currentItem].img;
})

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
})

previousBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0 ){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})

surpriseBtn.addEventListener('click', function(){
    currentItem = (Math.floor(Math.random() * reviews.length));
    showPerson(currentItem);
})






// Name.innerHTML = reviews[currentItem++].name;
//         Job.innerHTML =  reviews[currentItem++].job;
//         Review.innerHTML =  reviews[currentItem++].review;
