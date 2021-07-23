import React from 'react';
import '../report/report.css';
import {Button, ImagePicker, Icon, List, InputItem, Card, TextareaItem } from 'antd-mobile';
import Test from '../../choose/choose';
import pecil from '../images/pecil.png';
import  xing from '../images/xing.png';
import up from '../images/下箭头.png';

const data = [{
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id: '2121',
  }, {
    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    id: '2122',
}];

function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
      if (matchesSelector.call(el, selector)) {
        return el;
      }
      el = el.parentElement;
    }
    return null;
}

class Report extends React.Component {
     
    componentDidMount() {
      // this.autoFocusInst.focus();
      let data = this.props.location.data
      console.error('location',this.props.location.data);
      // 这样修改值
      if(data){
        this.setState({
          detailAddress: data
        })
      }
      
    };
    handleClick = () => {
      this.inputRef.focus();
    };
    
    state = {
        value: null,
        files: data,
        sValue: ['标题1']
    };
    handleGetLocation=()=>{
      this.props.history.push({
        pathname: '/BaiduMap'
      })
    }
  
    onChange = (files, type, index, value) => {
        console.log(files, type, index);
        this.setState({
          files,
          value,
        });
      }
    onSegChange = (e) => {
        const index = e.nativeEvent.selectedSegmentIndex;
        this.setState({
          multiple: index === 1,
        });
    }

    constructor(props) {
        super(props);
        this.state = {
          modal1: false,
          modal2: false,
          detailAddress: 'dd'
        };
    }
    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
          [key]: true,
        });
    }
    onClose = key => () => {
        this.setState({
          [key]: false,
        });
    }
    
    onWrapTouchStart = (e) => {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
          return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
          e.preventDefault();
        }
    }
   
    render() {
        const { files } = this.state;
        const { getFieldProps } = this;
        console.error('getFieldProps',getFieldProps);
        return(
            <div className="sum">
                <div className="title2">
                    生态环境局
                </div>
                <div className="subtitle2">
                    举报与建议
                </div>
                <div className="imgs">
                    <div className="pecil">
                        < img src={pecil}/>
                    </div>
                </div>
                <div className="card">
                <Card>
                    <Card.Body>
                    <List renderHeader={() => ''}>
                    <InputItem
                        // {...getFieldProps('autofocus')}
                        clear
                        ref={el => this.autoFocusInst = el}
                    >乡镇街道
                    <img src={xing}/>
                    </InputItem>
                    {/* <input onClick={this.oneFun} /> */}
                    <InputItem className="address"
                        onClick={this.handleGetLocation}
                        clear
                        value={this.state.detailAddress}
                        placeholder="请填写地址"
                        ref={el => this.inputRef = el}
                    >问题发生地
                    <img src={xing}/>
                    </InputItem>
                    <InputItem
                        // {...getFieldProps('autofocus')}
                        clear
                        ref={el => this.autoFocusInst = el}
                    >举报人</InputItem>
                    <InputItem type="number"
                        // {...getFieldProps('autofocus')}
                        clear
                        ref={el => this.autoFocusInst = el}
                    >联系电话
                    <img src={xing}/>
                    </InputItem>
                    <InputItem  type="number"
                        // {...getFieldProps('autofocus')}
                        clear
                        ref={el => this.autoFocusInst = el}
                    >身份证号</InputItem>
                    </List>
                    </Card.Body>
                </Card>
                </div>
                <div>
                    <Card>
                        <Card.Body>
                            <Test></Test>
                            <List >
                            <TextareaItem
                                // {...getFieldProps('count', {
                                // initialValue: '计数功能,我的意见是...',
                                // })}
                                rows={4}
                                count={20}
                                placeholder="请输入内容&nbsp;&nbsp;&nbsp;&nbsp;为利于意见和建议得到及时处理，请明确填写相关问题的时间地点，事件过程"
                            />
                            </List>
                            <ImagePicker
                            files={files}
                            onChange={this.onChange}
                            onImageClick={(index, fs) => console.log(index, fs)}
                            // selectable={files.length < 7}
                            multiple={this.state.multiple}
                            />
                            <Button className="btn2">提交</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="check">
                    <input className="checkbox" type="checkbox" />
                    <div className="title3">保密个人信息（注： 如选择保密，可能会影响你反应的问题的解决效果。）</div>
                </div>
                <div className="check">
                    <input className="checkbox" type="checkbox" />
                    <dov className="title3">同意公开举报内容</dov>
                </div>
            </div>
        )
    }
}
export default Report;