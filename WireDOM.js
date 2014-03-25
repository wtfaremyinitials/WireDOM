window.WireDOM = {};

WireDOM.__internal__ = {};
WireDOM.__internal__.elements = {};

WireDOM.__internal__.wire = function(element, name) {
    // Name of new proxy variable
    var name = (name || element.getAttribute('data-wiredom') || element.getAttribute('id'));

    // Setup getters and setters
    Object.defineProperty(WireDOM, name, {
            get: function() {
                return element.innerHTML;
            },

            set: function(value) {
                element.innerHTML = value;
            }
    });

    // Add it to elements object
    WireDOM.__internal__.elements[name] = element;
}

WireDOM.__internal__.recheck = function() {
    // Find all DOM elements with the attribute data-wiredom
    var currentElements = document.querySelectorAll('[data-wiredom]');

    for (var i=0; i<currentElements.length; i++) {
        WireDOM.__internal__.wire(currentElements[i]);
    }
}

WireDOM.__internal__.getElement = function(name) {
    return WireDOM.__internal__.elements[name];
}

WireDOM.__internal__.recheck();
