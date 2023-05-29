// Write your code here

import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mango: 0,
    banana: 0,
  }
  onClickEatMangoButton = () => {
    const {mango} = this.state
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }
  onClickEatBananaButton = () => {
    const {banana} = this.state
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }
  render() {
    const {mango, banana} = this.state

    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="mango">{mango}</span> mangoes{' '}
            <span className="banana">{banana}</span> bananas
          </h1>
          <div className="img-container">
            <img
              className="img"
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
            />
            <img
              className="img"
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
            />
          </div>
          <div className="btn-container">
            <button
              className="button"
              type="button"
              onClick={this.onClickEatMangoButton}
            >
              Eat Mango
            </button>
            <button
              className="button"
              type="button"
              onClick={this.onClickEatBananaButton}
            >
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
