
let imageIndex = 0;
showImage();

function showImage(){

  // images part
  let images = $('#slideshow-images img');
  for(let i = 0; i < images.length; i++){
    images[i].style.display = 'none';
  }
  if (imageIndex > (images.length-1)) {imageIndex = 0}
  if (imageIndex < 0) {imageIndex = images.length-1}
  images[imageIndex].style.display = 'inline';


  // dots part
  let dots = $('.dot');
  for(i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[imageIndex].className += ' active'
}


$('.dot').click(function(){
  imageIndex = this.id
  showImage()
});

$('#slideshow-left-arrow').click(function(){
  imageIndex--;
  showImage()
})

$('#slideshow-right-arrow').click(function(){
  imageIndex++;
  showImage()
})
