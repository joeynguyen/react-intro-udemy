var React = require('react');

module.exports = React.createClass({
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
