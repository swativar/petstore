
$(".pet_img .cart_click").each(function(){
 $(this).on('click',function(){
   console.log(this);
   var no = $(this).attr("id");
   var src = $(this).parents(".card-image").children("img").attr("src");
   var name = $(this).parents(".card-image").children(".card-title").text();
   localStorage.setItem("petname"+no,name);
   localStorage.setItem("source"+no,src);
   localStorage.setItem("id",no);
    cartNumbers();
  });
});
//var i;
//var pets = document.querySelectorAll(".pet_img .cart_click");
//for(i=0 ; i<pets.length ; i++){
////  pets[i].addEventListener('click',function(){
 //   cartNumbers();
//    console.log(i);
//  })
//}
function cartNumbers(){
    let productNo = localStorage.getItem("cartNumbers");
    productNo = parseInt(productNo);
    if(productNo){
        localStorage.setItem("cartNumbers",productNo + 1);
        document.querySelector(".badge1").textContent = productNo + 1;
    } else {
        localStorage.setItem("cartNumbers",1);
       document.querySelector(".badge1").textContent = 1;
    }
}
function onLoad(){
  let productNo = localStorage.getItem("cartNumbers");
  if (productNo) {
    document.querySelector(".badge1").textContent = productNo;
  }
  if(productNo<0){
    localStorage.setItem("cartNumbers",0); 
  }
  if(productNo==0){
    localStorage.removeItem("id");
  }
}
onLoad();
