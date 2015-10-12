var React = require('react');
var Thumbnail = require('./thumbnail');

module.exports = React.createClass({
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
