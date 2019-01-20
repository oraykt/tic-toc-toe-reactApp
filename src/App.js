import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    turn: 'X',
    board: Array(9).fill(''),
    toplamHareket: 0,
    oyunSonu: false,
    kazanan: ''
  }
  handleClick = (event) => {

    if (this.state.board[event.target.dataset.kare] === "" && !this.state.oyunSonu) {

      //console.log(event.target);

      this.state.board[event.target.dataset.kare] = this.state.turn;

      event.target.innerText = this.state.turn;
      this.setState({
        turn: this.state.turn === 'X' ? "O" : "X",
        board: this.state.board,
        toplamHareket: ++this.state.toplamHareket
      });

      //console.log(this.state.board);

      var sonuc = this.kazananKontrol();
      if (sonuc === 'X') {
        this.setState({
          oyunSonu: true,
          kazanan: 'X'
        });
        console.log(sonuc);
      } else if (sonuc === 'Y') {
        this.setState({
          oyunSonu: true,
          kazanan: 'O'
        });
        console.log(sonuc);
      } else if (sonuc === "Beraberlik!") {
        this.setState({
          oyunSonu: true,
          kazanan: 'Beraberlik!'
        });
        console.log(sonuc);
      }
    } else {

    }
  }

  kazananKontrol() {
    var board = this.state.board;
    var kazanmaHareketleri = [
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
      [0, 1, 2], [3, 4, 5], [6, 7, 8]
    ];
    for (let i = 0; i < kazanmaHareketleri.length; i++) {
      if (board[kazanmaHareketleri[i][0]] === board[kazanmaHareketleri[i][1]]
        && board[kazanmaHareketleri[i][1]] === board[kazanmaHareketleri[i][2]]) {
        return board[kazanmaHareketleri[i][0]];
      }
    }
    if (this.state.toplamHareket === 9) {
      return 'Beraberlik!';
    }
  }
  render() {
    return (
      <div className="App">
        <div id="game">
          <div id="durum">{this.state.kazanan}</div>
          <div id="head">
            Tic-Toc-Toe Game
          </div>
          <div id="board" onClick={(e) => this.handleClick(e)}>
            <div className="kare" data-kare="0"></div>
            <div className="kare" data-kare="1"></div>
            <div className="kare" data-kare="2"></div>
            <div className="kare" data-kare="3"></div>
            <div className="kare" data-kare="4"></div>
            <div className="kare" data-kare="5"></div>
            <div className="kare" data-kare="6"></div>
            <div className="kare" data-kare="7"></div>
            <div className="kare" data-kare="8"></div>
          </div>
        </div>
      </div >
    );
  }
}

export default App;
