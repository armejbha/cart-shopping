function updateProductInput(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-input');
    let productNumber = productInput.value;
    if (isIncreasing) {
        productInput.value = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productInput.value = parseInt(productNumber) - 1;
    }
    productNumber = productInput.value;
    let productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    updateTotal();
}
function getProductUpdate(product) {
    const productInput = document.getElementById(product + '-input');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function updateTotal() {
    const phonePrice = getProductUpdate('phone') * 1219;
    const casePrice = getProductUpdate('case') * 59;
    const total = phonePrice + casePrice;
    const subTotal = document.getElementById('sub-total');
    subTotal.innerText = total;
    let taxTotal = document.getElementById('tax-total');
    taxTotal.innerText = total / 80;
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = parseFloat(subTotal.innerText) + parseFloat(taxTotal.innerText);

}
// increasing phone number 
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductInput('phone', 1219, true);

})
// devreasing phone number 
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductInput('phone', 1219, false);
})
// incrase case number 
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductInput('case', 59, true);
})
// decrasing case number 
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductInput('case', 59, false);
}) 