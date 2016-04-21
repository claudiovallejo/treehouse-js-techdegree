# Project 1 — Random Quote Generator

## Purpose
In this project you'll create a random quote generator to display quotations on the screen after a button on the page is clicked: for example, display a quote from a famous athlete, politician, or historical figure like:

_"The only thing to fear is fear itself." — Franklin Delano Roosevelt"_

You'll be provided with basic HTML and CSS as well as a JavaScript file containing some code to help you get started. But you'll have to find the quotes yourself and build the data structure to store them in.

---

### Pre-reqs
1.  Have a GitHub Account
2.  Download the Project Files
    +  index.html
    +  main.css
    +  quotes.css
    +  script.js

---

### Instructions
1.  Create an array of JavaScript Objects to hold the data for your quotes
2.  Each `Quote()` should have the following properties:
    - A  `quote` property which contains a string: the text of the quote to display on the page
    - A `source` property which contains a string identifying the creator of the quote. For example: "Mark Twain or "Traditional Irish Proverb"
    - An _optional_ `citation` property which contains a string identifying the publication the quote appears in. For example, "Famous Anonymous Jokes." If there is no known publication, then do not include this property on the object.
    - An _optional_ `year` property which contains a number identifying the date of the quote. For example, `1997`. If there is no known date, then do not include this property on the object.
3.  Create a function named `getRandomQuote()` which does the following:
    - Selects a random quote object from the quotes array
    - Returns the randomly selected quote object
4.  Create a function named `printQuote()` which follows these rules:
    - `printQuote()` calls the `getRandomQuote()` function and stores the returned quote object in a variable
    - `printQuote()` constructs a string using the different properties of the quote object using the following HTML            template:

      ```
      <p class="quote"> Quote goes here </p>
      <p class="source">
        Source goes here
        <span class="citation"> Citation goes here </span>
        <span class="year"> Year goes here </span>
       </p>

      ```
    - `printQuote()` doesn't add a `<span class="citation">` for a missing citation or a `<span class="year">` if the year property is missing
      - `printQuote()` displays the final HTML string to the page. You can use the following JS snippet to accomplish that `document.getElementById('quote-box').innterHTML;`
5.  Add code comments to document how your functions work
6.  Use JSHint to analyze your JavaScript and identify any errors or code-style problems
7.  Make sure your program is free of syntax errors. You can monitor any errors by looking at the Developer Tools console in your browser.

---

### Extra Credit
1.  Add more properties to the quote object. For example, a `tags` property could include a list of "tags" like
    - humor
    - business
    - politics
2.  Randomly change the background color of the page, when the quote changes
3.  Don't display a random quote more than once until ALL quotes from the array have been displayed
4.  Refresh the quote after a set amount of time. For example, every 30 seconds, make a new quote appear. (You can use the `setInterval()` or `setTimeout()` methods to do this — see the links in the Project Resources listing.)

---

### How you'll be graded
Exceeds Expectations

#### Valid JavaScript:
_Free of syntax errors_

#### Create Array of Objects
_Array of Objects_
_More than 5 quotes_

#### Quote Object
_Objects in array include additional, relevant properties beyond the ones requires, such as categorization tags_

#### `getRandomQuote()`
_`getRandomQuote()` does not return duplicate quote until all quotes have been returned once_

#### `printQuote()`
_Background color of page changes each time a new quote is displayed_
_Quotes change automatically after certain amount of time passes_

#### Code Comments
_Detailed code comments explaining how your functions work_

---

### Project Calendar
_Thursday April 21, 2016_
1.  Design content structure
2.  Search for 10 Quotes with corresponding details
_Friday April 22, 2016_
3.  Search for 1 Design Reference
4.  Wireframe
_Saturday April 23, 2016_
5.  Prototype
_Sunday April 24, 2016_
6.  Develop
7.  Submit
