var
  React = require('react'),
  Comment = require('./comment.react'),
  CommentList;

CommentList = React.createClass({
  render: render
});

module.exports = CommentList;

function render() {
  var
    comments = this.props.data.map(renderComment);

  return (
    <div className="comment-list">
      {comments}
    </div>
  );
}

function renderComment(c) {
  return (
    <Comment author={c.author}>{c.text}</Comment>
  );
}