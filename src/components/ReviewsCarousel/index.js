// Write your code here
import './index.css'
import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state
    if (count < 3) {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
  }

  onDecrement = () => {
    const {count} = this.state
    if (count >= 1) {
      this.setState(prevState => ({count: prevState.count - 1}))
    }
  }

  render() {
    const {count} = this.state
    const {reviewsData} = this.props
    const {imgUrl, companyName, description, username} = reviewsData[count]
    return (
      <div className="bg-container">
        <div>
          <h1 className="heading-1">Reviews</h1>
          <div className="img-person">
            <img
              className="img-style"
              src={imgUrl}
              alt={`${username}-avatar`}
            />
          </div>
          <div className="img-person">
            <div className="arrows-content-container">
              <button
                type="button"
                className="btn-style"
                onClick={this.onDecrement}
                testid="leftArrow"
              >
                <img
                  className="img-arrows"
                  src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                  alt="left-arrow"
                />
              </button>
              <p className="person-name">{username}</p>
              <button
                type="button"
                className="btn-style"
                onClick={this.onIncrement}
                testid="rightArrow"
              >
                <img
                  className="img-arrows"
                  src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                  alt="right-arrow"
                />
              </button>
            </div>
          </div>
          <div>
            <p className="paragraph">{companyName}</p>
            <p className="paragraph">{description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
