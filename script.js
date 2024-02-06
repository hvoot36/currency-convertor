
function convertCurrency(inputAmount, inputCurrency, convertedCurrency) {
    let outputAmount = inputAmount;
    let currencies = ['₹', '₽', '$', '€', '£', '¥', '₩', '元'];
    let conversions = [83.06, 91.01, 1, 0.93, 0.79, 148.08, 1327.54, 7.11] // 1 usd in all currencies

    let from = currencies.indexOf(inputCurrency);
    let to = currencies.indexOf(convertedCurrency);

    outputAmount *= (conversions[to]/conversions[from]);
    outputAmount = Math.round(outputAmount * 100) / 100;
    console.log(outputAmount);
    return outputAmount;
}

function isCurrency(str) {
    let regexGetCurrency = /[^\d\s-\.]+(?<!->)/g;
    let regexIsCurrency = /[₹₽\$€£¥₩元]/g;
    let arr = str.match(regexGetCurrency);
    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i].search(regexIsCurrency) == -1 || arr.length < 2)
        {
            form1.answer.value = "Invalid Syntax!";
        }
    }
}

document.getElementById('convert').addEventListener("click", () => {
    let str = form1.answer.value.toString();
    isCurrency(str);
    if(str.endsWith('-> '))
    {
        form1.answer.value = "Invalid Syntax!";
    }
    let amountEndIndex = str.search("-");
    let inputAmount = parseFloat(str.substring(1,amountEndIndex));
    console.log(inputAmount);
    let inputCurrency = str[0];
    console.log(inputCurrency);
    let outputCurrency = str[str.length - 1];
    console.log(outputCurrency);
    let convertedAmount = convertCurrency(inputAmount, inputCurrency, outputCurrency);
    form1.answer.value = outputCurrency + " " + convertedAmount;
    
});