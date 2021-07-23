/*
 * @Descripttion: unTitle
 * @Author: yizheng.yuan
 * @Date: 2021-07-23 09:00:56
 * @LastEditors: yizheng.yuan
 * @LastEditTime: 2021-07-23 09:13:15
 */
import React from 'react';
import RouterConfig from './Router/index.js';
import './App.css';
import 'antd-mobile/dist/antd-mobile.css';
import Incineration from './pages/incineration/index';
import Test from './pages/choose/choose';
//import Report from './pages/incineration/report/index';

function App() {
    return(
      // `<div>hello</div>`
      //<Incineration></Incineration>
      <RouterConfig/>
      //<Test></Test>
    )
}

export default App;