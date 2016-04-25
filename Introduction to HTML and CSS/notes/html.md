# HTML: The Structural Foundation of Web Pages and Applications
_HTML is a series of tags that tells web browsers how to render, or display, a web page. You will wrap the content in these tags to describe the elements on the page and how they should be structured. Lean some useful and commonly used HTML tags and how to use them to start building your web pages._

## The Basic Structure of a Web Page
All of the tags are indented, which means that some tags are nested, or placed inside of other tags.
You can think of all the different parts of your as a series of boxes that live inside one another. The outer most box is `<html>`, which contains all the information about your webpage. The `<html>` contains the `<head>` and the `<body>`. The `<head>` contains a lot of behiind the scenes information that people won't see but that's important for your browser to display your page properly. The `<body>` contains anything you see in the browser.

```
<div>
  <h1></h1>
  <p>
    <span></span>
  </p>
</div>

```

The `<!DOCTYPE html>` lets the browser know that you're asking it to display an HTML document. It's always the first thing at the top of an docuemnt, doesn't require a closign tag, and doesn't have anything nested inside it.

The `<head>` contains information such as the `<title>`, `<link>`, among other information.

The `<body>` displays everything you see in a browser. Many web designers divide a page into three sections:
- Header
- Main
- Footer

_HTML5_ provides tags that help us clearly define the different sections of a webpage.
`<header>` often contains introductory information like a company logo, the name of a site, and the purpose of a site. It can also contain the site's main navigation menu.

`<main>` contains the bulk of the information and content we want to.

`<footer>` contains copyright information, social media links, and a secondary navigation.

These three tags are completely optional. You have a lot of freedom as a web developer and many tags to use to structure your webpage.

## Image Tags
`<img>` allows you to add photos and images to webpages.

Most _HTML_ tags can have additional information, called _attributes_ which provide instructions for the browser.

For example, there are `src`, `alt`, and `class` attributes.

The `src` attribute points to a file path.

The `alt` attribute should always contain a precise description of your image. Its what visitors of your website if your image source path is somehow broken or isn't available. This attribute is used by search engines and screen readers too. It enhances accessibility for the visually impaired and people who use screen readers.

The `<img>` tag is a self-closing tag, or an empty element. There are only a few of these, like the `<link>`.

## Paragraph Tags
The most common way to split up content into manageable chunks is to use `<p>`.

## Anchor Tags
Links make it possible to share thing across the web.

`<a>` is how we make clickable links. The `href` attribute (or Hyper Text Reference) is how we tell where the browser should go when someone clicks on the link.

`<a href="#top">`

`target="_blank"` is an attribute that opens a new tab when the link has been clicked.

## HTML Lists
An HTML Lists is a list of items that are either numbered or unnumbered. You can create a list with either an `<ul>` or `<ol>` tag.

To separate the items in a list you need to use `<li>`.
