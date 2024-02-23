var menu_icon=document.querySelector("#navmenutoggle")
var offer_bar=document.querySelector(".offerbar")
var offer_bar_close=document.querySelector("#offerbarclose")
var side_bar=document.querySelector(".sidebar")
var side_bar_close=document.querySelector(".sidebarclose")

menu_icon.addEventListener("click",function(){
    side_bar.style.marginLeft="0";
})
side_bar_close.addEventListener("click",function(){
    side_bar.style.marginLeft="-60%";
})
offer_bar_close.addEventListener("click",function(){
    offer_bar.style.display="none"
})