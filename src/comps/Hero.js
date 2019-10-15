import React from 'react'
import './Hero.css'
export default class Hero extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:props.id
        }
    }
    render(){
        return (<div className='hero'>
        <div className='avatar' style={{ backgroundImage: 'url("/avatar/bobi.jpg")' }}></div>
    </div>)
    }
}