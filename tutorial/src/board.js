import React from 'react'

import Square from './components/index'
import calculateWinner from './conteiners/index'
import './index.css'

class Board extends React.Component {

    handleClick(i) {
      const history = this.state.history;
      const current = history[history.length - 1];
      var squares = current.squares.slice();
      squares = this.state.squares.slice();
      
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        history: history.concat([{
            squares: squares,
          }]),
          xIsNext: !this.state.xIsNext,
      });
    }

    renderSquare(i) {
      return (
        <Square
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
        />
      );
    }
  
    render() {
      return (
        <div>
        {/* <div className="status">{status}
        </div> */}

        
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }

  export default Board