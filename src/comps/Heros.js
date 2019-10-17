import React from 'react'
import './Heros.css'
import Hero from './Hero'
import Race from './Race'
export default class Heros extends React.Component {
    constructor(props) {
        super(props);
        let list=global.configData.heros.sort((a,b)=>a.price-b.price)
        this.initList=list;
        this.state = {
            heroList:list,
            filters:new Set(),
        }
    }
    render() {
    const race = global.configData.races;
    const pros = global.configData.pros;
    const props=this.props;
    const name='hero'
        return (<div className='route-container column' style={{display:props.currentTab===name?'flex':'none'}}>
            <div className='hero-list'>
                {this.state.heroList.map(i=><Hero key={i.id} id={i.id} data={i}/>)}
            </div>
            <div className='race-list'>
                {race.map(
                    (item, index) =>
                        <Race onAddFilter={this.onAddFilter.bind(this)} data={item} key={item.id} id={item.id}>
                        </Race>)}
            </div>
                {/*上面是种族  下面的职业*/}
            <div className='race-list'>
                {pros.map(
                    (item, index) =>
                        <Race onAddFilter={this.onAddFilter.bind(this)} data={item} key={item.id} id={item.id}>
                        </Race>)}
            </div>
        </div>)
    }

    onAddFilter(name){
        let filters=this.state.filters;
        if(filters.has(name)) filters.delete(name)
        else filters.add(name);//filters是一个set
        const list=this.initList;
        //增加或移除职业筛选
        this.setState({
            heroList:list.filter(i=>{
                for(let item of filters){
                    if(!i.pro[item]) return false
                }
                return true
            }),
            filters
        })
    }
}