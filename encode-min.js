function encode(){
      var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
      xmlhttp.setRequestHeader('Access-Control-Allow-Headers', '*');
      xmlhttp.withCredentials = false;
      var sus = document.getElementById('Etext').value;
      var test = {"text":sus};
      console.log(JSON.stringify(test))
      xmlhttp.open("POST", "https://bossesdecoder.herokuapp.com/encode");
      xmlhttp.setRequestHeader("Content-Type", "application/json");
      xmlhttp.send(JSON.stringify(test));
      xmlhttp.onreadystatechange= function() {
          if (this.readyState!==4) return; // not ready yet
          if (this.status===200) { // HTTP 200 OK
              document.getElementById('encodedText').innerHTML = "Encoded Text: "+this.responseText.replace(/^"(.+(?="$))"$/, '$1');
            document.getElementById('decodedText').innerHTML = "";
          } else {
             alert("Error")
          }
      };
      return false;
}
		function decode(){
			var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
      xmlhttp.setRequestHeader('Access-Control-Allow-Headers', '*');
      xmlhttp.withCredentials = false;
      var sus = document.getElementById('Dtext').value;
      var test = {"text":sus};
      console.log(JSON.stringify(test))
      xmlhttp.open("POST", "https://bossesdecoder.herokuapp.com/decode");
      xmlhttp.setRequestHeader("Content-Type", "application/json");
      xmlhttp.send(JSON.stringify(test));
      xmlhttp.onreadystatechange= function() {
          if (this.readyState!==4) return; // not ready yet
          if (this.status===200) { // HTTP 200 OK
              document.getElementById('decodedText').innerHTML = "Decoded Text: "+this.responseText.replace(/^"(.+(?="$))"$/, '$1');
            document.getElementById('encodedText').innerHTML = "";
          } else {
             alert("Error")
          }
      };
      return false;
		}