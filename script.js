var toggleSections = document.getElementsByClassName("toggleSection");
var i;

for (i = 0; i < toggleSections.length; i++) {
  toggleSections[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var info = this.nextElementSibling;
    if (info.style.maxHeight) {
      info.style.maxHeight = null;
    } else {
      info.style.maxHeight = info.scrollHeight + "px";
    } 
  });
}