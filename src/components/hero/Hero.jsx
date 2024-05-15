import React from 'react'
import classes from './hero.module.css'

const Hero = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>Find your books here</h2>
        <p className={classes.desc}>
        </p>
        <div className={classes.inputContainer}>
          <input type="text"  placeholder="Lord Of The Rings" />
          <button>Search</button>
        </div>
      </div>
    </div>
  )
}

export default Hero