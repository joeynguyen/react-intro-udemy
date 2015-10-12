var React = require('react');
var ThumbnailList = require('./thumbnail-list');

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

// React, please render this class
var thumbnailList = React.createElement(ThumbnailList, options);

// React, after you render this class, place it in the '#container' div
React.render(thumbnailList, document.querySelector('.target') );
