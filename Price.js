function BtnAdd() {
  var Price = document.getElementById('price').value;
  var Product = document.getElementById('product').value;
  var add = Price*Product;
  document.getElementById('bath').value = add;
  console.log(add);

}
function BtnCal() {
  var bath = document.getElementById('bath').value;
  var pay = document.getElementById('pay').value;

    if (pay < bath) {
         document.getElementById("payment").innerHTML = "ชำระเงินไม่ถูกต้อง";
        } else {
            var cal = pay - bath;
        document.getElementById("change").value = cal;
        document.getElementById('payment').innerHTML = "";
  }
}
