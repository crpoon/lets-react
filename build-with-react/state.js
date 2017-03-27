var Board = React.createClass({
  render: function() {
    var className = "board";
    if (this.props.selected) {
      className += " selected";
    }
    return (
      <div className={className}>
        {this.props.index + 1}
      </div>
    );
  }
});

var BoardSwitcher = React.createClass({
  getInitialState: function() {
    return {
      index : 0
    }
  },

  onToggleClick: function(evt) {
    this.setState({
      index: (this.state.index + 1) % this.props.numBoards
    })
  },

  render: function() {
    var boards = [];
    for (var ii = 0; ii < this.props.numBoards; ii++) {
      var isSelected = ii === this.state.index;
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      );
    }

    return (
      <div>
        <div className="boards">{boards}</div>
        <button>Toggle</button>
      </div>
    );
  }
});

ReactDOM.render(
  <BoardSwitcher numBoards={3} />,
  document.getElementById('container')
);
