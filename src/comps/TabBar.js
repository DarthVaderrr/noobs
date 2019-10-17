import React from 'react'
import './TabBar.css'
export default class TabBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        let cur=this.props.currentTab
        return (<div className='nav align between'>
            <div className={'link'+ (cur==='hero'?' active':'')} onTouchEnd={this.switchTab.bind(this,'hero')} to='hero'>英雄</div>
            <div className={'link'+ (cur==='staff'?' active':'')}  onTouchEnd={this.switchTab.bind(this,'staff')} to='staff'>物品</div>
            <div className={'link'+ (cur==='race'?' active':'')}  onTouchEnd={this.switchTab.bind(this,'race')} to='race'>羁绊</div>
        </div>)
    }
    switchTab(tab){
        this.props.onSwitch(tab)
    }
}