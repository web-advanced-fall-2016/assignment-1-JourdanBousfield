var modal = document.getElementById('myModal');

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

var btn2 = document.getElementById('closeBtn');

btn.onclick = function() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";

}

span.onclick = function() {
    modal.style.display = "none";
     document.body.style.overflow = "";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
    }
}


btn2.onclick = function(){
	window.location.href = "page(2).html";
	modal.style.display = "none";
	document.body.style.overflow = "";
}


window.onkeydown = function(event) {
    if ( event.keyCode == 27 ) {
        modal.style.display = "none";
        document.body.style.overflow = "";
    }
}


