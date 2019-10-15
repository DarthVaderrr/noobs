import React from 'react'
import './Staffs.css'
import Staff from './Staff'
export default class Staffs extends React.Component{
    constructor(props){
        super(props);
        //type: 攻击/防御  type2:物理/魔法
        this.state={
            staffs:[
                {
                    id:0,
                    name:'无尽之刃',
                    img:'',
                    props:{
                        '攻击力':20,
                        '暴击率':'25%',
                        '暴击伤害':'150%'
                    },
                    skills:{
                        '被动':'暴击率+25%,暴击伤害+150%',
                        '被动':'敌人发动技能时,其自身收到125点真实伤害'
                    },
                    type:'攻击',
                    type2:'物理',
                    need:[1,2],//合成路线
                    isCompleted:true //是否神装
                },
                {
                    id:1,
                    name:'暴风大剑',
                    img:'',
                    type:'攻击',
                    type2:'物理',
                    props:{
                        '攻击力':15
                    }
                },
                {
                    id:2,
                    name:'暴击手套',
                    img:'',
                    type:'攻击',
                    type2:'物理',
                    props:{
                        '回避率':'10%',
                        '暴击率':'10%'
                    }
                },
                {
                    id:3,
                    name:'灭世法帽',
                    img:'',
                    type:'攻击',
                    type2:'魔法',
                    props:{
                        '法强':'150'
                    },
                    need:[4,4],
                    isCompleted:true

                },
                {
                    id:4,
                    name:'无用大棒',
                    img:'',
                    type:'攻击',
                    type2:'魔法',
                    props:{
                        '法强':30
                    }
                }
            ]
        }
    }
    render(){
        const data=this.state.staffs;
        return (<div className='wf'>
            {data.map(i=><Staff key={i.id} data={i}/>)}
            </div>)
    }
}