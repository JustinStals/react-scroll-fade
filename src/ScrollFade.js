import React, { Component } from 'react'
import './ScrollFade.css'

class ScrollFade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        'One',
        'Two',
        'Three',
        'Four',
        'Five',
        'Six',
        'Seven',
        'Eight',
        'Nine',
        'Ten',
        'Eleven',
        'Twelve',
        'Thirteen',
        'Fourteen',
        'Fifteen',
        'Sixteen',
        'Seventeen',
        'Eighteen',
        'Nineteen',
        'Twenty'
      ],
      scrolled: 0
    } 
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const scrolled = winScroll / height

    this.setState({
      scrolled: scrolled,
    })
  }

  render() {

    let items = this.state.items;
    let numItems = this.state.items.length - 1;
    let scrolled = this.state.scrolled;

    return (
      <div className="container" >
        <ul className="scroll-fade" onScroll={console.log('Hi.')}>
          { items && items.map((item, index) => {
            let size = (index - scrolled);
            let position = (index / numItems);
            let opacity = 1 - Math.abs(position - scrolled) * 4
            let scale = "scale(" + (1 - Math.abs(position - scrolled) * 1.25) + ")"
            
            return (
              <li key={index} style={{opacity: opacity, transform: scale}}>
                <a href="/">{ item }<span>LOREM IPSUM SCROLL FADE</span></a>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default ScrollFade
