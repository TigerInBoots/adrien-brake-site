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