var React = require('react');
var Button = require('./button');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <img src={this.props.imageUrl} alt="..." />
                    <div className="caption">
                        <h3>{this.props.header}</h3>
                        <p>{this.props.description}</p>
                        <p>
                            <Button title={this.props.title} className="btn-primary" subTitle={this.props.number} subTitleClassName="badge"/>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
});
