var React = require('react');
var Button = require('./button');
// var List = require('./list');

module.exports = React.createClass({
    handleClick: function() {
        alert('button clicked');
    },
    render: function() {
        var visible;
        // if(this.state.dropdownOpen) {
        //     visible = "visible";
        // } else {
        //     visible = "hidden";
        // }
        return (
            <div className="dropdown">
                <Button handleClick={this.handleClick} className="btn-default" title={this.props.title} subTitleClassName="caret"/>
                {/* <List /> */}
            </div>
        );
    }
});
