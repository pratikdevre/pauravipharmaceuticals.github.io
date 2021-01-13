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



function allproducts() {
    covid.style.display = "block";
    all_product.style.display = "block";
    ayurveda.style.display = "block";
    surgical.style.display = "block";
    allopathic.style.display = "block";
    immun.style.display = "block";
    other.style.display = "block";
}
function covid_fun() {
    covid.style.display = "block";
    ayurveda.style.display = "none";
    surgical.style.display = "none";
    allopathic.style.display = "none";
    immun.style.display = "none";
    other.style.display = "none";
}
function allo_fun() {
    covid.style.display = "none";
    ayurveda.style.display = "none";
    surgical.style.display = "none";
    allopathic.style.display = "block";
    immun.style.display = "none";
    other.style.display = "none";
}
function ayur_fun() {
    covid.style.display = "block";
    ayurveda.style.display = "block";
    surgical.style.display = "none";
    allopathic.style.display = "none";
    immun.style.display = "none";
    other.style.display = "none";
}
function surgi_fun() {
    covid.style.display = "none";
    ayurveda.style.display = "none";
    surgical.style.display = "block";
    allopathic.style.display = "none";
    immun.style.display = "none";
    other.style.display = "none";
}
function immun_fun() {
    covid.style.display = "none";
    ayurveda.style.display = "none";
    surgical.style.display = "none";
    allopathic.style.display = "none";
    immun.style.display = "block";
    other.style.display = "none";
}
function other_fun() {
    covid.style.display = "block";
    ayurveda.style.display = "none";
    surgical.style.display = "none";
    allopathic.style.display = "none";
    immun.style.display = "none";
    other.style.display = "other";
}