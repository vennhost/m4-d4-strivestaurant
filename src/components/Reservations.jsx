import React from 'react'
import { ListGroup } from 'react-bootstrap'

class Reservations extends React.Component {
  state = {
    reservations: []
  }

  componentDidMount = async () => {
    // THIS IS THE PERFECT PLACE TO MAKE FETCHES
    console.log("I'm in the componentDidMount method")
    try {
      let response = await fetch("https://striveschool.herokuapp.com/api/reservation")
      let reservations = await response.json()
      console.log('RESERVATIONS ARE: ', reservations)
      this.setState({
        reservations: reservations
      })
    } catch (err) {
      console.log('error!', err)
    }
  }

  render() {
    return (
      <div className="mt-2">
        <ListGroup>
          {this.state.reservations.map((reservation, i) => {
            return (
              <ListGroup.Item key={i}>
                From: {reservation.name}, for {reservation.numberOfPersons}
                  at {reservation.dateTime}
              </ListGroup.Item>
            )
          })
          }
        </ListGroup>
        {this.state.reservations.length === 0 && (<div>No reservations for your restaurant</div>)}
      </div>
    )
  }
}

export default Reservations