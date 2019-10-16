import React from 'react'
import './Hero.css'
import HeroAvatar from './HeroAvatar'
export default class Hero extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        const id=this.props.id;
        const data=this.props.data;
        return (<div className='hero-container'>
            <HeroAvatar id={id} img={data.img}/>
            <div className='hero-info'>
                <span className='hero-name'>{data.name}</span>
                <span className='hero-price'>{data.price}金币</span>
                <span className='hero-pro'>{data.proArr.join(',')}</span>
                <span className='hero-race'>{data.race}</span>
            </div>
            </div>)
    }
}