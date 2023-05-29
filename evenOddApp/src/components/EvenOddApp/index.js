// Write your code here

import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onClickIncrement = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const text = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="heading">Count {count} </h1>
          <p className="count">Count is {text}</p>
          <button
            type="button"
            className="button"
            onClick={this.onClickIncrement}
          >
            Increment
          </button>
        </div>
        <p className="description">
          Increase By Random Number Between 0 to 100
        </p>
      </div>
    )
  }
}

export default EvenOddApp
