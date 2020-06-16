
$(document).ready(function(){
    M.AutoInit();
    $(".cart_click").click(function(){
        M.toast({html:'Added to cart',completeCallback: function(){alert('Go to Cart to complete process..')}});
    })
  });
$(".form_in").submit(function(e){
    e.preventDefault();
var xhttp = new XMLHttpRequest();
xhttp.addEventListener("readystatechange",function(){
    if(this.readyState==4 && this.status==200){
        $("html").html(this.responseText);
    }
})
xhttp.open("GET","thank.html",true);
xhttp.send();
})
$("#show").hide();
$("#form_get").submit(function(e){
    e.preventDefault();
    $("#form_hide").hide();
    $("#show").show();
});
$("#form_s_show").hide();
$("#form_s").submit(function(e){
    e.preventDefault();
    $("#form_s_hide").hide();
    $("#form_s_show").show();
});
