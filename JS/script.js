{
const calculateResult = (amount,currency) => {
    const rateUSD = 0.93;
    const rateGBP = 1.13;
    const rateCNY = 0.14;
    const rateCAD = 0.7;
    const ratePLN = 0.21;

    switch (currency) {
        case "USD":
            return  amount / rateUSD;
        case "GBP":
            return amount / rateGBP;
        case "CNY":
            return amount / rateCNY;
        case "CAD":
            return amount / rateCAD;
        case "PLN":
           return amount / ratePLN;
    }
};

const removeResult = () => {
    document.querySelector(".js-result").innerHTML = "";
};

const updateResultText = (amount, result, currency) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerHTML = `${amount.toFixed(2)} EUR = <strong>${result.toFixed(2)} ${currency}</strong>`;
};

const onFormSubmit = (Event) => {
    Event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");
    const amount = +amountElement.value;
    const currency = currencyElement.value;
    const result = calculateResult(amount, currency);
    updateResultText(amount, result, currency);
};

const init = () => {
const formElement = document.querySelector(".js-form");
formElement.addEventListener("submit",onFormSubmit);
};

const remove = () => {
    const clearResultButton = document.querySelector(".js-clearResultButton");
    clearResultButton.addEventListener("click", removeResult);
};

init();
remove();
}