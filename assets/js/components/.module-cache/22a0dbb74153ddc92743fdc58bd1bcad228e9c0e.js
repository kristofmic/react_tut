var
  React = require('react'),
  CommentBox;

CommentBox = React.createClass({displayName: "CommentBox",
  render: render
});

React.render(
  React.createElement(CommentBox, null),
  document.getElementById('example')
);

function render() {
  return (
    React.createElement("div", {className: "comment-box"}, 
      "Hello, world! I am a comment box."
    )
  );
}
