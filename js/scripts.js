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

function checkWord(word) {
//pig laten word stuff
  word += "Poop"
  return word
}

function checkPhrase(phrase) {
  var splitWords = phrase.split(" ");
  var latinPhrase = "";
  for (var i = 0; i < splitWords.length; i++) {
    latinPhrase += checkWord(splitWords[i])
    latinPhrase += " ";
  }

  return latinPhrase
}




// jQuery user interface logic here.
$(document).ready(function() {
  $("form#pigLatin").submit(function(event) {
    event.preventDefault();
    // var input = $("input#words").val();
    // console.log(input);
    // var result = translate(sentence);
    var sentence = [];
    var firstThree = [];



    var latin = checkPhrase($("input#words").val());
    console.log(latin);
    $(".words").text(latin);
    $("#output").show();
    // $("input#words").each(function(){

  //   var wordArray = $(this).val().split(" ");
  //
  //   // wordArray = (val);
  //   sentence.push(wordArray);
  //   console.log(sentence);
  //   var char = sentence.slice(0,2);
  //   firstThree.push(char);
  //   console.log(firstThree);
  //   // console.log(wordArray);
  //   // console.log(char);
  //
  // });
  //
  // for (var index = 0; index < char.length; index ++) {
  //   for(var i = 0; i < 3; i++){
  //     var char = sentence.slice(0,2);
  //     firstThree.push(char);
  //     console.log(firstThree);
  //   };
  //   // var letterArray = $(this).val().split("",3);
  //   // console.log(letterArray);
  // }
  //
  //   $(".words").text(sentence);



    // if (!result) {                 // same as writing if (result === false)
    //   $(".not").text("not");
    // } else {
    //   $(".not").text("");
    // }

    // $("#output").show();
  });
});
