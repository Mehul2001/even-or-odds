import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame, cancelGame } from '../actions/settings';
import Instructions from './Instructions';
import fetchState from '../reducers/fetchState';
import { fetchNewDeck } from '../actions/deck'
class App extends Component {
    startGame = () => {
        this.props.startGame();
        this.props.fetchNewDeck();
    }
    render() {
        console.log(this);
        if (this.props.fetchState === fetchState.error) {
            return (
                <div>
                    <p>
                        Please try reloading the app. An error occurred.
                    </p>
                    <p>{this.props.message}</p>
                </div>
            )
        }
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
    const {
        settings: { gameStarted },
        deck: { fetchState, message }
    } = state;
    return { gameStarted, fetchState, message };
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