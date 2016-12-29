// Mouse Follows Mouse
//
// Google and find a picture of a mouse. Create a
// webpage using, HTML and javascript/jQuery, where
// the position of the mouse-picture matches the
// poisition of the mouse pointer.
// Bonus
//
// Two possible extensions for you.
// Rather than snap into place, have mouse-picture
// move over time towards the location of the the
// mouse-pointer.
// Rotate the mouse-picture so it faces the mouse
//  pointer it is moving towards.
// $(document).on('mousemove', function(e){
//     $('.mousepicture').css({
//        left:  e.pageX,
//        top:   e.pageY
//     });
// });

var mouseX = 0, mouseY = 0;
var xp = 0, yp =0;

$(document).mousemove(function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;

})
var loop = setInterval(function(){
// change 12 to alter damping higher is slower
xp += ((mouseX - xp)/10);
yp += ((mouseY - yp)/10);
$('.mousepicture').css({left:xp, top:yp});
}, 50);
// var mouseX;
//             var mouseY;
//             var imageOne;
//             var imageTwo;
//             var imageThree;
//             var imageFour;
//             var imageFive;
//
//             /* Calling the initialization function */
//             $(init);
//
//             /* The images need to re-initialize on load and on resize, or else the areas
//              * where each image is displayed will be wrong. */
//             $(document).load(init);
//             $(document).resize(init);
//
//             /* Setting the mousemove event caller */
//             $(document).mousemove(getMousePosition);
//
//             /* This function is called on document ready, on load and on resize
//              * and initiallizes all the images */
//             function init(){
//
//                 /* Instanciate the mouse position variables */
//                 mouseX = 0;
//                 mouseY = 0;
//
//                 /* Instanciate a HeadImage class for every image */
//                 imageOne = new HeadImage("one");
//                 imageTwo = new HeadImage("two");
//                 imageThree = new HeadImage("three");
//                 imageFour = new HeadImage("four");
//                 imageFive = new HeadImage("five");
//             }
//
//             /* This function is called on mouse move and gets the mouse position.
//              * It also calls the HeadImage function to display the correct image*/
//             function getMousePosition(event){
//
//                 /* Setting the mouse position variables */
//                 mouseX = event.pageX;
//                 mouseY = event.pageY;
//
//                 /*Calling the setImageDirection function of the HeadImage class
//                  * to display the correct image*/
//                 imageOne.setImageDirection();
//                 imageTwo.setImageDirection();
//                 imageThree.setImageDirection();
//                 imageFour.setImageDirection();
//                 imageFive.setImageDirection();
//             }
//
//
//             function HeadImage(className){
//
//                 /* Setting the global instance of classname to the given parameter*/
//                 this.className = className;
//
//                 /* Calculating the borders of the image */
//                 this.imageLeft = $("."+this.className+">.mouse").offset().left;
//                 this.imageRight = this.imageLeft + $("."+this.className+">.mouse").width();
//                 this.imageTop = $("."+this.className+">.mouse").offset().top;
//                 this.imageBottom = this.imageTop + $("."+this.className+">.mouse").height();
//
//                 /* This function determines where the mouse pointer is relative to the image
//                  * and displays the correct image accordingly. */
//         this.setImageDirection = function(){
//         $("."+this.className+">.mouse").css("z-index","0");
//         if(mouseX >= this.imageLeft && mouseX <= this.imageRight && mouseY <= this.imageTop){
//             $("."+this.className+">.up").css("z-index","1");
//         } else if(mouseX < this.imageLeft && mouseY < this.imageTop){
//             $("."+this.className+">.up-left").css("z-index","1");
//         } else if(mouseX <= this.imageLeft && mouseY >= this.imageTop && mouseY <= this.imageBottom){
//             $("."+this.className+">.left").css("z-index","1");
//         } else if(mouseX < this.imageLeft && mouseY > this.imageBottom){
//             $("."+this.className+">.down-left").css("z-index","1");
//         } else if(mouseX >= this.imageLeft && mouseX <= this.imageRight && mouseY >= this.imageBottom){
//             $("."+this.className+">.down").css("z-index","1");
//         } else if(mouseX > this.imageRight && mouseY > this.imageBottom){
//             $("."+this.className+">.down-right").css("z-index","1");
//         } else if(mouseX >= this.imageRight && mouseY >= this.imageTop && mouseY <= this.imageBottom){
//             $("."+this.className+">.right").css("z-index","1");
//         } else if(mouseX > this.imageRight && mouseY < this.imageTop){
//             $("."+this.className+">.up-right").css("z-index","1");
//         } else{
//             $("."+this.className+">.front").css("z-index","1");
//             $(".text-holder").css("display","none");
//             $("."+this.className+".text-holder").css("display","block");
//         }
//       }
//     }
