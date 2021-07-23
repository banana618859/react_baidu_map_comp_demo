import React from 'react';

class BaiduMap extends React.Component {
  render() {
      return(
        <div>
            <h3>百度地图</h3>
            <hr/>
            <div id="container" style={{width:'100%',height:'400px',border:'1px solid red'}}></div>
        </div>
      )
  }
  componentDidMount() {
    console.error('页面加载完成',this);
    let that = this;
    setTimeout(() => {
      this.MP('NmfCIrNZD29GgyaKXBR5awpIm15XVAGP').then((BMap) => {
        console.error('回调', BMap);
        const map = new BMap.Map('container');
        console.log('map', map);
        let new_point = new BMap.Point(113.327212, 23.139973)
        map.centerAndZoom(new_point, 12); // 初始化地图,设置中心点坐标和地图级别
        map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放

        // 创建点标记
        
        const marker1 = new BMap.Marker(new_point);
        // 在地图上添加点标记
        map.addOverlay(marker1);
        // map.setHeading(64.5);
        // map.setTilt(73);

        // 添加控件
        const top_left_control = new BMap.ScaleControl({ anchor: BMAP_ANCHOR_TOP_LEFT });// 左上角，添加比例尺
        const top_left_navigation = new BMap.NavigationControl(); // 左上角，添加默认缩放平移控件
        const top_right_navigation = new BMap.NavigationControl({ anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_ZOOM }); // 右上角，仅包含平移和缩放按钮
        /* 缩放控件type有四种类型:
        BMAP_NAVIGATION_CONTROL_SMALL：仅包含平移和缩放按钮；BMAP_NAVIGATION_CONTROL_PAN:仅包含平移按钮；BMAP_NAVIGATION_CONTROL_ZOOM：仅包含缩放按钮 */

        // 添加控件和比例尺
        map.addControl(top_left_control);
        // map.addControl(top_left_navigation);
        map.addControl(top_right_navigation);

        //获取当前位置
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function(obj){
            // 回调函数返回值
            console.error('back-obj',obj);
            let now_point = new BMap.Point(obj.point.lng, obj.point.lat)

            if(this.getStatus() == BMAP_STATUS_SUCCESS){
                getAddress(now_point);
                console.log(BMAP_STATUS_SUCCESS)
            }else {
                alert('failed'+this.getStatus());
            }
        });
        //获取地址信息，设置地址label
        function getAddress(point){
            console.log(point);
            var gc = new BMap.Geocoder();
            gc.getLocation(point, function(rs){
                var addComp = rs.addressComponents;
                var address =  addComp.province +  addComp.city + addComp.district + addComp.street + addComp.streetNumber;//获取地址
                console.log('address', rs, address);
                // alert(address);
                // 获取到地址后，跳转回去
                setTimeout(()=>{
                  that.props.history.push({
                    pathname: '/Report',
                    data: address
                  })
                },2000)
            });
        }
        // 原文链接：https://blog.csdn.net/zhh830619/article/details/84958136

      });
    });

  }

  MP(ak) {
    return new Promise(((resolve, reject) => {
      if (!window.BMap) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = `http://api.map.baidu.com/api?v=2.0&ak=${ak}&callback=init`;
        script.onerror = reject;
        document.head.appendChild(script);
        console.error('window.BMap', window.BMap);
        setTimeout(() => {
          resolve(window.BMap);
        }, 1000); // 这里延迟1秒是关键，要不显示不出来
      } else {
        resolve(window.BMap);
      }
    }));
  }
}
export default BaiduMap;