import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fakeAction } from '../../actions';
import { fetchHouseData } from '../../utils/apiCalls';
import { getGamesOfThrones } from '../../actions'
import CardContainer from '../CardContainer/CardContainer';
class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true
    }
  }


  async componentDidMount() {
    const gameOfThrones = await fetchHouseData()
    this.props.getGames(gameOfThrones);
    this.setState({
      loading: false
    })
  }

  render() {
    const { loading } = this.state;
    return (
      <div className='App'>
        <div className='App-header'>
        {loading ? <img src='./wolf.gif'/> : ''}
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          <button onClick={() => {
            this.props.fakeAction();
            alert(this.props.fake);
          }}> FAKE ACTION</button>
        </div>
        <div className='Display-info'>
          <CardContainer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func.isRequired
};

const mapStateToProps = ({ fake }) => ({ fake });


const mapDispatchToProps = dispatch => ({ 
  fakeAction: () => dispatch(fakeAction()),
  getGames: (games) => dispatch(getGamesOfThrones(games))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
