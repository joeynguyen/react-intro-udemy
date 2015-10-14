var React = require('react');

module.exports = React.createClass({
    handleClick: function() {
        this.props.whenItemClicked(this.props.itemName);
        // using this pattern allows you to add additional functionality to a click handler like:
        // console.log('Additional functionality here');
    },
    render: function() {
        return <li className={this.props.className}><a onClick={this.handleClick}>{this.props.itemName}</a></li>
    }
});
