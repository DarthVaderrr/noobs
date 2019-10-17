import React from 'react';
import Index from './comps/Index';
// import { BrowserRouter, Route, Switch } from "react-router-dom";
//使用路由切换体验太烂了  会销毁组件  而我希望它们keep-alive
// import './App.css'
// function App() {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route path='/' exact component={Staffs}/>
//         <Route path='/hero' component={Heros} />
//         <Route path='/staff' component={Staffs} />
//         <Route path='/race' component={RaceEffets} />
//       </Switch>
//       <Index/>
//     </BrowserRouter>
//   );
// }
function App(){
  console.log('本项目的github仓库地址:https://github.com/DarthVaderrr/noobs')
  return (<Index/>)
}

export default App;
