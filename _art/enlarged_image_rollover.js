/*
 * A small collection of functions which can be used to display an enlarged
 * version of an image thumbnail when the mouse is over that thumbnail.
 * CREDIT TO: enzoferber, See: http://jsfiddle.net/enzoferber/SyJsF/2/
 */
var ImageHoverTooltips = {

/*
 * For all images with the matching `className`, will add listeners which
 * show a large size of the image when the mouse hovers over the image.
 * @param {string} className The class name to match.
 */
addEnlargedImageTooltipOnHover: function(className) {
  var images = document.getElementsByClassName(className);
  for (var i = 0; i < images.length; ++i) {
    var image = images[i];
    image.addEventListener('mouseover',
                           ImageHoverTooltips.mouseOverListener, false);
    image.addEventListener('mouseout',
                           ImageHoverTooltips.mouseOutListener, false);
  }
},

/*
 * Listener for mouse over our image.
 */
mouseOverListener: function(event) {
  ImageHoverTooltips.displayTooltip(this);
},

/*
 * Listener for mouse moving out of our image.
 */
mouseOutListener: function(event) {
  ImageHoverTooltips.hideTooltip(this);
},

/*
 * Displays a larger version of the image in a 'tooltip' style div
 * which follows the mouse.
 */
displayTooltip: function(imgLink) {
  var tooltip = document.createElement("div");
  var fullImg = document.createElement("img");

  fullImg.src = imgLink.src;
  fullImg.style.width = "600px";
  tooltip.appendChild(fullImg);
  tooltip.className = "imgTooltip";

  tooltip.style.top =  "60px";

  imgLink._tooltip = tooltip;
  ImageHoverTooltips._tooltip = tooltip;
  imgLink.parentNode.appendChild(tooltip);

  imgLink.addEventListener("mousemove",
                           ImageHoverTooltips.followMouse, false);
},

/*
 * Removes the enlarged image 'tooltip' div.
 */
hideTooltip : function(imgLink) {
  if (imgLink) {
    imgLink.parentNode.removeChild(imgLink._tooltip);
    imgLink._tooltip = null;
    ImageHoverTooltips._tooltip = null;
  }
},

/*
 * Returns the X coordinate of the mouse.
 */
mouseX: function(event) {
  if(!event) event = window.event;
  if(event.pageX) return event.pageX;
  else if(event.clientX)
    return event.clientX + (document.documentElement.scrollLeft ?
                document.documentElement.scrollLeft :
                document.body.scrollLeft);
  else return 0;
},

/*
 * Returns the Y coordinate of the mouse.
 */
mouseY: function(event) {
  if(!event) event = window.event;
  if(event.pageY) return event.pageY;
  else if(event.clientY)
    return event.clientY + (document.documentElement.scrollTop ?
                document.documentElement.scrollTop :
                document.body.scrollTop);
  else return 0;
},

/*
 * Makes our 'tooltip' follow the mouse.
 */
followMouse: function(event) {
  var tooltip = ImageHoverTooltips._tooltip.style;
  var offX = 15, offY = 15;
  var bufferWidth = 400 + offX;

  tooltip.left = (parseInt(ImageHoverTooltips.mouseX(event))+offX) + 'px';
  tooltip.top = (parseInt(ImageHoverTooltips.mouseY(event))+offY) + 'px';

  var browserWidth = window.innerWidth || document.body.clientWidth;
  var widthCutoff = browserWidth - bufferWidth;
  var x = parseInt(ImageHoverTooltips.mouseX(event))+offX;
  if (x > widthCutoff && browserWidth > bufferWidth) {
    tooltip.left = widthCutoff + 'px';
  }
}
};
