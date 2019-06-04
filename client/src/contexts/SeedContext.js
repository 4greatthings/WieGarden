import React, { Component } from 'react'

export const nullSeed = {
  author: {},
  tags: [],
}

const SeedContext = React.createContext({
  seed: nullSeed,
  likes: [],
  error: null,
  setError: () => {},
  clearError: () => { },
  setSeed: () => {},
  clearSeed: () => {},
  setLikes: () => {},
  addReview: () => {},
})

export default SeedContext

export class SeedProvider extends Component {
  state = {
    seed: nullSeed,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setSeed = seed => {
    this.setState({ Seed })
  }

  setLikes = likes => {
    this.setState({ likes })
  }

  clearSeed = () => {
    this.setSeed(nullSeed)
    this.setLikes([])
  }

  addReview = review => {
    this.setLikes([
      ...this.state.likes,
      review
    ])
  }

  render() {
    const value = {
      seed: this.state.seed,
      likes: this.state.likes,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setSeed: this.setSeed,
      setLikes: this.setLikes,
      clearSeed: this.clearSeed,
      addReview: this.addReview,
    }
    return (
      <SeedContext.Provider value={value}>
        {this.props.children}
      </SeedContext.Provider>
    )
  }
}
