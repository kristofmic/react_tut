var
  React = require('react'),
  CommentForm = require('./comment_form.react'),
  CommentList = require('./comment_list.react'),
  CommentBox;

CommentBox = React.createClass({displayName: "CommentBox",
  render: render
});

React.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);

function render() {
  return (
    React.createElement("div", {className: "comment-box"}, 
      React.createElement("h1", null, "Comments")
    )
  );
}

