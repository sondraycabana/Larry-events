import React from 'react'
import { InfoSection} from '../../Components'
import {homeObjOne}from './Data'
import { Pricing} from '../../Components'


const Home = () => {
    return (
        <>
          
          <InfoSection {...homeObjOne } /> 
          <Pricing />
        
              
        </>
    )
}
export default Home;