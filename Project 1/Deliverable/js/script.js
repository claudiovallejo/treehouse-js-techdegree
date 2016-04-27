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

//  Friedrich Nietzche
var quote1 = {
  source:       "Friedrich Nietzche",
  tags:         "Philosopher, Critic, Poet",
  quote:        "\"And those who were seen dancing were thought to be insane by those who couldn't hear the music.\"",
  imagePath:    "images/friedrich@2x.jpg",
  imageSource:  "Art Creation Forever",
  imageURL:     "http://artcreationforever.com/images/friedrich-nietzsche/friedrich-nietzsche-06.jpg",
  citation:     "",
  date:         ""

}

//  Mark Twain
var quote2 = {
  source:       "Mark Twain",
  tags:         "Author, Humorist",
  quote:        "\"The two most important days in your life are the day you were born and the day you find out why.\"",
  imagePath:    "images/mark@2x.jpg",
  imageSource:  "Time Inc.",
  imageURL:     "http://img2.timeinc.net/people/i/2015/news/150518/mark-twain-768.jpg",
  citation:     "",
  date:         ""

}

//  Carl Jung
var quote3 = {
  source:       "Carl Jung",
  tags:         "Psychiatrist, Psychotherapist",
  quote:        "\"Everything that irritates us about others can lead us to an understanding of ourselves.\"",
  imagePath:    "images/carl@2x.jpg",
  imageSource:  "Biography.com",
  imageURL:     "http://a2.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTE5NTU2MzE2MjY4NjkzMDAz.jpg",
  citation:     "",
  date:         ""

}

//  Fyodor Dostoyevsky
var quote4 = {
  source:       "Fyodor Dostoyevsky",
  tags:         "Author, Philosopher",
  quote:        "\"The greatest happiness is to know the source of unhappiness.\"",
  imagePath:    "images/fyodor@2x.jpg",
  imageSource:  "Populere Debiyat",
  imageURL:     "http://www.populeredebiyat.com/wp-content/uploads/2012/01/dostoyevsky.jpg",
  citation:     "",
  date:         ""

}

//  Albert Einstein
var quote5 = {
  source:       "Albert Einstein",
  tags:         "Theoretical Physicist",
  quote:        "\"A person who never made a mistake never tried anything new.\"",
  imagePath:    "images/albert@2x.jpg",
  imageSource:  "Philosophical Library",
  imageURL:     "http://www.philosophicallibrary.com/wp-content/uploads/2016/03/Albert-Einstein-HD.jpg",
  citation:     "",
  date:         ""

}

//  Salvador Dalí
var quote6 = {
  source:       "Salvador Dalí",
  tags:         "Painter",
  quote:        "\"Intelligence without ambition is a bird without winds.\"",
  imagePath:    "images/salvador@2x.jpg",
  imageSource:  "Ecestaticos.com",
  imageURL:     "http://www.ecestaticos.com/image/clipping/939/967b7be01cf74878acd2e25afd61d715/el-pintor-salvador-dali-en-1942-gtres.jpg",
  citation:     "",
  date:         ""

}

//  Mahatma Gandhi
var quote7 = {
  source:       "Mahatma Gandhi",
  tags:         "Lawyer, Thinker, Politician",
  quote:        "\"Strength does not come from physical capacity. It comes from an indomitable will.\"",
  imagePath:    "images/mahatma@2x.jpg",
  imageSource:  "Keep It Worthy",
  imageURL:     "http://keepitworthy.com/wp-content/uploads/2015/11/url.jpg",
  citation:     "",
  date:         ""

}

//  Martin Luther King Jr.
var quote8 = {
  source:       "Martin Luther King Jr.",
  tags:         "Minister, Activist, Humanitarian, Leader",
  quote:        "\"The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.\"",
  imagePath:    "images/martin@2x.jpg",
  imageSource:  "National Service",
  imageURL:     "http://www.nationalservice.gov/sites/default/files/upload/mlklarge4.jpg",
  citation:     "",
  date:         ""

}

//  Nikola Tesla
var quote9 = {
  source:       "Nikola Tesla",
  tags:         "Inventor, Engineer, Physicist, Futurist",
  quote:        "\"If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.\"",
  imagePath:    "images/nikola@2x.jpg",
  imageSource:  "Widimedia.org",
  imageURL:     "https://upload.wikimedia.org/wikipedia/commons/7/79/Tesla_circa_1890.jpeg",
  citation:     "",
  date:         ""

}

//  Ernest Hemingway
var quote10 = {
  source:       "Ernest Hemingway",
  tags:         "Novelist, Journalist",
  quote:        "\"Every man's life ends the same way, it is only the details of how he lived and how he died that distinguish one man from another.\"",
  imagePath:    "images/ernest@2x.jpg",
  imageSource:  "The Pursuit of Sassiness",
  imageURL:     "http://www.thepursuitofsassiness.com/wp-content/uploads/2012/12/hway8.jpg",
  citation:     "",
  date:         ""

}

/*  Quote Object Array - - - - - - - - - */
var quotes = [quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9, quote10];
//  Array that contains the quotes that have been randomly selected by the getRandomQuote()
var quotesClone = [];
//  Variable that stores a value between 0 and the length of the Quotes Array
var randomIndex = (Math.floor(Math.random() * quotes.length));

/*  Random Quote Function - - - - - - - - - - */
/*  The Function responsible for selecting a random Quote from the quotes array
    AND pushing the selected quote to the quotesClone Array.
 */
function getRandomQuote() {

  if (quotes.length > 0) {
    randomIndex = (Math.floor(Math.random() * quotes.length));
    var randomQuote = quotes[randomIndex];
    quotesClone.push(randomQuote);
    quotes.splice(randomIndex, 1);
    // test(quotes[randomIndex]);

  //  If the Quotes Array is empty, we can't index it with the randomIndex variable.
  //  Therefore, we copy the contents of the Clone Quotes Array into the Quotes Array, clear out the Clone Quotes Array
  //  AND THEN index the Quotes Array.
} else {
    quotes = quotesClone;
    quotesClone = [];
    randomIndex = (Math.floor(Math.random() * quotes.length));
    var randomQuote = quotes[randomIndex];

  }

  return randomQuote;

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
  //  Delay the fadeIn of each Animating Div to let the fadeOut animation finish. Also as soon as the fadeOut has finished,
  //  update the divs content with the new randomly selected Quote.
  setTimeout(function() {
      fadeIn();
      imageHTML.innerHTML = image;
      copyHTML.innerHTML = copy;

  }, 800);

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
