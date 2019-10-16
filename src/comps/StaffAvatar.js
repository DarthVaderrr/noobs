import React from 'react'
import './StaffAvatar.css'
export default class StaffAvatar extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return (<img className='staff-avatar' src={this.props.img} alt={this.props.id}/>)
    }
}