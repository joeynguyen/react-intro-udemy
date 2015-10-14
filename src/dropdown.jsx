var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

module.exports = React.createClass({
    getInitialState: function() {
        return { open: false };
    },
    handleClick: function() {
        this.state.open ? this.setState( {open: false} ) : this.setState( {open: true} );
        this.setState( {open: !this.state.open} );
    },
    render: function() {
        var list = this.props.items.map(function(item) {
            return <ListItem key={item.id} item={item.name} />
        });
        return (
            <div className="dropdown">
                <Button handleClick={this.handleClick} className="btn-default" title={this.props.title} subTitleClassName="caret"/>
                <ul className={"dropdown-menu " + (this.state.open ? "show" : "")}>
                    {list}
                </ul>
            </div>
        );
    }
});
