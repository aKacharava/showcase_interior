// Script to open and close sidebar
function int_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
 
function int_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";

  var captionText = document.getElementById("caption");

  captionText.innerHTML = element.alt;
}

// Animate smooth scroll
$('#home').on('click', function(){
    const showcase = $('#').position().top;

    $('html, body').animate(
        {
            scrollTop: showcase
        },
        500
    );
});