import React from 'react'
import style from './Description.module.css'

export default function Description() {
  return (
    <div>
      <h1 className={style.title}>What is this website?</h1>

      <img src="" alt="" />
      <p className={style.description}>My name is Alejandro Villamayor and this is my portfolio, I was born in Villa Allende in Cordoba, Argentina. I remember as a child watching videos of myself on an old VCR of how I played games on the computer like the Lion King of Sega at the age of 4.
      <br />
      I certainly got along with computers to a point that I can't remember when I first learned how to use them. I decided to create this personal portfolio to showcase some of my Fullstack developer skills and also to introduce myself in depth.
      </p>
    </div>
  )
}
