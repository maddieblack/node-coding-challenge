# Reputation Social Coding Challenge

Thanks for your interest in working for Reputation on the Social software engineering team. We’re happy to present you with this coding challenge as part of the interview process. Take your time and use whatever resources you need to create your own solution to the problem highlighted below. Zip your code back up and email it back when you’re finished.  

## Word Search Instructions

You’re going to write a function that can find words in a word search. Here’s how to get it done:

1. Make sure you have Node.js installed on your machine. Visit https://nodejs.org/en/download/ to get started if you’re unfamiliar with Node.js

2. Clone this repo to your local machine and take a look at the .js files included.

3. Write the missing code in the `search.js` file.
a. The `search.js` file contains one function that you need to write. The function accepts two arguments: 1) a 2d array of letters which represent a word search grid, and 2) an array of words to find within the grid.
b. You need to write a function that will scan the grid for any of the words in the word list array.
c. Your matching should be case insensitive.
d. You need to search in all eight directions (four orthogonal directions plus four diagonal)
e. You should return an array of all the words that can be found in the search
f. Two example grid files have been provided in the `samples/` folder. Two example word lists have also been provided.

4. To run your code, navigate to the wordSearch folder on the command line and and type `node index.js sample/grid.txt sample/words.txt`
a. To run your code against another sample grid and/or wordlist, just change the filenames in the above command

5. When you’re finished writing your code, zip the folder and email it back. We look forward to hearing from you and reviewing your work!

### Notes
* Don’t worry about doing any sanitization or writing any tests. We just want to see how you go about solving a problem like this.
* If you find yourself editing any files other than `search.js` you’re probably doing it wrong!
* Don’t worry if the problem is too easy or too hard–everyone is on a different level and we just want to see where you’re at.