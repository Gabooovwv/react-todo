import React from 'react';

class Counter extends React.Component
{
  render = () => {
    var count = 0;

    for (var i = 0; i < this.props.count.length; ++i) {
      count += this.props.count[i].status === 'Active' ? 1 : 0
    }

    return (
        <div>
          {count + ' ' + (count === 1 ? 'item' : 'items')} left
        </div>
    );
  }
}

export default Counter;
