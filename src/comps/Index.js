import React from 'react'
import Staffs from './Staffs' //装备属性+合成路线
import Heros from './Heros'//英雄技能+所属种族+出现时机
import RaceEffets from './RaceEffets'//羁绊属性+组合方式
import TabBar from './TabBar'
import './Index.css'
export default class Index extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentTab:'staff'
        }
    }
    render(){
        let currentTab=this.state.currentTab;
        return (
            <React.Fragment>
            <div className='app-container'>
              <Heros currentTab={currentTab}/>
              <Staffs currentTab={currentTab}/>
              <RaceEffets currentTab={currentTab}/>
            </div>
            <TabBar currentTab={currentTab} onSwitch={this.switchTab.bind(this)}/>
          </React.Fragment>
        )
    }
    switchTab(tab){
        this.setState({
            currentTab:tab
        })
    }
}