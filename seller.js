window.onload = function(){
    // alert("working");
    
   var AddProduct = document.getElementById("section-compartment");
   console.log(AddProduct, "AddProduct");
   var Product = JSON.parse(localStorage.getItem("DataList"));
   console.log(Product, "Product");

   var array =[]

   for(var i=0; i < Product.length; i++){

    array += `<div id ="section-compartment"><img src = "${Product[i].Image}"></img><h1>${Product[i].Name}</h1><p>${Product[i].Price}</p></div>`
   }
   console.log(array, "array");

   AddProduct.innerHTML = array;
   console.log(AddProduct, "AddProduct");

}


