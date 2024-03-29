
function setAppendText(target){
    const productTitle = target.childNodes[3].childNodes[3].innerText;
    const productPriceString = target.childNodes[3].childNodes[5].innerText.split(' ')[0];

    const productPriceValue = parseFloat(productPriceString); 

    const productName = document.getElementById('append-div');

    const count = productName.childElementCount ;

    const ol = document.createElement('ol');
    
    ol.innerHTML = `${count + 1} ${productTitle}  `
    ol.classList.add('mt-2','text-xl','text-black-primary','font-semibold','font-work');
    productName.appendChild(ol);  
    
    setTotalPrice(productPriceValue);
}

function setTotalPrice(productPrice){
    const totalPriceElement = document.getElementById('total-Price');

    const presentTotalPriceString = totalPriceElement.innerText ;
    const presentTotalPrice = parseFloat(presentTotalPriceString);

    const currentTotalAmount = presentTotalPrice + productPrice ;

    totalPriceElement.innerText = currentTotalAmount.toFixed(2) ;

    const afterDiscountElement = document.getElementById('totalAfterDiscount') ;
    afterDiscountElement.innerText = currentTotalAmount.toFixed(2) ;

    const deleteButton = document.getElementById('btn-purchase');

    if(currentTotalAmount > 0){
        deleteButton.removeAttribute('disabled');
    }

    const applyButton = document.getElementById('btn-apply');
     if(currentTotalAmount >= 200){
            applyButton.removeAttribute('disabled');
        }

     document.getElementById('btn-apply').addEventListener('click', function(){
        const couponField = document.getElementById('coupon-field');
        const couponFieldValue = couponField.value ;

        if(couponFieldValue === 'SELL200'){
            
        const discountElement = document.getElementById('discount-element');
        const totalDiscount = currentTotalAmount * 0.20 ;
        discountElement.innerText = totalDiscount.toFixed(2);

        const afterDiscountElement = document.getElementById('totalAfterDiscount') ;
        const currentAfterDiscount = currentTotalAmount - totalDiscount ; 

        afterDiscountElement.innerText = currentAfterDiscount.toFixed(2) ; 
       
        }
    })

    document.getElementById('go-home').addEventListener('click', function(){
        const productName = document.getElementById('append-div');
        productName.innerHTML = '' ;

        const totalPriceElement = document.getElementById('total-Price');
        totalPriceElement.innerText = '000.00' ;

        const afterDiscountElement = document.getElementById('totalAfterDiscount') ;
        afterDiscountElement.innerText = '000.00' ;

        const discountElement = document.getElementById('discount-element');
        discountElement.innerText = '00.00' ;

        const deleteButton = document.getElementById('btn-purchase');
        deleteButton.disabled = true ;

        const applyButton = document.getElementById('btn-apply');
        applyButton.disabled = true ;

        const couponField = document.getElementById('coupon-field');
        couponField.value = '' ;
    })
}





 







