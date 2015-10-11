// Define a 'class'
var Badge = React.createClass({
    render: function() {
        return (
            <div>
                <button className="btn btn-primary" type="button">
                    {this.props.title} <span className="badge">{this.props.number}</span>
                </button>
            </div>
        );
    }
});
var Thumbnail = React.createClass({
    render: function() {
        return (
            <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <img src={this.props.imageUrl} alt="..." />
                    <div className="caption">
                        <h3>{this.props.header}</h3>
                        <p>{this.props.description}</p>
                        <p>
                            <Badge title={this.props.title} number={this.props.number} />
                        </p>
                    </div>
                </div>
            </div>
        );
    }
});
var ThumbnailList = React.createClass({
    render: function () {
        var list = this.props.thumbnailData;
        return (
            <div>
                {
                    list.map(function(itemData) {
                        // same as return React.createElement(Thumbnail, itemData);
                        return <Thumbnail key={itemData.id} {...itemData} />;
                    })
                }
            </div>
        );
    }
});

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
var thumbnail = React.createElement(ThumbnailList, options);

// React, after you render this class, place it in the '#container' div
React.render(thumbnail, document.querySelector('.target') );
