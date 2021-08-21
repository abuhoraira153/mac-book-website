// function for Memory cost
function updateMemoryCost(isUpdating){
    const memoryCost = document.getElementById('update-memory-cost');
    if(isUpdating == true){
        const memoryCostAmount = 0;
        memoryCost.innerText = memoryCostAmount;
    }
    else{
        const memoryCostAmount = 180;
        memoryCost.innerText = memoryCostAmount;
    }
    totalPrice();
}
// function for delivery cost
function updateDeliveryCost(isFree){
    const deliveryCost = document.getElementById('update-delivery-cost');
    if(isFree == true){
        const deliveryCostAmount = 0;
        deliveryCost.innerText = deliveryCostAmount;
    }
    else{
        const deliveryCostAmount = 20;
        deliveryCost.innerText = deliveryCostAmount;
    }
}
function totalPrice(){
    const bestPrice  = 1299;
    const totalMemoryCost = document.getElementById('update-memory-cost');
    const totalMemoryCostAmount = totalMemoryCost.innerText;
    const totalStorageCost = document.getElementById('update-storage-cost');
    const totalStorageCostAmount = totalStorageCost.innerText;
    const totalDeliveryCost = document.getElementById('update-delivery-cost')
    const totalDeliveryCostAmount = totalDeliveryCost.innerText;
    const totalCost = bestPrice + parseInt(totalMemoryCostAmount) + parseInt(totalStorageCostAmount) + parseInt(totalDeliveryCostAmount);
    document.getElementById('total').innerText = totalCost;
    document.getElementById('update-total-price').innerText = totalCost;
    return totalCost;
}
// update memorycost
document.getElementById('normal-memory-cost').addEventListener('click', function(){
    updateMemoryCost(true);
    totalPrice();
});
document.getElementById('extra-memory-cost').addEventListener('click', function(){
    updateMemoryCost(false);
    totalPrice();
});
// update storage cost
document.getElementById('storage-option-1').addEventListener('click', function(){
    const updateStorageCost = document.getElementById('update-storage-cost');
    const updateStorageCostAmount = 0;
    updateStorageCost.innerText = updateStorageCostAmount;
    totalPrice();
});
document.getElementById('storage-option-2').addEventListener('click', function(){
    const updateStorageCost = document.getElementById('update-storage-cost');
    const updateStorageCostAmount = 100;
    updateStorageCost.innerText = updateStorageCostAmount;
    totalPrice();
});
document.getElementById('storage-option-3').addEventListener('click', function(){
    const updateStorageCost = document.getElementById('update-storage-cost');
    const updateStorageCostAmount = 180;
    updateStorageCost.innerText = updateStorageCostAmount;
    totalPrice();
});
// update delivery cost
document.getElementById('without-delivery-cost').addEventListener('click', function(){
    updateDeliveryCost(true);
    totalPrice();
});
document.getElementById('with-delivery-cost').addEventListener('click', function(){
    updateDeliveryCost(false)
    totalPrice();
});
// add promo code
document.getElementById('promo-btn').addEventListener('click', function(){
    const promoField = document.getElementById('promo-field');
    const promoFieldText = promoField.value;
    if(promoFieldText == 'stevekaku'){
        document.getElementById('total').innerText = totalPrice() - (totalPrice()*20)/100;
        promoField.value = '';
    }
});

