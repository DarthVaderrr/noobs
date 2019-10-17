import React from 'react'
import './Staffs.css'
import Staff from './Staff'
import StaffComp from "./StaffComp";
export default class Staffs extends React.Component {
    constructor(props) {
        super(props);
        const staff = global.configData.staffs;
        this.initList=staff;
        const comp = global.configData.staffComp;
        this.state={
            comp,
            staff,
            currentComp:null
        }
    }
    render() {
        const props=this.props;
        const name='staff';
        return (<div className='route-container column' style={{display:props.currentTab===name?'flex':'none'}}>
            <div className='wf staff-list'>
                {this.state.staff.map(i => <Staff key={i.id} data={i} />)}
            </div>
            <div className='staff-comp-list'>
                {this.state.comp.map(i=><StaffComp currentComp={this.state.currentComp} onShowIntStaff={this.showIntStaff.bind(this)} key={i.id} data={i}/>)}
            </div>
        </div>)
    }
    showIntStaff(id){
        let _this=this;
        if(id===this.state.currentComp) {
            return this.setState({
                currentComp:null,
                staff:_this.initList
            })
        }
        this.setState({
            staff:_this.initList.filter(i=>i.need.includes(id)),
            currentComp:id
        })
    }
}