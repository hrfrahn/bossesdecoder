function encode(){var e=new XMLHttpRequest,t=document.getElementById("Etext").value,n={text:t};return console.log(JSON.stringify(n)),e.open("POST","https://bossesdecoder.herokuapp.com/encode"),e.setRequestHeader("Content-Type","application/json"),e.send(JSON.stringify(n)),e.onreadystatechange=function(){4===this.readyState&&(200===this.status?(document.getElementById("encodedText").innerHTML="Encoded Text: "+this.responseText.replace(/^"(.+(?="$))"$/,"$1"),document.getElementById("decodedText").innerHTML=""):alert("Error"))},!1}function decode(){var e=new XMLHttpRequest,t=document.getElementById("Dtext").value,n={text:t};return console.log(JSON.stringify(n)),e.open("POST","https://bossesdecoder.herokuapp.com/decode"),e.setRequestHeader("Content-Type","application/json"),e.send(JSON.stringify(n)),e.onreadystatechange=function(){4===this.readyState&&(200===this.status?(document.getElementById("decodedText").innerHTML="Decoded Text: "+this.responseText.replace(/^"(.+(?="$))"$/,"$1"),document.getElementById("encodedText").innerHTML=""):alert("Error"))},!1}