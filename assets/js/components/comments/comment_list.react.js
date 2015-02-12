var
  React = require('react'),
  Comment = require('./comment.react'),
  CommentList;

CommentList = React.createClass({displayName: "CommentList",
  render: render
});

module.exports = CommentList;

function render() {
  var
    comments = this.props.data.map(renderComment);

  return (
    React.createElement("div", {className: "comment-list"}, 
      comments
    )
  );
}

function renderComment(c) {
  return (
    React.createElement(Comment, {author: c.author}, c.text)
  );
}