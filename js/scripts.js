function checkSentence(sentence) {
  var wordArray = sentence.split(" "); //takes user input and splits into individual words
  // console.log(wordArray);
  var latinSentence = ""; //creates a variable for the for loop
  for (var i = 0; i < wordArray.length; i++) {
    latinSentence = checkWord(wordArray[i])
    latinSentence += " "; //adds space between each word
    // console.log(latinSentence);
  }

  return latinSentence
}

function checkWord(word) {
//pig laten word stuff

if ((word.length === 1) && (word[0].includes("a")) ||(word.length === 1) && (word[0].includes("e")) || (word.length === 1) && (word[0].includes("i")) || (word.length === 1) && (word[0].includes("o")) || (word.length === 1) && (word[0].includes("u"))) {
  console.log(word + "ay");
} else if ((word[0].includes("a")) || (word[0].includes("e")) || (word[0].includes("i")) || (word[0].includes("o")) || (word[0].includes("u"))) {
console.log(word + "way");
  // else if {
  // console.log("false"); //everything that is not a vowel.
  // }

  }
  return word
}




// jQuery user interface logic here.
$(document).ready(function() {
  $("form#pigLatin").submit(function(event) {
    event.preventDefault();
    // var input = $("input#words").val();
    // console.log(input);
    // var result = translate(sentence);
    //var sentence = [];
    //var firstThree = [];



    var latin = checkSentence($("input#words").val());
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
