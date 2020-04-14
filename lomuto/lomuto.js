var started = false;
var arr;
var pivot;
var pivotVal;
var lo, hi;
var tmp;
var j;
var checked = false;
var state = 0; // 0 waiting for continue, 1 pivot testing waiting for swap or don't swap
var PSID = "myPseudocodeTable";

function welcome() {
   sayIt(document.getElementById("desc").innerText);
   arr = document.getElementsByName("cell");
   for(var i = 0; i < arr.length; i++) {
      arr[i].value = getRandomInt(99);
   }
   createPseudocodeTable(PSID);
}

function clear() {
   for(var i = 0; i < arr.length; i++) {
      arr[i].setAttribute("class", "unhighlighed");
   }
}

function step(swapVar){
   if(!started) {
	  if(swapVar!==3) return;
      started = true;
      for(var i = 0; i < arr.length; i++) {
         arr[i].disabled = true;
      }
      lo = 0;
      hi = arr.length - 1;
      pivot = arr[hi];
      pivotVal = Number(pivot.value);
      pivot.setAttribute("class", "pivot");
      appendPseudocode(PSID, "Select the last element, "+ pivot.value +" as the pivot.");
      tmp = lo;
      j = lo;
	  state=0;
   } else {
	   
	  if( state===1){
		if( swapVar === 0 && checked){
			appendPseudocode(PSID, "You should swap because " + arr[j].value + "<=" + pivotVal );
			return;
		}else if(swapVar === 1 && !checked){
			appendPseudocode(PSID, "You should NOT swap because " + arr[j-1].value + ">" + pivotVal);
			return;
		}else if(swapVar === 3) return;
	  }else if(state === 0 && swapVar !== 3) return;
	  
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
   appendPseudocode(PSID, "Swap " + a.value + " and " + b.value);
   state=0;
}

function lomuto() {
   if(checked) {
      checked = false;
      swap(arr[tmp], arr[j]);
      tmp++;
      j++;
   } else {
	  arr[tmp].setAttribute("class", "highlighted");
      if(j < hi) {
         appendPseudocode(PSID, "Test "+ arr[j].value +" against the pivot (Swap or don't swap)");
		 state=1;
         arr[j].setAttribute("class", "testing");
         if(Number(arr[j].value) <= pivotVal) {
            checked = true;
         } else {
            j++;
         }
      } else if(j === hi) {
		 appendPseudocode(PSID,"One final swap to put the pivot in the correct place");
         swap(arr[tmp], arr[hi]);
         j++;
      }else {
         appendPseudocode(PSID,"Finished!");
         for(var i = 0; i < arr.length; i++) {
            arr[i].setAttribute("class", "finished");
         }
         arr[tmp].setAttribute("class", "pivot");
      }
   }
}