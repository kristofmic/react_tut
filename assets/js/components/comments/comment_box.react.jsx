var
  React = require('react'),
  CommentForm = require('./comment_form.react'),
  CommentList = require('./comment_list.react'),
  CommentBox;

CommentBox = React.createClass({
  render: render
});

React.render(
  <CommentBox />,
  document.getElementById('content')
);

function render() {
  return (
    <div className="comment-box">
      <h1>Comments</h1>
      <CommentList />
      <CommentForm />
    </div>
  );
}

