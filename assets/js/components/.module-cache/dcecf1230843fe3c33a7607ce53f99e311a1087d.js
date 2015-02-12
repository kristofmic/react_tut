var
  React = require('react'),
  CommentForm;

CommentForm = React.createClass({displayName: "CommentForm",
  render: render
});

function render() {
  return (
    React.createElement("div", {className: "comment-form"}, 
      "Hello, world! I am a comment form."
    )
  );
}