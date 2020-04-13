var started = false;

function welcome() {
   sayIt(document.getElementById("desc").innerText);
   var arr = document.getElementsByName("cell");
   for(var i = 0; i < arr.length; i++) {
      arr[i].value = getRandomInt(99);
   }
}

function clear() {
   var arr = document.getElementsByName("cell");
   for(var i = 0; i < arr.length; i++) {
      arr[i].setAttribute("class", "unhighlighed");
   }
}

function step() {
   var arr = document.getElementsByName("cell");
   if(!started) {
      started = true;
      arr[arr.length - 1].setAttribute("class", "pivot");
   } else {
      clear();
   }
}

function lomuto(arr, lo, hi) {
   /*
   partition(arr[], lo, hi) 
    pivot = arr[hi]
    i = lo     // place for swapping
    for j := lo to hi – 1 do
        if arr[j] <= pivot then
            swap arr[i] with arr[j]
            i = i + 1
    swap arr[i] with arr[hi]
    return i*/
}