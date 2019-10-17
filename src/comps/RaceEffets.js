import React from 'react'
import './RaceEffets.css'
import Effet from './Effet.js'
export default class RaceEffets extends React.Component{
    constructor(props){
        super(props);
        this.state={ }
    }
    render(){
        const icons=global.configData.icons;
        const props=this.props
        const name='race'
        return (<div className='column route-container' style={{display:props.currentTab===name?'flex':'none'}}>
            {global.configData.races.concat(global.configData.pros).map(i=><Effet icon={icons[i.id].default} data={i} key={i.id}/>)}
            </div>)
    }
}