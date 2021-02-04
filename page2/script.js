function onLoad() {
    setTimeout(showPage, 1500);
}
  
function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main").style.display = "block";
}