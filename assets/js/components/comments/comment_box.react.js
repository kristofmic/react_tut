var
  React = require('react'),
  reqwest = require('reqwest'),
  CommentForm = require('./comment_form.react'),
  CommentList = require('./comment_list.react'),
  CommentBox;

CommentBox = React.createClass({displayName: "CommentBox",
  handleCommentSubmit: handleCommentSubmit,
  getComments: getComments,
  addComment: addComment,
  getInitialState: getInitialState,
  componentDidMount: componentDidMount,
  render: render
});

React.render(
  React.createElement(CommentBox, {url: "/api/comments", pollInterval: 5000}),
  document.getElementById('content')
);

function getInitialState() {
  return {
    data: []
  };
}

function componentDidMount() {
  this.getComments();
  setInterval(getComments.bind(this), this.props.pollInterval);
}

function render() {
  return (
    React.createElement("div", {className: "comment-box"}, 
      React.createElement("h1", null, "Comments"), 
      React.createElement(CommentForm, {onCommentSubmit: this.handleCommentSubmit}), 
      React.createElement(CommentList, {data: this.state.data})
    )
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
  var
    comments = this.state.data.concat([data]);

  this.setState({ data: comments });

  this.addComment(data);
}

