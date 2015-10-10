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
        );
    }
});

var options = {
    title: 'See tutorials',
    number: 13,
    header: 'Learn React',
    description: 'React is a new library for dynamic pages',
    imageUrl: 'http://formatjs.io/img/react.svg'
};

// React, please render this class
var thumbnail = React.createElement(Thumbnail, options);

// React, after you render this class, place it in the '#container' div
React.render(thumbnail, document.querySelector('.target') );
