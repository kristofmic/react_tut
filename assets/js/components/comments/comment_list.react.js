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
    comments;

  comments = this.props.data.map(function(c) {
    return (
      React.createElement(Comment, {author: c.author}, c.text)
    );
  });

  return (
    React.createElement("div", {className: "comment-list"}, 
      comments
    )
  );
}