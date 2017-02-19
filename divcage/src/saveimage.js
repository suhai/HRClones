//saveimage.js: saves image to file

var saveImage = function(){
  $('.color-palette').fadeOut(400);
  //if it's a pure video stream, hide it and render the current frame to the canvas
  if(!painting && !erasing){  
    $('.main-video').hide();
    flipCanvas();
    $('.main-canvas').show();
  }
  //otherwise it will already be a canvas 
  dataURL = c.toDataURL();
  image.src = dataURL;
  $('.main-canvas').hide();
  $('.main-image').show();
  $('#save-button a').attr("href",dataURL);
};
