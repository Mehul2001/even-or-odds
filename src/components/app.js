import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame, cancelGame } from '../actions/settings';
import Instructions from './Instructions';
import { fetchNewDeck } from '../actions/deck'
class App extends Component {
    startGame = () => {
        this.props.startGame();
        this.props.fetchNewDeck();
    }
    render() {
        console.log(this);
        return (
            <div>
                <h2>♠️ ❤ Evens or Odds ♣️ ♦</h2>
                {
                    this.props.gameStarted ? (
                        <div>
                            <h3>The game is on!</h3>
                            <br />
                            <button onClick={this.props.cancelGame}>Cancel Game </button>
                        </div>
                    ) : (
                            <div>
                                <h3>A new game awaits</h3>
                                <br />
                                <button onClick={this.startGame}>Start Game</button>
                                <hr />
                                <Instructions />
                            </div>
                        )
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('state', state);

    return { gameStarted: state.gameStarted };
}
// const mapDispactchToProps = dispatch => {
//     return {
//         startGame: () => dispatch(startGame()),
//         cancelGame: () => dispatch(cancelGame()),
//         fetchNewDeck: () => dispatch(fetchNewDeck())
//     };
// }

const componentConnector = connect(mapStateToProps,
    { startGame, cancelGame, fetchNewDeck }
);
export default componentConnector(App);