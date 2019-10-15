import React from 'react'
import './Effet.css'
import Hero from './Hero'
export default class Effet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const data = this.props.data;
        return (<div>
            <h2 className='race-name align'>
                {data.name}
                <img src="/img/云顶之弈_剑士.png" className='icon' alt="" />
            </h2>
            <div className='ctx'>
                <div className='hero-container wh'>
                    {data.heros.map(i => <Hero id={i} key={i}/>)}
                </div>
                <div className='desc-container wh'>
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