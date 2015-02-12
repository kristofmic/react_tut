var
  React = require('react'),
  Comment;

Comment = React.createClass({displayName: "Comment",
  render: render
});

module.exports = Comment;

function render() {
  return (
    React.createElement("div", {className: "comment"}, 
      React.createElement("h2", {className: "comment-author"}, 
        this.props.author
      ), 
      this.props.children
    )
  );
}