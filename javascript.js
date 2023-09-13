const thms = ["josefin", "comic"];

function removeTheme(){
	var b = document.getElementById("body");
	for (let i = 0; i < thms.length; i++){
		b.classList.remove(thms[i]);
	}
}

setTheme()

function setTheme(){
	var b = document.getElementById("body");
	if (thms.indexOf(localStorage.theme) == -1){
		localStorage.theme = thm[0];
	}
	removeTheme();
	b.classList.add(localStorage.theme);
}

function switchTheme(themename){
	var b = document.getElementById("body");
	removeTheme();
	b.classList.add(themename);
	localStorage.theme = themename;
}

function toggleTheme(){
	var currenttheme = thms.indexOf(localStorage.theme);
	if (currenttheme == -1){
		switchTheme(thms[1]);
	}
	else if (currenttheme == thms.length - 1){
		switchTheme(thms[0]);
	}
	else{
		switchTheme(thms[currenttheme + 1]);
	}
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}