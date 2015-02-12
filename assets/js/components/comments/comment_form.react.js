var
  React = require('react'),
  CommentForm;

CommentForm = React.createClass({displayName: "CommentForm",
  submitComment: submitComment,
  render: render
});

module.exports = CommentForm;

function render() {
  return (
    React.createElement("form", {className: "comment-form form-inline", onSubmit: this.submitComment}, 
      React.createElement("div", {className: "form-group"}, 
        React.createElement("input", {type: "text", className: "form-control", placeholder: "Your name", ref: "author"})
      ), 
      React.createElement("div", {className: "form-group"}, 
        React.createElement("input", {type: "text", className: "form-control", placeholder: "Say something...", ref: "text"})
      ), 
      React.createElement("button", {type: "submit", className: "btn btn-default"}, "Post")
    )
  );
}

function submitComment(e) {
  var
    author,
    authorInput,
    textInput,
    text;

  e.preventDefault();

  textInput = this.refs.text.getDOMNode();
  authorInput = this.refs.author.getDOMNode();

  author = authorInput.value.trim();
  text = textInput.value.trim();

  if (!text || !author) return;

  this.props.onCommentSubmit({ author: author, text: text });

  textInput.value = '';
  authorInput.value = '';
}