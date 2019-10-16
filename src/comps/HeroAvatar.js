import React from 'react'
import './HeroAvatar.css'
export default class Hero extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    render(){
        // const id=this.props.id;
        const img=this.props.img
        return (<div className='hero'>
        <div className='avatar' style={{ backgroundImage: `url(${img})` }}></div>
    </div>)
    }
}