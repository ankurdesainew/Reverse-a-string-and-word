/*************************************/
(function() {
  //-----Reverse a Word in the String or Only Reverse a String----//

  window.onload = function() {
    document.getElementById("submit").onclick = function() {
      var str = document.getElementById("input").value;
      //console.log(str);
      //var str=["i am a boy","biy"];
      function a(str) {
        var o = [];
        str = str.split(" ");
        console.log(str);
        for (var i = str.length - 1; i >= 0; i--) {
          //o += str[i];
          o += str[i] + " ";
        }
        return o.trim();
      }
      document.getElementById("display").innerHTML= a(str.toString());
      document.getElementById("input").value= " ";
    }
  }
})();
