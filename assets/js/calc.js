function insert (num) {
  var number=  document.getElementById('result').innerHTML;
  document.getElementById('result').innerHTML = number +num;
}

function clean(params) {
    document.getElementById('result').innerHTML ="";
}
function back (params) {
    
    var value = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = value.substring(0, value.length -1);
}
function calcular () {
    var value =  document.getElementById('result').innerHTML;
  if (value) {
      document.getElementById('result').innerHTML = eval(value);
  }
}