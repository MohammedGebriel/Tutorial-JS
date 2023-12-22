fetch("https://api.currencyfreaks.com/latest?apikey=13c56e89364e40f288579ddc12cf8905")
.then((result) => { 
    let myData = result.json()
    return myData;
}
    ).then((currency) => {
        let amount = document.querySelector(".amount");
        let egyPrice = document.querySelector(".egy span");
        let sarPrice = document.querySelector(".sar span");
    
        egyPrice.innerHTML = amount.innerHTML * currency.rates["EGP"]
        sarPrice.innerHTML = amount.innerHTML * currency.rates["SAR"]


        console.log(currency.rates["EGP"])
        console.log(currency.rates["SAR"])

        // egyPrice = amount.innerHTML * 
    })