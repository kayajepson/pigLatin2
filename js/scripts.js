var consonant = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
var vowels = ["a", "e", "i", "o", "u"];
var exceptions = ["qu"];

var translate = function(words) {
  if ((sentence === ) {
    return true;
  } else {
    return sentence.val();
    }
};

// jQuery user interface logic here.
$(document).ready(function() {
  alert("beginning");
  $("form#pigLatin").submit(function(event) {
    event.preventDefault();
    var sentence = $("input#words").val();
    var output = translate(words);

    $(".words").text(words);

    $("#output").show();
    alert("end");
  });
});
