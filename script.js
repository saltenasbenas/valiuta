let gbp, usd, eur;

gbp = document.getElementById("GBP");
usd = document.getElementById("USD");
eur = document.getElementById("EUR");
button = document.getElementById("button");
currencyButton = document.getElementById("currencyButton");
first = document.getElementById("first");


function init() {
    gbpConvert();
    eurConvert();
    usdConvert();
    onButtonClick(gbp);

};
function gbpConvert() {
    usd.value = (gbp.value) * 1.33;
    eur.value = (gbp.value) * 1.11;

};
function eurConvert() {
    gbp.value = (eur.value) * 0.89;
    usd.value = (eur.value) * 1.19;

};
function usdConvert() {
    gbp.value = (usd.value) * 0.75;
    eur.value = (usd.value) * 0.84;
};

button.addEventListener("onclick", init()
);
init();
// function onButtonClick(gbp) {
   
//   gbp.remove();
// };
// function onButtonClick(usd) {
   
//     usd.remove();
// };
// function onButtonClick(eur) {
   
//     eur.remove();
// };