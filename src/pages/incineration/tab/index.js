import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import  Report from '../report/index';
import './index.css';
import { Tabs, WhiteSpace } from 'antd-mobile';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';
import tel from '../images/tel.png';

function Tab() {
  const tabs = [
    { title: '请选择举报问题类型' },
    { title: '电话举报' },
  ];

  const TabExample = () => (
    <div>
      <WhiteSpace />
      <Tabs tabs={tabs} initialPage={-1} animated={false} useOnPan={false}>
        <div style={{ height: '100%', backgroundColor: '#f0f4f7' }}>
          <ul className="ul">
            <li>
              环保业务类
            </li>
            <Link to={ `/report/`}>
            <li>
              <div className="icon">
                <img src={icon1}/>
              </div>
              <div className="border"></div>
              <div className="title">燃烧秸秆</div>
            </li>
            </Link>
            <li>
              <div className="icon">
                <img src={icon2}/>
              </div>
              <div className="border"></div>
              <div className="title">污水排放</div>
            </li>
          </ul>

          <ul className="ul">
            <li>
              环保业务类
            </li>
            <li>
              <div className="icon">
                <img src={icon3}/>
              </div>
              <div className="border"></div>
              <div className="title">生活垃圾</div>
            </li>
            <li>
              <div className="icon">
                <img src={icon4}/>
              </div>
              <div className="border"></div>
              <div className="title">建筑垃圾</div>
            </li>
          </ul>
          <div className="footer">更多问题分类敬请期待</div>
        </div>
        <div style={{ height: '100%', backgroundColor: '#f0f4f7' }}>
          <div>
            <div className="color">
              <div className="display">
                <div className="icon2">
                  <img src={tel} />
                </div>
                <div><a  href={"tel:" + "0532-099999"}>0532-099999</a></div>
              </div>
              
              <div className="ju">当地举报热线，及时回复您的问题</div>
            </div>
          </div>
          <div className="color2">12369(国家环保局电话)</div>
        </div>
      </Tabs>
      <WhiteSpace />
    </div>
  );
  return (
    <div>
      <TabExample />
    </div> 
  )
}

export default Tab;