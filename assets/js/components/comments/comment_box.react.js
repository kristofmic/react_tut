var
  React = require('react'),
  CommentForm = require('./comment_form.react'),
  CommentList = require('./comment_list.react'),
  CommentBox,
  data;

data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];

CommentBox = React.createClass({displayName: "CommentBox",
  render: render
});

React.render(
  React.createElement(CommentBox, {data: data}),
  document.getElementById('content')
);

function render() {
  return (
    React.createElement("div", {className: "comment-box"}, 
      React.createElement("h1", null, "Comments"), 
      React.createElement(CommentList, {data: this.props.data}), 
      React.createElement(CommentForm, null)
    )
  );
}

