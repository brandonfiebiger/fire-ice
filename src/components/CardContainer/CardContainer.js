import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { Card }  from '../Card/Card';

class CardContainer extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    const displayCards = this.props.games.map(game => {
        return <Card {...game}/>
      })
    return(
      <section className="Container">
        {displayCards}
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
   games: state.gamesOfThrones
  });



export default connect(mapStateToProps, null)(CardContainer)