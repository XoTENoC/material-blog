import {MDCTopAppBar} from '@material/top-app-bar';

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

// calling images and buttons

const allB = document.getElementById('all-button');
const peopleB = document.getElementById('people-button');
const productB = document.getElementById('product-button');
const allL = document.getElementById('all-line');
const peopleL = document.getElementById('people-line');
const productL = document.getElementById('product-line');

const prodImg = document.getElementById('product');
const peopleImg = document.getElementById('people');
const allImg = document.getElementById('allImg');

allB.onclick = function(){
    allImg.classList.remove('ntc-gallery-none');
    prodImg.classList.add('ntc-gallery-none');
    peopleImg.classList.add('ntc-gallery-none');
    allL.classList.add('mdc-tab-indicator--active');
    peopleL.classList.remove('mdc-tab-indicator--active');
    productL.classList.remove('mdc-tab-indicator--active');
};

peopleB.onclick = function(){
    allImg.classList.add('ntc-gallery-none');
    prodImg.classList.add('ntc-gallery-none');
    peopleImg.classList.remove('ntc-gallery-none');
    allL.classList.remove('mdc-tab-indicator--active');
    peopleL.classList.add('mdc-tab-indicator--active');
    productL.classList.remove('mdc-tab-indicator--active');
};

productB.onclick = function(){
    allImg.classList.add('ntc-gallery-none');
    prodImg.classList.remove('ntc-gallery-none');
    peopleImg.classList.add('ntc-gallery-none');
    allL.classList.remove('mdc-tab-indicator--active');
    peopleL.classList.remove('mdc-tab-indicator--active');
    productL.classList.add('mdc-tab-indicator--active');
};

const home = document.getElementById('Home');

home.onclick = function(){
    location.href = "./index.html";
}