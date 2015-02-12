var
  React = require('react'),
  CommentForm;

CommentForm = React.createClass({
  submitComment: submitComment,
  render: render
});

module.exports = CommentForm;

function render() {
  return (
    <form className="comment-form form-inline" onSubmit={this.submitComment}>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Your name" ref="author" />
      </div>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Say something..." ref="text" />
      </div>
      <button type="submit" className="btn btn-default">Post</button>
    </form>
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