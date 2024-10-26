var toggleSections = document.getElementsByClassName("toggleSection");
var i;

for (i = 0; i < toggleSections.length; i++) {
  toggleSections[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


