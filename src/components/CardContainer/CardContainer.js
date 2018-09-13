import React, { Component } from 'react';
import { connect } from 'react-redux';

class CardContainer extends Component {
  constructor() {
    super()

  }


  render() {
    return(
      <section class="Container">
        cards
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
   games: state.gamesOfThrones
  });



export default connect(mapStateToProps, null)(CardContainer)