// replace gallery image of product
var productImg = document.getElementById('productImage');
var smallImg = document.getElementsByClassName('small-image');

smallImg[0].onclick = function()
{
  productImg.src = smallImg[0].src;
}
smallImg[1].onclick = function()
{
  productImg.src = smallImg[1].src;
}

// gotp to top
// var topbtn = document.getElementById("gotopbtn");
// window.onscroll = function() {
//   showBtn()
// };

// function showBtn(){
//   if(document.body.scrollTop > 800 || document.documentElement.scrollTop > 800)
//   {
//     topbtn.style.display = "block";
//   }
//   else
//   {
//     topbtn.style.display = "none";
//   }
// }