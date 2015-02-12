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

CommentBox = React.createClass({
  render: render
});

React.render(
  <CommentBox data={data}/>,
  document.getElementById('content')
);

function render() {
  return (
    <div className="comment-box">
      <h1>Comments</h1>
      <CommentList data={this.props.data} />
      <CommentForm />
    </div>
  );
}

