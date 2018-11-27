var xhr = new XMLHttpRequest();

xhr.open("get", "https://XXXX", true);
xhr.send(null);

xhr.onreadystatechange = function() {
  if(xhr.readyState === 4) {
    if(xhr.status === 200 || xhr.status === 304) {
      console.log("responseText", xhr.responseText);
      console.log("response", xhr.response);
      console.log("responseType", xhr.responseType);
      console.log("responseURL", xhr.responseURL);
      console.log("responseXML", xhr.responseXML);
    } else {
      alert("error:", xhr.status);
    }
  }
}