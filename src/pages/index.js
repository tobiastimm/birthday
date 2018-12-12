import React, { Component } from 'react'

import Confetti from 'react-confetti'
import sizeMe from 'react-sizeme'

import Layout from '../components/layout'
import SEO from '../components/seo'
import './index.scss'

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.canvas = React.createRef()
  }

  state = {
    isOpen: false,
  }

  togglePresent = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { isOpen } = this.state

    return (
      <Layout>
        <SEO
          title="Happy Birthday Tatjana!"
          keywords={['Birthday', 'Present']}
        />
        <Confetti height={1000} width={1000} />
        <div
          className={isOpen ? 'present open' : 'present'}
          onClick={this.togglePresent}
        >
          <div className="name">
            Ich wünsche dir alles Gute <br /> zum Geburtstag <br /> Halte dir
            den 23.02.2019 frei! <br /> Tobi ;)
          </div>
          <div className="rotate-container">
            <div className="bottom" />
            <div className="front" />
            <div className="left" />
            <div className="back" />
            <div className="right" />

            <div className="lid">
              <div className="lid-top" />
              <div className="lid-front" />
              <div className="lid-left" />
              <div className="lid-back" />
              <div className="lid-right" />
            </div>
          </div>

          <div className="instruction">Touch to open!</div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
