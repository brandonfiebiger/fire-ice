import React, { Component } from 'react';

export class Card extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    const { name, founded, seats, titles, coatOfArms, ancestralWeapons, words} = this.props;
    return(
      <article className="Card">
        <h1>{ name }</h1>
        <h2>{ founded }</h2>
        <p>{ seats }</p>
        <p>{ titles }</p>
        <p>{ coatOfArms }</p>
        <p>{ ancestralWeapons }</p>
        <p>{ words }</p>
      </article>
    )
  }
}

export default Card;