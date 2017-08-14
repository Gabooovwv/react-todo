import React from 'react';

class Comment extends React.Component
{
  state = {editing: false};

  edit = () => {
    this.setState({editing: true})
  };

  remove = () => {
    this.props.deleteFromBoard(this.props.index);
  };

  save = () => {
    this.props.updateCommentText(this.refs.newText.value, this.props.index);
    this.setState({editing: false})
  };

  done = (e) => {
    this.props.doneComment(this.props.index, e.target.checked ? 'Complete' : 'Active');
  };

  renderNormal = () => {
    return (
        <div className={"contentContainer" + (this.props.filter === 'hidden' ? ' hidden' : ' show')}>
          <div onDoubleClick={this.edit} className={"contentText" + (this.props.commentStatus === 'Complete' ? ' Complete' : '')}>
            <input type="checkbox" onChange={this.done} checked={this.props.commentStatus === 'Complete'} />
            {this.props.children}
            <button onClick={this.remove} className="button-danger">Remove</button>
          </div>

        </div>
    );
  }

  renderForms = () => {
    return (
        <div className="contentContainer">
          <input type="checkbox" onChange={this.done} />
          <input ref="newText" defaultValue={this.props.children} />
          <button onClick={this.save} className="button-success">Save</button>
        </div>
    );
  }

  render = () => {
    return this.state.editing ? this.renderForms() : this.renderNormal();
  }
}

export default Comment;
