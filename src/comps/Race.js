import React from 'react'
import './Race.css'
export default class Race extends React.Component{
    constructor(props){
        super(props);
        this.state={
            active:false
        }
    }
    render(){
        const props=this.props;
        const imgs=global.configData.icons[props.id];
        let img= this.state.active?imgs.active:imgs.default;
        return (<div className='race-item center' onTouchEnd={this.swichRace.bind(this)}>
            <img className='race-icon' alt='icon' src={img}></img>
            </div>)
    }
    swichRace(){
       let race=this.props.data.name;
        this.setState({
            active:!this.state.active
        })  
        this.props.onAddFilter(race)
    }
}