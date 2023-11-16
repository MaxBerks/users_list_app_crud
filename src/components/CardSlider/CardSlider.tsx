import React from 'react'
import "./CardSlider.scss"
import Card from '../Card/Card'

export default function Cards() {
  return (
    <div className='cardSlider'>
      <Card isCenter={false} name="Janet Weaver" email="janet.weaver@reqres.in" photoURL="./../../assets/photos/photo.jpg"/>
      <Card isCenter={true} name="Janet Weaver" email="janet.weaver@reqres.in" photoURL="./../../assets/photos/photo.jpg"/>
      <Card isCenter={false} name="Janet Weaver" email="janet.weaver@reqres.in" photoURL="./../../assets/photos/photo.jpg"/>
    </div>
  )
}
