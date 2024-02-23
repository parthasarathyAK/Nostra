var menu_icon = document.querySelector('.navbar-menu-toggle');
var side_bar = document.querySelector('.sidebar');
var side_bar_close = document.querySelector('.sidebar_close');
var offer_close = document.getElementById('offer-close');
var offer_bar = document.querySelector('.offer_bar');

menu_icon.addEventListener("click",function(){
    side_bar.style.marginLeft="0";
});

side_bar_close.addEventListener("click",function(){
    side_bar.style.marginLeft="-60%";
});

offer_close.addEventListener("click",function(){
    offer_bar.style.display = "none";
});

var product_search = document.getElementById('product_search');
var product_container = document.querySelector('.products');
var product_list = product_container.querySelectorAll('div');

product_search.addEventListener("keyup",function(){
    var entered_name = this.value.toUpperCase();
    for(count=0;count<product_list.length;count++){
        product_name = product_list[count].querySelector('h1').textContent.toUpperCase();
        if(product_name.indexOf(entered_name) == -1){
            product_list[count].style.display = "none";
        }else{
            product_list[count].style.display = "block";
        }
    }
});