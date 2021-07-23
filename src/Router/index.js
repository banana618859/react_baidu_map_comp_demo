/*
 * @Descripttion: unTitle
 * @Author: yizheng.yuan
 * @Date: 2021-07-23 09:00:56
 * @LastEditors: yizheng.yuan
 * @LastEditTime: 2021-07-23 19:45:01
 */
import React from 'react';
import {HashRouter,Route,Switch,Redirect,Link} from 'react-router-dom';
import { createHashHistory } from "history";

// 组件
import Recommend from '../pages/recommend/index';
import Report from '../pages/incineration/report';
import Incineration from '../pages/incineration/index';

import BaiduMap from '../pages/BaiduMap/index';



const history = createHashHistory();

class RouterConfig extends React.Component{
    render(){
        return(
            
            <HashRouter>
              <div style={{height:"50px",lineHeight: "50px"}}>
                <Link to="/Incineration" className="mg-l20">Incineration</Link>
                <Link to="/Report" className="mg-l20">Report</Link>
                <Link to="/BaiduMap" className="mg-l20">BaiduMap</Link>
              </div>
              <Switch>
                  <Redirect exact from="/" to="/Report" />
                  <Route path='/Incineration' component={Incineration}/>
                  <Route path='/Report' component={Report}/>
                  <Route path='/BaiduMap' component={BaiduMap}/>
              </Switch>

              <style>
                {/* 在这写样式 */}
                {`
                  .mg-l20 {
                    margin-left: 20px;
                  }
                `}
              </style>
            </HashRouter>
        )
    }
}
export default RouterConfig;