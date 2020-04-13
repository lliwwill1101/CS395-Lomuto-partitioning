function welcome() {
   var arr = document.getElementsByTagName("input");
   for(var i = 0; i < arr.length; i++) {
      arr[i].value = getRandomInt(99);
   }
}