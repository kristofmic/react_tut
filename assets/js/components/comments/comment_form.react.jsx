var
  React = require('react'),
  CommentForm;

CommentForm = React.createClass({
  render: render
});

module.exports = CommentForm;

function render() {
  return (
    <div className="comment-form">
      Hello, world! I am a comment form.
    </div>
  );
}