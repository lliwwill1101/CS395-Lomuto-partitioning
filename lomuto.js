var started = false;
var arr;
var pivot;
var pivotVal;
var lo, hi;
var tmp;
var j;
var checked = false;

function welcome() {
   sayIt(document.getElementById("desc").innerText);
   arr = document.getElementsByName("cell");
   for(var i = 0; i < arr.length; i++) {
      arr[i].value = getRandomInt(99);
   }
}

function clear() {
   for(var i = 0; i < arr.length; i++) {
      arr[i].setAttribute("class", "unhighlighed");
   }
}

function step() {
   if(!started) {
      started = true;
      for(var i = 0; i < arr.length; i++) {
         arr[i].disabled = true;
      }
      lo = 0;
      hi = arr.length - 1;
      pivot = arr[hi];
      pivotVal = pivot.value;
      pivot.setAttribute("class", "pivot");
      document.getElementById("instructions").innerText = "Choose pivot";
      tmp = lo;
      j = lo;
   } else {
      clear();
      lomuto();
   }
}

function swap(a, b) {
   a.setAttribute("class", "highlighted");
   b.setAttribute("class", "highlighted");
   var val = a.value;
   a.value = b.value;
   b.value = val;
   document.getElementById("instructions").innerText = "Swap " + a.value + " and " + b.value;
}

function lomuto() {
   if(checked) {
      checked = false;
      swap(arr[tmp], arr[j]);
      tmp++;
      j++;
   } else {
      if(j < hi) {
         document.getElementById("instructions").innerText = "Testing against pivot";
         arr[j].setAttribute("class", "testing");
         if(arr[j].value <= pivotVal) {
            checked = true;
         } else {
            j++;
         }
      } else if(j === hi) {
         swap(arr[tmp], arr[hi]);
         j++;
      }else {
         document.getElementById("instructions").innerText = "Finished!";
         for(var i = 0; i < arr.length; i++) {
            arr[i].setAttribute("class", "finished");
         }
      }
   }
}