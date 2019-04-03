// var consonant = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
var vowels = ["a", "e", "i", "o", "u"];
var exceptions = ["qu"];
var translate = function(sentence) {
  // if (sentence.includes("h")) {
  //   console.log("true");
  // // } else {
  // //   return sentence.val();
  //   }
};






// jQuery user interface logic here.
$(document).ready(function() {
  $("form#pigLatin").submit(function(event) {
    event.preventDefault();
    // var input = $("input#words").val();
    // console.log(input);
    // var result = translate(sentence);
    var sentence = [];
    $("input#words").each(function(){
    var wordArray = $(this).val().split(" ");
    var char = $(this).val().split("",3);
    // wordArray = (val);
    sentence.push(wordArray);
    console.log(wordArray);
    console.log(char);

  });

  for (var index = 0; index < sentence.length; index ++) {
    for(var i = 0; i < 3; i++){
      var holdWord = sentence[index];
      holdWord = holdWord.slice();
      var arr = sentence.split("");
      console.log(arr);
    };
    var letterArray = $(this).val().split("",3);
    console.log(letterArray);
  }

    $(".words").text(sentence);



    // if (!result) {                 // same as writing if (result === false)
    //   $(".not").text("not");
    // } else {
    //   $(".not").text("");
    // }

    // $("#output").show();
  });
});
