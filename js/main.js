// Define a 'class'
var HelloWorld = React.createClass({
    render: function() {
        return <h1>Hello World</h1>;
    }
});

// React, please render this class
var element = React.createElement(HelloWorld);

// React, after you render this class, place it in the '#container' div
React.render(element, document.getElementById('container') );
