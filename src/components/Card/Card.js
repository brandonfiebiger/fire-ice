import React, { Component } from 'react';

export class Card extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fetchedSwornMembers: []
    }
  }

  getSwornMembers = async () => {
    if(!this.state.fetchedSwornMembers.length) {
      const { swornMembers } = this.props;
      const memberPromises = swornMembers.map(async member => {
        let memberId = member.slice(49)
        const response = await fetch(`http://localhost:3001/api/v1/character/${memberId}`)
        const fetchedMember = await response.json()
        return fetchedMember
      })
      const fetchedSwornMembers = await Promise.all(memberPromises)
      this.setState({
        fetchedSwornMembers
      })
      console.log(this.state)
    }
  }

  
  
  render() {
    const displaySwornMembers = this.state.fetchedSwornMembers.map(member => {
        return <p>{member.name}: {member.died ? member.died : 'Alive'}</p> || <p></p>
      })
    const { name, founded, seats, titles, coatOfArms, ancestralWeapons, words} = this.props;
    return(
      <article className="Card" onClick={this.getSwornMembers}>
        <h1>{ name }</h1>
        <h2>{ founded }</h2>
        <p>{ seats }</p>
        <p>{ titles }</p>
        <p>{ coatOfArms }</p>
        <p>{ ancestralWeapons }</p>
        <p>{ words }</p>
        <section>{displaySwornMembers}</section>
      </article>
    )
  }
}

export default Card;