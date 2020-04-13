function welcome() {
   var arr = document.getElementsByTagName("input");
   for(var element in arr) {
      element.innerHTML = getRandomInt(99);
   }
}