var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
// var acc = document.getElementsByClassName("accordion");
// var i;
//
// var acc = document.getElementsByClassName("accordion");
// var panel = document.getElementsByClassName('panel');
//
// for (var i = 0; i < acc.length; i++) {
//     acc[i].onclick = function() {
//         var setClasses = !this.classList.contains('active');
//         setClass(acc, 'active', 'remove');
//         setClass(panel, 'show', 'remove');
//
//         if (setClasses) {
//             this.classList.toggle("active");
//             this.nextElementSibling.classList.toggle("show");
//         }
//     }
// }
//
// function setClass(els, className, fnName) {
//     for (var i = 0; i < els.length; i++) {
//         els[i].classList[fnName](className);
//     }
// }
