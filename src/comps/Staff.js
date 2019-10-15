import React from 'react'
import './Staff.css'
import StaffAvatar from './StaffAvatar'
export default class Staff extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const data = this.props.data;
        return (<div className='staff-container wf'>
            <div className='staff wf align'>
                <img src="/staff/无尽.png" className='staff-img' alt="" />
                <div className='staff-desc'>
                    {this.showProps(data.props)}
                </div>
            </div>
            <div className='staff-info wf align'>
                <div className='staff-skill column'>
                    <span className='staff-name'>{data.name}</span>
                    <div className='wf'>
                        {data.skills?this.showSkills(data.skills):null}
                    </div>
                </div>
               <div className='staff-need'>
                   {data.isCompleted ? data.need.map((i,index)=><StaffAvatar key={index} id={i} />) :null}
               </div>

            </div>
        </div>)
    }
    componentDidMount() {
        console.log(this.props.data)
    }
    showProps(data) {
        let arr = [];
        let k=0;
        for (let i in data) {
            arr.push(<span key={k++}>{i}:{data[i]}</span>)
        }
        return arr;
    }
    showSkills(data){
        let arr=[];
        let k=0;
        for(let i in data){
            arr.push(<div key={k++}>{i}:{data[i]}</div>)
        }
        return arr;
    }
}