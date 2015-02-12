var
  React = require('react'),
  reqwest = require('reqwest'),
  CommentForm = require('./comment_form.react'),
  CommentList = require('./comment_list.react'),
  CommentBox;

CommentBox = React.createClass({
  handleCommentSubmit: handleCommentSubmit,
  getComments: getComments,
  addComment: addComment,
  getInitialState: getInitialState,
  componentDidMount: componentDidMount,
  render: render
});

React.render(
  <CommentBox url="/api/comments" pollInterval={5000}/>,
  document.getElementById('content')
);

function getInitialState() {
  return {
    data: []
  };
}

function componentDidMount() {
  this.getComments();
  //setInterval(getThisComments, this.props.pollInterval);
}

function render() {
  return (
    <div className="comment-box">
      <h1>Comments</h1>
      <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
      <CommentList data={this.state.data} />
    </div>
  );
}

function getComments() {
  var
    options = {
      method: 'get',
      url: '/api/comments',
    };

  reqwest(options)
    .then(handleResponse.bind(this));
}

function addComment(comment) {
  var
    options = {
      method: 'post',
      url: '/api/comments',
      type: 'json',
      contentType: 'application/json',
      data: JSON.stringify(comment)
    };

  reqwest(options)
    .then(handleResponse.bind(this));
}

function handleResponse(res) {
  this.setState({
    data: res
  });
}

function handleCommentSubmit(data) {
  this.addComment(data);
}

