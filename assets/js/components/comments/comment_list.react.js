var
  React = require('react'),
  CommentList;

CommentList = React.createClass({displayName: "CommentList",
  render: render
});

module.exports = CommentList;

function render() {
  return (
    React.createElement("div", {className: "comment-list"}, 
      "Hello, world! I am a comment list."
    )
  );
}