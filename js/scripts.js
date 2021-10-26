// Utility Logic

function noInputtedWord(word, text) {
  return ((text.trim().length === 0) || (word.trim().length === 0));
}

// Business Logic

// make a string from the array of words, or take the original string of text
// --start the function--
// make an array with nothing in it
// --make a string in array? function--
// --for each loop checks each word in the text to see if it is in the dictionary array.
// if true, then ignore, else dictionary.push(the word in question
// do a string.prototype.split() on whichever word we need a count of.
// TargetArray is word in index 0, and instances in index 1
// <for each loop of dictionary> if the next word in the dictionary has more occurances, then it resets TargetArray[0] to the new word, and TargetArray[1] to that word's count.
// after the most common word is found. remove it from the dictionary and repeat for second and third place.
function stringInArray (string, inputArray) {
  inputArray.forEach(function(element) {
    if (element === string) {
      return true;
    }
  });
  return false;
}

function mostCommonWord() {

}

function mostUsedWords(text, word, numberOfRuns) {
  if (noInputtedWord(word, text)===true) {
    //return something in the case that there is no text... or if the number of runs is greater than the number of words.
  }
  let dictionary = [];
  let textArray = text.split(" ");
  let commonWords = [numberOfRuns-1];
  // we now have an array of individual words.


  // check back later to see if this gets its own function
  textArray.forEach(function(element) {
    if (!(stringInArray(element, dictionary))){
      dictionary.push(element);
    }
  });
  // all of the individual words have been added to the dictionary.
  //add the target Array
  commonWords.forEach(function(commonWord, index) {
    let targetArray = ["",0,0];
    dictionary.forEach(function(element, dictionaryCounter) {
        if (numberOfOccurrencesInText(element, text)>targetArray[1]) {
          targetArray[0] = element;
          targetArray[1] = numberOfOccurrencesInText(element, text);
          targetArray[2] = dictionaryCounter;
        }
        commonWords[index] = targetArray[0] + ": " + targetArray[1];
        
      });
  });
  //target array is currently equal to the word with the most occurances

}

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element) && !(element.trim().length === 0)) {
    wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

// UI Logic

$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
  });
});

function boldPassage(word, text) {
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (word === element) {
      htmlString = htmlString.concat("<b>" + element + "</b>");
    } else {
      htmlString = htmlString.concat(element);
    }
    if (index !== (textArray.length - 1)) {
      htmlString = htmlString.concat(" ");
    }
  });
  return htmlString + "</p>";
}