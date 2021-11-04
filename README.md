# _{Text Analyzer}_

#### Independent Project - Week 3 - JavaScript Arrays & Looping

 By *{Ethan Bear}*

## Technologies Used

* _HTML_
* _CSS_
* _Markdown_
* _Bootstrap_
* _JavaScript_
* _jQuery_

#

## Description

_{A website designed to showcase competencies in Javascript Arrays and Looping.}_

#

## https://ethanhwbear.github.io/text-analyzer/

#

## Application Setup instructions

* _Make sure you have the latest versions of the related software installed on your machine._
* _Clone this repository to your desktop by executing $ git clone https://github.com/ in the command line._
* _Select the "index.html" file within the project directory to open the web page in your browser._

#

## Known Bugs

* _No known bugs at the time of publishing._

#

## License

[MIT](https://en.wikipedia.org/wiki/MIT_License)

Copyright (c) 2021 Ethan Bear

## Contact Information

Ethan Bear <a href="mailto:ehwbear@icloud.com">ehwbear@icloud.com</a>

// TESTS //

Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

Test: "It should not count numbers as words."
Code: wordCounter("hi there 77 19");
Expected Output: 2

Describe: numberOfOccurrencesInText()

Test: "It should return 0 occurrences of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 1

Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 4

Test: "It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "If an empty string is passed in as a word, it should return 0."
Code:
const word = "";
const text = "red RED Red!";
wordCounter(word, text);
Expected Output: 0
