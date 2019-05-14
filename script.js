

function detectSpam(input) {
  input = input.toLowerCase();
  if (input.indexOf("fake") < 0 )
  {
    return false;
  }
  return true;
}
//var myString
var mystring = prompt("Enter a string");
alert(detectSpam (myString))
