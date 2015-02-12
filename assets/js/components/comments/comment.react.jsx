var
  React = require('react'),
  Comment;

Comment = React.createClass({
  render: render
});

module.exports = Comment;

function render() {
  return (
    <div className="comment">
      <h2 className="comment-author">
        {this.props.author}
      </h2>
      {this.props.children}
    </div>
  );
}