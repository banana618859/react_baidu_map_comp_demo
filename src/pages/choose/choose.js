import React from 'react';
import { Picker, List, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
import arrayTreeFilter from 'array-tree-filter';
import './choose.css';

const seasons = [
  [
    {
      label: '标题1',
      value: '标题1',
    },
    {
      label: '标题2',
      value: '标题2',
    },
  ]
];

class Test extends React.Component {
  state = {
    sValue: ['标题1'],
  };

  render() {
    return (<div>
      <WhiteSpace size="lg" />
      <List style={{ backgroundColor: 'white' }} className="picker-list">
        <Picker
          data={seasons}
          title="选择标题"
          cascade={false}
          extra="请选择(可选)"
          value={this.state.sValue}
          onChange={v => this.setState({ sValue: v })}
          onOk={v => this.setState({ sValue: v })}
        >
          <List.Item arrow="horizontal">请选择标题</List.Item>
        </Picker>
      </List>
    </div>);
  }
}


export default Test;