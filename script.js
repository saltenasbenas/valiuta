let  gbp, usd, eur;

gbp = document.getElementById("GBP");
usd = document.getElementById("USD");
eur = document.getElementById("EUR");
button = document.getElementById("button");
function init()
{
    gbpConvert();
    eurConvert();
    usdConvert();
  
};

function gbpConvert()
{
    usd.value = parseFloat(gbp.value) * 1.33;
    eur.value = parseFloat(gbp.value) * 1.11;
  
};

function eurConvert()
{
    gbp.value = parseFloat(eur.value) * 0.89;
    usd.value = parseFloat(eur.value) * 1.19;
   
};

function usdConvert()
{
    gbp.value = parseFloat(usd.value) * 0.75;
    eur.value = parseFloat(usd.value) *  0.84;
};

init();


button.addEventListener("click", init()
);