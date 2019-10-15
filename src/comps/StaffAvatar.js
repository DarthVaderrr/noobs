import React from 'react'
import './StaffAvatar.css'
export default class StaffAvatar extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return (<img className='staff-avatar' src="/staff/无尽.png" alt={this.props.id}/>)
    }
}