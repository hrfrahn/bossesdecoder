module.exports = function (req, res, next) {
  var cipher = req.body.text;
  var chars = cipher.split("");
  var offset = chars[chars.length-1].charCodeAt(0)-97;
  console.log(offset);
  for (var i = 0; i < chars.length; i++) {
    //lowercase letter
    if(chars[i].charCodeAt(0)>96&&chars[i].charCodeAt(0)<123){
      //letter has to loop around
      if(chars[i].charCodeAt(0)-offset<97){
        chars[i] = String.fromCharCode(chars[i].charCodeAt(0)+(26-offset));
      }
      //no looping around
      else{
        chars[i] = String.fromCharCode(chars[i].charCodeAt(0)-offset);
      }
    }
  }
  //remove offset indicator
  chars.splice(chars.length-1, 1);
  var plaintext = chars.join("");
  return res.status(200).json(plaintext);
}