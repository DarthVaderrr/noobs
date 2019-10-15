import React from 'react'
import './RaceEffets.css'
import Effet from './Effet.js'
export default class RaceEffets extends React.Component{
    constructor(props){
        super(props);
        this.state={
            groups:[
                {
                    id:101,
                    name:'剑士',
                    effet:'增加攻击次数 1/2/3',
                    number:'3+/6+/9+',
                    heros:[1,2,3,4,5,6,7,8,9]
                },
                {
                    id:102,
                    name:'骑士',
                    effet:'增加旁边队友护盾30/60/90',//羁绊效果
                    number:'3+/6+/9+',//英雄数量
                    heros:[10,11,12,13,14]//英雄池
                }
            ],
            mix:[ //可以产生的混搭
                {
                    id:100,
                    room:4,//人口
                    heros:[1,2,11,12],//英雄组合  如:3约2法
                    effets:[101,102]//产生的羁绊效果
                }
            ]
        }
    }
    render(){
        return (<div>
            {this.state.groups.map(i=><Effet data={i} key={i.id}/>)}
            </div>)
    }
}