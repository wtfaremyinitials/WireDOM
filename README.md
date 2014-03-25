WireDOM
=======

Manipulate the DOM with Javascript variables.

How to use
==========

Include WireDOM.min.js on the page

`<script src="js/WireDOM.min.js">`

Add the WireDOM attribute to elements that need to be wired on page load

`<h1 data-wiredom="title">Page Title</h1>`

Hook in to WireDOM

     // Get the value of a DOM element
     var currentTitle = WireDOM.title
     // Set the value of a DOM element
     WireDOM.title = "This will be the page's new title!"

That's it!

Planned Features
================

- On variable change callbacks
- Multiple DOM elements tied to one variable
