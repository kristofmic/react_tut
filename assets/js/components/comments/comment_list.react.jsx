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
    comments;

  comments = this.props.data.map(function(c) {
    return (
      <Comment author={c.author}>{c.text}</Comment>
    );
  });

  return (
    <div className="comment-list">
      {comments}
    </div>
  );
}