var getpet = localStorage.getItem("id");
//var petname = localStorage.getItem("petname");
//var href = localStorage.getItem("source");
//console.log(getpet,petname,href);
if(getpet){
    document.getElementById("cart_con").style.display="none";
    document.getElementById("button_cart").style.display="block";
}else{
    document.getElementById("cart_con").style.display="block";
    document.getElementById("button_cart").style.display="none";
}
var i;
for (i=0 ; i<31 ; i++){
var h6 = document.createElement("h6");
h6.textContent = localStorage.getItem("petname"+i)
var img = document.createElement("img");
img.src = localStorage.getItem("source"+i);
img.width = "300";
img.height = "200";
if(localStorage.getItem("source"+i)){
    img.id = i;
    console.log(img.id);
}
var button = document.createElement("button");
var div = document.createElement("div");
div.id="button_con";
button.textContent="Remove";
button.className = "btn black remove_button";
div.appendChild(button);
if (localStorage.getItem("petname"+i)){
document.getElementById("images").appendChild(h6);
document.getElementById("images").appendChild(img);
document.getElementById("images").appendChild(div);
}
}
$(".remove_button").each(function(){
    $(this).click(function(){
      var remove_id =  $(this).parent("#button_con").prev().attr("id");
      localStorage.removeItem("petname"+remove_id);
      localStorage.removeItem("source"+remove_id);
      let animal = localStorage.getItem("cartNumbers");
      localStorage.setItem("cartNumbers",animal-1);
      location.reload();
    })
    
})
$("#button_cart").click(function(){
      localStorage.removeItem("id");
      for(let i=0;i<31;i++){
      localStorage.removeItem("petname"+i);
      localStorage.removeItem("source"+i);
      }
      localStorage.setItem("cartNumbers",0);
      location.href="proceed.html";
})