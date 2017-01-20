module.exports = function (req, res, next) {
  var plaintext = req.body.text;
  
  var cipher;
  var chars = plaintext.split("");
  var offset = Math.floor((Math.random()*26));
  console.log(offset);
  for (var i = 0; i < chars.length; i++) {
    //lowercase letter
    if(chars[i].charCodeAt(0)<123&&chars[i].charCodeAt(0)>96){
      // loop around to beginning if letter is to high
      if(chars[i].charCodeAt(0)>122-offset){
        chars[i] = String.fromCharCode(97-((123-offset)-chars[i].charCodeAt(0)));
      }
      //the letter is low enough to not have to loop around
      else{
        chars[i] = String.fromCharCode(chars[i].charCodeAt(0)+offset);
      }
    }
  }
  cipher = chars.join("")+String.fromCharCode(97+offset);
  return res.status(200).json(cipher);
}