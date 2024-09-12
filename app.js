const URL = "http://api.exchangeratesapi.io/v1/latest?access_key=65439372480b1e967d4a9f05edd54166";

const dropdowns = document.querySelectorAll("select");
const btn = document.querySelector("button");

for (let select of dropdowns){
    for(let curr in countryList){
        let a = document.createElement("option");
        a.value = curr;
        a.innerText = curr;
        if(select.name === "from" && curr === "USD"){
            a.selected = "selected";
        }else if (select.name === "to" && curr === "INR"){
            a.selected = "selected";
        }
        select.append(a);
    }
    select.addEventListener("change", (evt) => {
        let element = evt.target;
        let image = element.parentElement.querySelector("img");
        image.src = `https://flagsapi.com/${countryList[element.value]}/flat/64.png`
    });
}

const from_text = document.querySelector(".from select");
const to_text = document.querySelector(".to select");
const msg = document.querySelector(".msg")

const getData = async () => {
    const amount = document.querySelector("input");
    const amountValue = amount.value;
    if(amountValue === "" || amount < 1){
        amountValue = 1;
        amount.value = "1";
    }

    let response = await fetch(URL);
    let data = await response.json();
    const fromSideData = data.rates[from_text.value];
    const toSideData = data.rates[to_text.value];
    const rate = toSideData/fromSideData;
    const totalamount = amountValue*rate;

    msg.innerText = `${amountValue} ${from_text.value} = ${totalamount} ${to_text.value}`

}

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  getData();
});

window.addEventListener("load", () => {
  getData();
});
