// gotp to top
const backToTopButton = document.querySelector("#back-to-top");
window.addEventListener("scroll", scrollFunction);
function scrollFunction() {
  if (window.pageYOffset > 200) {
    backToTopButton.style.display = "block"; //show backToTopButton
  }
  else {
    backToTopButton.style.display = "none"; //hide backToTopButton
  }
}


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
