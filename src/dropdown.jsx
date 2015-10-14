var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

module.exports = React.createClass({
    handleClick: function() {
        alert('button clicked');
    },
    render: function() {
        var list = this.props.items.map(function(item) {
            return <ListItem key={item.id} item={item.name} />
        });
        // var visible;
        // if(this.state.dropdownOpen) {
        //     visible = "visible";
        // } else {
        //     visible = "hidden";
        // }
        return (
            <div className="dropdown">
                <Button handleClick={this.handleClick} className="btn-default" title={this.props.title} subTitleClassName="caret"/>
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
});
