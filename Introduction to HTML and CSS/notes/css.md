# Make it Beautiful with CSS
_CSS, or Cascading Style Sheets, is a system for selecting HTML tags and defining their appearance. From teh text, color and alignment, to teh height, width, and space between them, learn a few different ways to select and style HTML elements using CSS._

## Select and Style by Element
We use _CSS_ to make web pages beautiful by selecting HTML tags and giving the browser styling instructions on how these tags should look.

Each block of _CSS_ is called a _CSS Rule_. Each rule selects a tag on an HTML page and assigns a series of properties to that tag and applies the styling to it.

```
a {
  color: white;
  text-decoration: none;

}

```

Each rule begins with a _selector_, which tells the CSS which tag or element to style. We can select an HTML element in a variety of ways. Each line in the _CSS Rule_ inside the `{}` is a style instruction. Each styling instruction are composed of _CSS Properties_, separated by a `:`, and then a _value_ followed by a `;`.

## Select and Style by Class
Classes are attributes you can add to HTML elements, and then write rules for that class, and any element that has that class will have those styles. Class names usually describe the elements they are applied to.

```
.card-title {
  text-align: center;

}
```
