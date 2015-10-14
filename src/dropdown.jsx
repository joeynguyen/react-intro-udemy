var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

module.exports = React.createClass({
    getInitialState: function() {
        return { open: false, dropdownTitle: this.props.title };
    },
    handleClick: function() {
        this.state.open ? this.setState( {open: false} ) : this.setState( {open: true} );
        this.setState( {open: !this.state.open} );
    },
    handleItemClick: function(itemName) {
        this.setState({
            open: false,
            dropdownTitle: itemName
        });
    },
    render: function() {
        var list = this.props.items.map(function(item) {
            return <ListItem className={this.state.dropdownTitle === item.name ? "active" : ""} key={item.id} itemName={item.name} whenItemClicked={this.handleItemClick} />
        }.bind(this));
        return (
            <div className="dropdown">
                <Button handleClick={this.handleClick} className="btn-default" title={this.state.dropdownTitle} subTitleClassName="caret"/>
                <ul className={"dropdown-menu " + (this.state.open ? "show" : "")}>
                    {list}
                </ul>
            </div>
        );
    }
});
