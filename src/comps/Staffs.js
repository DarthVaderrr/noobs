import React from 'react'
import './Staffs.css'
import Staff from './Staff'
export default class Staffs extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const data=global.configData.staffs;
        return (<div className='wf'>
            {data.map(i=><Staff key={i.id} data={i}/>)}
            </div>)
    }
}