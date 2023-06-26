window.addEventListener("DOMContentLoaded", function() {
  var contentClass = document.getElementsByClassName("collapsible");

  for (var i = 0; i < contentClass.length; i++) {
    contentClass[i].addEventListener("click", function() {
      var img = this.querySelector("img");
      var elem = this.nextElementSibling;

      if (window.getComputedStyle(elem).display === "none") {
        elem.classList.remove("content-question");
        elem.classList.add("content-question-animation")
        //elem.classList.toggle("content-question-animation");
        img.src = "./svgs/arrow_up.svg";
      } else {
        elem.classList.remove("content-question-animation");
        void elem.offsetWidth;
        elem.classList.add("content-question");
        img.src = "./svgs/arrow_down.svg";
      }
    });
  }
});