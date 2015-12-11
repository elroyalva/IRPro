function placeOrder(){
   // alert('{restID:'+restoData.id+', orders: '+orderData.slice(0)+'}');
  var placeOrderURL = "/RestaurantOrderingSystem/ros/placeOrder";
  var xhr = new XMLHttpRequest();
  xhr.open("POST", placeOrderURL);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        // callback(xhr.responseText);
        if(xhr.responseText.localeCompare("true") == 0){
          orderData.splice(0, orderData.length);
          alert("Your order has been placed");
        }
        else if(xhr.responseText.localeCompare("false") == 0){
          alert("Unable to place order. Please try again");

        }
    }
  }
//  alert(orderData.slice(0));
//  alert(orderData.slice(0)[0].title);
 // var orderArray = JSON.stringify(orderData.slice(0));
//  alert(orderArray);
  xhr.send(JSON.stringify('{restID:'+restoData.id+',tableno:'+ tableNo +',' + 'orders: '+orderArray+'}'));
}