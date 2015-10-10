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
var Form = React.createClass({
    render: function() {
        return (
            <Badge title='Inbox' number='83' />
        );
    }
});

// React, please render this class
var form = React.createElement(Form);

// React, after you render this class, place it in the '#container' div
React.render(form, document.getElementById('container') );
