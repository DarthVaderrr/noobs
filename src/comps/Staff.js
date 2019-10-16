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

            <div className='staff-info wf align'>
                <div className='staff-need'>
                    {data.need ? data.need.map((i, index) => <StaffAvatar key={index} img={i} />) : <StaffAvatar img={data.img} />}
                </div>
                <div className='staff-skill column'>
                    <span className='staff-name'>{data.name}</span>
                    <div className='wf'>
                        {data.info.map((i, index) => <div key={index}>{i}</div>)}
                    </div>
                </div>
            </div>
        </div>)
    }
    componentDidMount() {
        // console.log(this.props.data)
    }
}