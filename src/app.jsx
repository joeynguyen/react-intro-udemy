var React = require('react');
var ThumbnailList = require('./thumbnail-list');
var Dropdown = require('./dropdown');

var options = {
    thumbnailData: [
        {
            id: 1,
            title: 'See tutorials',
            number: 13,
            header: 'Learn React',
            description: 'React is a new library for dynamic pages. React is a new library for dynamic pages. React is a new library for dynamic pages.',
            imageUrl: 'http://formatjs.io/img/react.svg'
        },
        {
            id: 2,
            title: 'See tutorials',
            number: 25,
            header: 'Learn Gulp',
            description: 'Gulp will speed up your development workflow. Gulp will speed up your development workflow. Gulp will speed up your development workflow.',
            imageUrl: 'http://brunch.io/images/others/gulp.png'
        }
    ]
};
var ulOptions = {
    title: 'Choose a dessert',
    items: [
        { id: 1, name: 'Apple pie' },
        { id: 2, name: 'Peach cobbler'},
        { id: 3, name: 'Coconut cream pie'}
    ]
};

// React, please render this class
var thumbnailList = React.createElement(ThumbnailList, options);
var dropdown = React.createElement(Dropdown, ulOptions);

// React, after you render this class, place it in the '#container' div
React.render(thumbnailList, document.querySelector('.target') );
React.render(dropdown, document.querySelector('.target2') );
