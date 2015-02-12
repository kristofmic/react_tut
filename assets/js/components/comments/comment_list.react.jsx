var
  React = require('react'),
  CommentList;

CommentList = React.createClass({
  render: render
});

module.exports = CommentList;

function render() {
  return (
    <div className="comment-list">
      Hello, world! I am a comment list.
    </div>
  );
}