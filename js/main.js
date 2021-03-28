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