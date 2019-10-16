import React from 'react'
import './RaceEffets.css'
import Effet from './Effet.js'
export default class RaceEffets extends React.Component{
    constructor(props){
        super(props);
        this.state={ }
    }
    render(){
  
        return (<div>
            {global.configData.races.concat(global.configData.pros).map(i=><Effet data={i} key={i.id}/>)}
            </div>)
    }
}