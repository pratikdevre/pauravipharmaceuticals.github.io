let all_product = document.getElementById('all_product');
let covid = document.getElementById('19');
let ayurveda = document.getElementById('ayur');
let surgical = document.getElementById('surgi');
let allopathic = document.getElementById('allo');
let immun = document.getElementById('immu');
let other = document.getElementById('others');

let all_product_id = document.getElementById('all_product_id');
let covid_id = document.getElementById('covid_id');
let ayurveda_id = document.getElementById('ayurveda_id');
let surgical_id = document.getElementById('surgical_id');
let allopathic_id = document.getElementById('allopathic_id');
let immun_id = document.getElementById('immun_id');
let other_id = document.getElementById('other_id');



all_product_id.style.backgroundColor = "black";
function allproducts() {
    all_product_id.style.backgroundColor = "black";
    covid.style.display = "block";
    all_product.style.display = "block";
    ayurveda.style.display = "block";
    surgical.style.display = "block";
    allopathic.style.display = "block";
    immun.style.display = "block";
    other.style.display = "block";
    other_id.style.backgroundColor = "whitesmoke";
    covid_id.style.backgroundColor = "whitesmoke";
    allopathic_id.style.backgroundColor = "whitesmoke";
    ayurveda_id.style.backgroundColor = "whitesmoke";
    immun_id.style.backgroundColor = "whitesmoke";
    surgical_id.style.backgroundColor = "whitesmoke";

}
function covid_fun() {
    covid.style.display = "block";
    covid_id.style.backgroundColor = "black";
    ayurveda.style.display = "none";
    surgical.style.display = "none";
    allopathic.style.display = "none";
    immun.style.display = "none";
    other.style.display = "none";
    other_id.style.backgroundColor = "whitesmoke";
    all_product_id.style.backgroundColor = "whitesmoke";
    allopathic_id.style.backgroundColor = "whitesmoke";
    ayurveda_id.style.backgroundColor = "whitesmoke";
    immun_id.style.backgroundColor = "whitesmoke";
    surgical_id.style.backgroundColor = "whitesmoke";
}
function allo_fun() {
    covid.style.display = "none";
    ayurveda.style.display = "none";
    surgical.style.display = "none";
    allopathic.style.display = "block";
    allopathic_id.style.backgroundColor = "black";
    immun.style.display = "none";
    other.style.display = "none";
    other_id.style.backgroundColor = "whitesmoke";
    all_product_id.style.backgroundColor = "whitesmoke";
    covid_id.style.backgroundColor = "whitesmoke";
    ayurveda_id.style.backgroundColor = "whitesmoke";
    immun_id.style.backgroundColor = "whitesmoke";
    surgical_id.style.backgroundColor = "whitesmoke";
}
function ayur_fun() {
    covid.style.display = "none";
    ayurveda.style.display = "block";
    ayurveda_id.style.backgroundColor = "black";
    surgical.style.display = "none";
    allopathic.style.display = "none";
    immun.style.display = "none";
    other.style.display = "none";
    other_id.style.backgroundColor = "whitesmoke";
    all_product_id.style.backgroundColor = "whitesmoke";
    covid_id.style.backgroundColor = "whitesmoke";
    allopathic_id.style.backgroundColor = "whitesmoke";
    immun_id.style.backgroundColor = "whitesmoke";
    surgical_id.style.backgroundColor = "whitesmoke";
}
function surgi_fun() {
    covid.style.display = "none";
    ayurveda.style.display = "none";
    surgical.style.display = "block";
    surgical_id.style.backgroundColor = "black";
    allopathic.style.display = "none";
    immun.style.display = "none";
    other.style.display = "none";
    other_id.style.backgroundColor = "whitesmoke";
    all_product_id.style.backgroundColor = "whitesmoke";
    covid_id.style.backgroundColor = "whitesmoke";
    ayurveda_id.style.backgroundColor = "whitesmoke";
    allopathic_id.style.backgroundColor = "whitesmoke";
    immun_id.style.backgroundColor = "whitesmoke";
}
function immun_fun() {
    covid.style.display = "none";
    ayurveda.style.display = "none";
    surgical.style.display = "none";
    allopathic.style.display = "none";
    immun.style.display = "block";
    immun_id.style.backgroundColor = "black";
    other.style.display = "none";
    other_id.style.backgroundColor = "whitesmoke";
    all_product_id.style.backgroundColor = "whitesmoke";
    covid_id.style.backgroundColor = "whitesmoke";
    ayurveda_id.style.backgroundColor = "whitesmoke";
    surgical_id.style.backgroundColor = "whitesmoke";
    allopathic_id.style.backgroundColor = "whitesmoke";
}
function other_fun() {
    covid.style.display = "none";
    ayurveda.style.display = "none";
    surgical.style.display = "none";
    allopathic.style.display = "none";
    immun.style.display = "none";
    other.style.display = "block";
    other_id.style.backgroundColor = "black";
    all_product_id.style.backgroundColor = "whitesmoke";
    covid_id.style.backgroundColor = "whitesmoke";
    ayurveda_id.style.backgroundColor = "whitesmoke";
    immun_id.style.backgroundColor = "whitesmoke";
    surgical_id.style.backgroundColor = "whitesmoke";
    allopathic_id.style.backgroundColor = "whitesmoke";
}

let cross = document.getElementById('cross');
let hide = document.getElementById('navbarSupportedContent');
let menu = document.getElementById('menu');

cross.style.display ="none";
function collapse(){
    hide.style.display = "none";
    cross.style.display ="none";
    menu.style.display ="block";
}
function show(){
    hide.style.display = "block";
    cross.style.display ="block";
    menu.style.display ="none";
}