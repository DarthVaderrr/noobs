import React from 'react';
import Staffs from './comps/Staffs' //装备属性+合成路线
import Heros from './comps/Heros'//英雄技能+所属种族+出现时机
import RaceEffets from './comps/RaceEffets'//羁绊属性+组合方式
function App() {
  return (
    <React.Fragment>
      <Heros/>
      <Staffs />
      <RaceEffets />
    </React.Fragment>
  );
}

export default App;
