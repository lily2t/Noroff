function getInput() {
    let billValue;
    do {
        billValue = parseFloat(prompt('Enter the bill value.'))
    } while (isNaN(billValue) || billValue < 0)
    return billValue;
}
function tipCalculator(billV) {

    let tip = billV >= 50 && billV <= 300 ? billV * 0.15 : billV > 300 ? billV * 0.2 : 0;
    let totalValue = billV + tip;
    const message = tip ? `The bill was ${billV}, the tip was ${tip}, and the total value was ${totalValue}` : 'There is no tip since the bill value is less than 50';
    document.write(message)
    /*if (billV >= 50 && billV <= 300) {
        tip = billV * 0.15;
        document.write(`The bill was ${billV}, the tip was ${tip}, and the total value was ${billV + tip} `)
    }
    else if (billV > 300) {
        tip = billV * 0.2
        document.write(`The bill was ${billV}, the tip was ${tip}, and the total value was ${billV + tip} `)

    }
    else {
        document.write('There is no tip since the bill value is less than 50')
    }*/
}

tipCalculator(getInput())