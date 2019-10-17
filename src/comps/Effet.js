import React from 'react'
import './Effet.css'
export default class Effet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const data = this.props.data;
        return (<div>
            <h2 className='race-name align'>
                <div className='race-item center'>
                    <img src={this.props.icon} alt="" />
                </div>
                {data.name}
            </h2>
            <div className='ctx'>
                <div className='desc-container wf'>
                    效果: {data.effet}
                    <br /><br />
                    卡片数量: {data.number}
                </div>
            </div>
            <div className='line'></div>
        </div>)
    }
    componentDidMount() {
    }
}