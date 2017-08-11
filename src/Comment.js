import React from 'react';

class Comment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {editing: false};

    // This binding is necessary to make `this` work in the callback
    this.edit   = this.edit.bind(this);
    this.remove = this.remove.bind(this);
    this.save   = this.save.bind(this);
  }

  edit() {
    this.setState({editing: true})
  }

  remove() {
    this.props.deleteFromBoard(this.props.index);
  }

  save() {
    this.props.updateCommentText(this.refs.newText.value, this.props.index);
    this.setState({editing: false})
  }

  renderNormal()
  {
    return (
        <div className="contentContainer">
          <div className="contentText">{this.props.children}</div>
          <button onClick={this.edit} className="button-primary">Edit</button>
          <button onClick={this.remove} className="button-danger">Remove</button>
        </div>
    );
  }

  renderForms()
  {
    return (
        <div className="contentContainer">
          <textarea ref="newText" defaultValue={this.props.children}></textarea><br />
          <button onClick={this.save} className="button-success">Save</button>
        </div>
    );
  }

  render() {
    return this.state.editing ? this.renderForms() : this.renderNormal();
  }
}

export default Comment;
