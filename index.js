function toggleAside() {
    var aside = document.getElementById("myAside");
    if (aside.style.left === "-250px") {
      aside.style.left = "0";
    } else {
      aside.style.left = "-250px";
    }
}