import React from 'react';
import Comment from './Comment';
import Counter from './Counter';
import Cookies from 'universal-cookie';

const cookies = new Cookies();


class Board extends React.Component
{
  state = {
    comment: (typeof cookies.get('comment') !== 'undefined' ? cookies.get('comment') : []),
    menu:    ['All', 'Active', 'Complete'],
    filter:  'All'
  };

  save = (e) => {
    if (e.key === 'Enter') {
      var arr = this.state.comment;
      arr.push({text: e.target.value, status: 'Active'});
      e.target.value = '';
      cookies.set('comment', arr, { path: '/' });
      this.setState({comment: arr});
    }
  };

  removeComment = (i) => {
    var arr = this.state.comment;
    arr.splice(i, 1);
    cookies.set('comment', arr, { path: '/' });
    this.setState({comment: arr});
  };

  updateComment = (newText, i) => {
    var arr = this.state.comment;
    arr[i] = {text: newText, status: arr[i].status};
    cookies.set('comment', arr, { path: '/' });
    this.setState({comment: arr});
  };

  doneComment = (i, status) => {
    var arr = this.state.comment;
    arr[i] = {text: arr[i].text, status: status};
    cookies.set('comment', arr, { path: '/' });
    this.setState({comment: arr});
  };

  filter = (e) => {
    this.setState({filter: e.target.innerText});
  };

  render = () => {
    return (
        <div className="board">
          <input onKeyPress={this.save} /><br />
          <Counter count={this.state.comment} />
          <ul>
              {this.state.menu.map((item, i) => {return (
                  <li key={i} className={this.state.filter === item ? 'active' : ''} onClick={this.filter}>{item}</li>
              )})}
          </ul>
            {this.state.comment.map((item, i) => {
                return (
                    <Comment
                        key={i}
                        index={i}
                        filter={this.state.filter === 'All' || this.state.filter === item.status ? 'show' : 'hidden'}
                        updateCommentText={this.updateComment}
                        deleteFromBoard={this.removeComment}
                        doneComment={this.doneComment}
                        commentStatus={item.status}>
                        {item.text}
                    </Comment>
                )
            })}
        </div>
    );
  }
}

export default Board;
