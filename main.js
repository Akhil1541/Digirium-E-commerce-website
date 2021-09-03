let carts = document.querySelectorAll('.add-cart');
let products = [{name:'grey_tshirts',
                 tag:'grey tshrts',
                 price:30,
                 inCart:0},
                 {name:'grey_tshirts',
                                  tag:'grey tshrts',
                                  price:30,
                                  inCart:0},
                                  {name:'grey_tshirts',
                                                   tag:'grey tshrts',
                                                   price:30,
                                                   inCart:0}];


for(let i=0;i< cart.length;i++){
  cart[i].addEventListener('click',0=>{cartNumbers();});
  console.log("added to cart");
 cartNumbers();

}
function onloadCartNUmbers(){
let productNUmbers = localStorage.getItem('cartNumbers');
if(productNumbers){
  localStorage.getItem('cartNumbers',productNumbers + 1);
  document.querySelector('cartp span').textContext = productNumbers;
}



}
function cartNumbers() {
  productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);

  if(productNumbers){
    localStorage.getItem('cartNumbers',productNumbers + 1);
    document.querySelector('cartp span').textContext = productNumbers + 1;
  }
  else{
    localStorage.getItem('cartNumbers',productNumbers);
    document.querySelector('cartp span').textContext = 1;
  }
}

function onloadCartNUmbers();
