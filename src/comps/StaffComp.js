import React from 'react'
import './StaffComp.css'
export default class StaffComp extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        const data=this.props.data
        const currentComp=this.props.currentComp
        return (<div className={'staff-comp-item'+(currentComp===data.id?' current-comp':'')} onTouchEnd={this.showIntStaff.bind(this,data.id)}>
            <img className='staff-comp-icon' src={data.img} alt="staff"/>
            </div>)
    }

    showIntStaff(id){
        this.props.onShowIntStaff(id)
    }
}