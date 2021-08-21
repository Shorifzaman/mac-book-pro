                                            
                                            /* Button class */

//Memory
const freeMemory = document.getElementById('free-memory');
const primeMemory = document.getElementById('prime-memory');

//Store
const freeStore = document.getElementById('free-store');
const primeStore = document.getElementById('prime-store');
const bigStore = document.getElementById('big-store');
//Delivery free-delevery
const freeDelivery = document.getElementById('free-delivery');
const expressDelivery = document.getElementById('express-delivery');
//
const bestPeice = document.getElementById('best-rice');
const memoryPrice= document.getElementById('memory');
const storePrice = document.getElementById('store');
const deliveryField = document.getElementById('shipping');
const totalPrice = document.getElementById('total');
const grandTotal= document.getElementById('grand-total');
//promo code
var discountCode = document.getElementById('discount_code1');

//selected 
function isContain(elem) {
    return elem.classList.contains("selected");

};

//memory click handler

freeMemory.addEventListener('click', function(){

    //selected 
    if(!isContain(freeMemory)){
        freeMemory.classList.add("selected");
        primeMemory.classList.remove("selected");
    }

    memoryPrice.innerText ='0';
    upDateTotal()

});
//memory
primeMemory.addEventListener('click', function(){
  
     //selected 
     if(!isContain(freeMemory)){
        freeMemory.classList.remove("selected");
        primeMemory.classList.add("selected");
    }
    memoryPrice.innerText ='180';
    upDateTotal()

});
//freeStore
freeStore.addEventListener('click', function(){

    //selected 
    if(!isContain(freeMemory)){
        freeStore.classList.add("selected");
        primeStore.classList.remove("selected");
        bigStore.classList.remove("selected");

    }
    storePrice.innerText ='0';
    upDateTotal()

});
//primeStore
primeStore.addEventListener('click', function(){
    //selected 
    if(!isContain(freeMemory)){
        freeStore.classList.remove("selected");
        primeStore.classList.add("selected");
        bigStore.classList.remove("selected");
    }
    storePrice.innerText ='100';
    upDateTotal()

});
//bigStore
bigStore.addEventListener('click', function(){

    //selected 
    if(!isContain(freeMemory)){
        freeStore.classList.remove("selected");
        primeStore.classList.remove("selected");
        bigStore.classList.add("selected");

    }
    storePrice.innerText ='180';
    // deliveryField.innerText ='0';
    // totalPrice.innerText ='1299';
    // grandTotal.innerText ='1299';
    upDateTotal()

});

//freeDelivery
freeDelivery.addEventListener('click', function(){

    //selected 
    if(!isContain(freeMemory)){
        freeDelivery.classList.add("selected");
        expressDelivery.classList.remove("selected");
    }
    deliveryField.innerText ='0';
    upDateTotal()

});
//expressDelivery
expressDelivery.addEventListener('click', function(){
    //selected 
    if(!isContain(freeMemory)){
        freeDelivery.classList.remove("selected");
        expressDelivery.classList.add("selected");
    }
    deliveryField.innerText = '20';
    upDateTotal();

});

//grandTotal
grandTotal.addEventListener('click', function(){
    grandTotal.innerText = '1299';
    upDateTotal();

});

//upDate total
function upDateTotal() {

    const productCost = Number(bestPeice.innerText);
    const memoryCost = Number(memoryPrice.innerText);
    const storeCost = Number(storePrice.innerText);
    const shippingCost = Number(deliveryField.innerText);


    let granTotalCost = productCost + memoryCost + storeCost + shippingCost ;
    console.log(granTotalCost);
        totalPrice.innerText = granTotalCost;
        grandTotal.innerText = granTotalCost;

};

//promo code Apply 
const  discount_code = () => {
// let totalamtcurr = parseInt(total_cart_amt.innerHTML);
let totalamtcurr = parseInt(grandTotal.innerText);
let error_trw = document.getElementById('error_trw');
let error_trw_faild = document.getElementById('error_trw-faild');

    if(discountCode.value.toLowerCase() === 'stevekaku'){
    let diccountPromo = 20;
    let newtotalamt = diccountPromo / 100 * grandTotal.innerText;

    let totalPromo = grandTotal.innerText - newtotalamt;
    grandTotal.innerText = totalPromo;

    error_trw.style.display = 'block'
    error_trw_faild.style.display = 'none'
    discountCode.value = '';

    }else{
        discountCode.value = '';
        error_trw_faild.style.display = 'block'
        error_trw.style.display = 'none'
     
    }
};














                                                                /* END */

