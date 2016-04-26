/*  Quote Object - - - - - - - - - */
function Quote(source, tags, quote, imagePath, imageSource, imageUrl, citation, date) {
  //  The source parameter contains the Author's Name
  this.source = source;
  //  The tags parameter contains the Author's Specialties (for example 'Theoretical Physicist')
  this.tags = tags;
  this.quote = quote;
  this.imagePath = imagePath;
  this.imageSource = imageSource;
  this.imageUrl = imageUrl;
  this.citation = citation;
  this.date = date;

}

/*  Quote Instances - - - - - - - - - */
//  Friedrich Nietzche
var quote1 = new Quote(
  "Friedrich Nietzche",
  "Philosopher, Critic, Poet",
  "\"And those who were dancing were thought to be insane by those who couldn't hear the music.\"",
  "images/friedrich@2x.jpg",
  "Art Creation Forever",
  "http://artcreationforever.com/images/friedrich-nietzsche/friedrich-nietzsche-06.jpg",
  "",
  ""

);

//  Mark Twain
var quote2 = new Quote(
  "Mark Twain",
  "Author, Humorist",
  "\"The two most important days in your life are the day you were born and the day you find out why.\"",
  "images/mark@2x.jpg",
  "Time Inc.",
  "http://img2.timeinc.net/people/i/2015/news/150518/mark-twain-768.jpg",
  "",
  ""

);

//  Carl Jung
var quote3 = new Quote(
  "Carl Jung",
  "Psychiatrist, Psychotherapist",
  "\"Everything that irritates us about others can lead us to an understanding of ourselves.\"",
  "images/carl@2x.jpg",
  "Biography.com",
  " http://a2.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTE5NTU2MzE2MjY4NjkzMDAz.jpg",
  "",
  ""

);

//  Fyodor Dostoyevsky
var quote4 = new Quote(
  "Fyodor Dostoyevsky",
  "Author, Philosopher",
  "\"The greatest happiness is to know the source of unhappiness.\"",
  "images/fyodor@2x.jpg",
  "Populere Debiyat",
  "http://www.populeredebiyat.com/wp-content/uploads/2012/01/dostoyevsky.jpg",
  "",
  ""

);

//  Albert Einstein
var quote5 = new Quote(
  "Albert Einstein",
  "Theoretical Physicist",
  "\"A person who never made a mistake never tried anything new.\"",
  "images/albert@2x.jpg",
  "Philosophical Library",
  "http://www.philosophicallibrary.com/wp-content/uploads/2016/03/Albert-Einstein-HD.jpg",
  "",
  ""

);
//  Salvador Dalí
var quote6 = new Quote(
  "Salvador Dalí",
  "Painter",
  "\"Intelligence without ambition is a bird without winds.\"",
  "images/salvador@2x.jpg",
  "Ecestaticos.com",
  "http://www.ecestaticos.com/image/clipping/939/967b7be01cf74878acd2e25afd61d715/el-pintor-salvador-dali-en-1942-gtres.jpg",
  "",
  ""

);

//  Mahatma Gandhi
var quote7 = new Quote(
  "Mahatma Gandhi",
  "Lawyer, Thinker, Politician",
  "\"Strength does not come from physical capacity. It comes from an indomitable will.\"",
  "images/mahatma@2x.jpg",
  "Keep It Worthy",
  "http://keepitworthy.com/wp-content/uploads/2015/11/url.jpg",
  "",
  ""

);

//  Martin Luther King Jr.
var quote8 = new Quote(
  "Martin Luther King Jr.",
  "Minister, Activist, Humanitarian, Leader",
  "\"The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.\"",
  "images/martin@2x.jpg",
  "National Service",
  "http://www.nationalservice.gov/sites/default/files/upload/mlklarge4.jpg",
  "",
  ""

);

//  Nikola Tesla
var quote9 = new Quote(
  "Nikola Tesla",
  "Inventor, Engineer, Physicist, Futurist",
  "\"If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.\"",
  "images/nikola@2x.jpg",
  "Widimedia.org",
  "https://upload.wikimedia.org/wikipedia/commons/7/79/Tesla_circa_1890.jpeg",
  "",
  ""

);

//  Ernest Hemingway
var quote10 = new Quote(

  "Ernest Hemingway",
  "Novelist, Journalist",
  "\"Every man's life ends the same way, it is only the details of how he lived and how he died that distinguish one man from another.\"",
  "images/ernest@2x.jpg",
  "The Pursuit of Sassiness",
  "http://www.thepursuitofsassiness.com/wp-content/uploads/2012/12/hway8.jpg",
  "",
  ""

);

/*  Quote Object Array - - - - - - - - - */
var quotes = [quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9, quote10];
//  Array that contains the quotes that have been randomly selected by the getRandomQuote()
var quotesClone = [];

/*  Random Quote Global Variables */
var numberOfQuotes = quotes.length;
var randomIndex = (Math.floor(Math.random() * numberOfQuotes));
var testProfiles = [];

/*  Test Function - - - - - - - - - - */
/*  This function runs everytime getRandomQuote() fetches a quote from the quotes array.
    This function stores the selected random quote into an array and, after all the quotes
    have been selected, prints out the author(aka source) names of the selected quotes.
    I did this to ensure quotes were not being repeated.
*/
function test(profile) {
  testProfiles.push(profile);

  //  Prints a list (in order of selection) of the Author Names of the Quote Profiles
  if (testProfiles.length === 10) {
    var printList = "You have viewed the following profiles: ";
    console.log("Test Array has " + testProfiles.length + " profiles.");

    //  Adds each Profile to the String
    for (var index = 0; index < testProfiles.length; index++) {
      printList += (index + 1) + ". " + testProfiles[index].source + "; ";

    }

    //  After adding each Profile selected to the printList String, log the String to the console and clear the testProfile array.
    console.log(printList);
    testProfiles = [];

  //  This code logs a String detailing how many Quote Objects the testProfiles array has, just to know how many quotes we've yet to view.
  //  This block of code contains an interior if/else statement which simply makes sure the tense of the word 'profile' is correct.
  //  For example, "Test Array has 1 profile." vs. "Test Array has 7 profiles."
  } else {
    if (testProfiles.length === 1) {
      console.log("Test Array has " + testProfiles.length + " profile.");

    } else {
      console.log("Test Array has " + testProfiles.length + " profiles.");

    }

  }

}

/*  Random Quote Function - - - - - - - - - - */
/*  The Function responsible for selecting a random Quote from the quotes array AND pushing the selected quote to the quotesClone Array.

 */
function getRandomQuote() {

  if (numberOfQuotes > 0) {
    randomIndex = (Math.floor(Math.random() * numberOfQuotes));
    var randomQuote = quotes[randomIndex];
    quotesClone.push(randomQuote);
    test(quotes[randomIndex]);
    return quotes[randomIndex];

  //  If the Quotes Array is empty, we can't index it with the randomIndex variable.
  //  Therefore, we copy the contents of the Clone Quotes Array into the Quotes Array, clear out the Clone Quotes Array
  //  AND THEN index the Quotes Array.
  } else {
    quotes = quotesClone;
    quotesClone = [];
    randomIndex = (Math.floor(Math.random() * numberOfQuotes));
    test(quotes[randomIndex]);
    return quotes[randomIndex];

  }

}

/*  Fade-out Function - - - - - - - - - */
function fadeOut() {
  //  Removes Fade-in Class, adds Fade-out Class to the #image-animation div
  var image = document.getElementById('image-animation');
  image.classList.remove('image-fade-in');
  image.classList.add('image-fade-out');

  //  Removes Fade-in Class, adds Fade-out Class to the #copy-animation div
  var copy = document.getElementById('copy-animation');
  copy.classList.remove('copy-fade-in');
  copy.classList.add('copy-fade-out');

}

/*  Fade-in Function - - - - - - - - - */
function fadeIn() {
  //  Removes Fade-out Class, adds Fade-in Class to the #image-animation div
  var image = document.getElementById('image-animation');
  image.classList.remove('image-fade-out');
  image.classList.add('image-fade-in');

  //  Removes Fade-out Class, adds Fade-in Class to the #copy-animation div
  var copy = document.getElementById('copy-animation');
  copy.classList.remove('copy-fade-out');
  copy.classList.add('copy-fade-in');

}

/*  Print Quote Function - - - - - - - - - */
function printQuote() {
  //  Create a Profile for Random Quote Object
  var profile = getRandomQuote();

  //  Capture Profile's Portrait and Source Data
  var image = "";
  image += "<div class=\"overlay default-gray\"></div>";
  image += "<img id=\"portrait\" class=\"portrait\" src=\"" + profile.imagePath + "\">";
  image += "<p class=\"citation\"> Photo from ";
  image += "<a class=\"source\" target=\"_blank\" href=\"" + profile.imageUrl + "\"> " + profile.imageSource + "</a></p>";

  //  Capture Profile's Quote Content
  var copy = "";
  copy += "<p class=\"author\">" + profile.source + "</p>";
  copy += "<p class=\"ids\">" + profile.tags + "</p>";
  copy += "<div class=\"separator\"></div>";
  copy += "<p class=\"quote\">" + profile.quote + "</p>";

  //  Insert new HTML Content
  var imageHTML = document.getElementById('image');
  var copyHTML = document.getElementById('copy');
  fadeOut();
  //  Delay the fadeIn of each Animating Div to let the fadeOut animation to finish. Also as soon as the fadeOut has finished,
  //  update the divs content with the new randomly selected Quote.
  setTimeout(function() {
      fadeIn();
      imageHTML.innerHTML = image;
      copyHTML.innerHTML = copy;

  }, 800);

  quotes.splice(randomIndex, 1);
  numberOfQuotes = quotes.length;

}

/*  9 Second Timer - - - - - - - - - - */
//  This timer prints a new quote every 9 seconds. The timer resets when the user clicks the "Next" button. I chose
//  9 seconds because I think its a good amount of time to read the quote and enjoy the image.
var timer = setInterval(printQuote, 9000);

/*  Next Button - - - - - - - - - */
var next = document.getElementById('button');
next.addEventListener('click', function() {
  printQuote();
  clearInterval(timer);
  timer = setInterval(printQuote, 9000);

});

/* On Page Load - - - - - - - - - */
window.addEventListener("DOMContentLoaded", function(){
  printQuote();
  clearInterval(timer);
  timer = setInterval(printQuote, 9000);

});
