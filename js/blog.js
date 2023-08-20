
function setAppendText(target){
    const productTitle = target.childNodes[3].childNodes[3].innerText;
    const productPriceString = target.childNodes[3].childNodes[5].innerText.split(' ')[0];

    const productPriceValue = parseFloat(productPriceString); 

    const productName = document.getElementById('append-div');

    const li = document.createElement('li');
    li.innerText = productTitle ;
    li.classList.add('mt-2','text-xl','text-black-primary','font-semibold','font-work');
    productName.appendChild(li);  
    
    setTotalPrice(productPriceValue);
    
    

//     const li = document.createElement('li');
//     li.innerText = target.childNodes[3].childNodes[3].innerText;
//     li.classList.add('mt-2','text-xl','text-black-primary','font-semibold','font-work');

//     const productNum = document.getElementById('append-div');
//     productNum.appendChild(li);
    
//    const totalPrice = document.getElementById('total-Price');
//    const totalPriceString = target.childNodes[3].childNodes[5].innerText.split(' ')[0] ;
//    const totalPriceNumber = parseFloat(totalPriceString); 


}


function setTotalPrice(productPrice){
    const totalPriceElement = document.getElementById('total-Price');

    const presentTotalPriceString = totalPriceElement.innerText ;
    const presentTotalPrice = parseFloat(presentTotalPriceString);

    const currentTotalAmount = presentTotalPrice + productPrice ;

    totalPriceElement.innerText = currentTotalAmount.toFixed(2) ;

    const deleteButton = document.getElementById('btn-purchase');
    if(currentTotalAmount > 0){
        deleteButton.removeAttribute('disabled');
    }
    if(currentTotalAmount >= 200){
        applyButton.removeAttribute('disabled');
    }
    const applyButton = document.getElementById('btn-apply').addEventListener('click', function(){
     

        const couponField = document.getElementById('coupon-field');
        const couponFieldValue = couponField.value ;

        if(couponFieldValue === 'SELL200'){
        const discountElement = document.getElementById('discount-element');
        const totalDiscount = currentTotalAmount * 0.20 ;
        discountElement.innerText = totalDiscount ;
        }

    })
    

    
        
        
        // if(couponFieldValue === 'SELL200'){
        //     const discountElementString = discountElement.innerText ;
        //     const discountElementValue = parseFloat(discountElementString);
        // }
    
    
}

 







