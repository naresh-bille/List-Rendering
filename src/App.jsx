import { useState } from 'react'
import Component from './Component'

import Component1 from './Component1'

import Component2 from './Component2'

// import DataJson from '../src/Daatajson/DataJson'
import { DataJson } from './Daatajson/DataJson'

import Images from './Images'

function App() {

  return (
    <>
    <h1> List Rendering example...this project....</h1>
    <Component/>


    <h2> the below items are objects....</h2>
    <Component1/>


    <Component2/>

    <Images name="naresh"/>


     <DataJson/>

    </>
  )
}

export default App
