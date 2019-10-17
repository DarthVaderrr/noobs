import React from 'react'
import './StaffAvatar.css'
export default class StaffAvatar extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        let id=this.props.id;
        return (<img className='staff-avatar' src={this.getImg(id)} alt={this.props.id}/>)
    }
    getImg(id){
        let comps=global.configData.staffComp;
        for(let i of comps){
            if(i.id===id) return i.img
        }
    }
}