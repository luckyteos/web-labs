/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
    var allThumbNails = document.getElementsByClassName("thumb-img");
    var x;
    for(x of allThumbNails) {
        x.addEventListener("click", function(){
            popUpImage(this);
        });
    }
   document.addEventListener("click", function(e) {

        // Checking if the target selected in the click event is the thumbnail
        // If its false, which means the user is not clicking on the thumbnail, then hide the image
        if (e.target.classList.contains("thumb-img") === false && e.target.classList.contains("big-img") === false) {
            destroyImage();
        }
   });
});

function popUpImage(e) {
    var popUpFrame = document.createElement("span");
    popUpFrame.setAttribute("class", "thumb-big-img");
    var bigImg = document.createElement("img");
    bigImg.setAttribute("class", "big-img img-fluid");
    var smallImg = e.getAttribute("src");
    var imgName = smallImg.split("_");
    var imgPath = imgName[0];
    var largePath = "_large.jpg";
    var largeImgPath = imgPath.concat(largePath);
    bigImg.src = largeImgPath;
    popUpFrame.setAttribute("position", "relative");
    popUpFrame.appendChild(bigImg);
    var parentImg = e.parentNode;
    parentImg.insertBefore(popUpFrame, parentImg.children[0]);
}

function destroyImage() {
    var img = document.getElementsByClassName("thumb-big-img");
    
    for (x of img) {
        x.parentNode.removeChild(x);
    }
    
        
}



