function addComma(data) {
  data = data.split(".")[0];
  var after = data.split(".")[1] || 0;
  var result = "";

  while(data.length > 3) {
    var num = data.slice(-3);
    result = result ? num + "," + result : num;
    data = data.slice(0, data.length - 3);
  }
  if(data) {
    result = data + "," + result;
  }
  return result + "." + after;
}

document.getElementById("commaBtn").addEventListener("click", function() {
  var data = document.getElementById("commaData").value;
  var result = addComma(data);
  document.getElementById("commaResult").innerText = result;
}, false);