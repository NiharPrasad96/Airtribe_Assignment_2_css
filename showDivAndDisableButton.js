function showDivAndDisableButton(myDiv, btn) {
    var x = document.getElementById(myDiv);
    x.style.display = "block";
    document.getElementById(btn).disabled = true;

}