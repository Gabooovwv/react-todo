import React from 'react';
import Comment from './Comment';

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comment: [
        'almafa',
        'kortefa',
        'liliom'
      ], classes: []
    };
  }

  removeComment(i)
  {
    console.log(this.state.classes, i);
    /*var arr = this.state.comment;
    arr.slice(i, 1);
    this.setState({comment: arr});*/
  }

  updateComment(newText, i)
  {
    var arr = this.state.comment;
    arr[i] = newText;
    this.setState({comment: arr});
  }

  render() {
    console.log(this.state.classes);
    return (
        <div className="board">
          {
              this.state.comment.map((item, i) => {
                return (
                    <Comment key={i} index={i} updateCommentText={this.updateComment} deleteFromBoard={this.removeComment}>
                      {item}
                    </Comment>
                )
              })
          }
        </div>
    );
  }
}

export default Board;
