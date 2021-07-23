import React from 'react';
import { Button } from 'antd-mobile';
import { reqVideo } from '../../api';

class Video extends React.Component {
    state = {
        httpIp: null,
        httpPort: null,
        list: [],
    }

    async componentDidMount() {
        // eslint-disable-next-line no-undef
        this.player = new TcPlayer('id_test_video', {
            "m3u8": "http://112.6.36.78:83/openUrl/dzWJS6s/live.m3u8", //请替换成实际可用的播放地址
            "autoplay" : true,      //iOS 下 safari 浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
            "poster" : "http://www.test.com/myimage.jpg",
            "width" :  '100%',
            "height" : '100%'
        });

        const result = await reqVideo(297818);
        const {httpIp, httpPort, list} = result.data;
        
        const url = `http://${httpIp}:${httpPort}/live/cameraid/${list[0].number}%24${list[0].channelNumber}/substream/${list[0].byteType}.m3u8`

        this.setState (
            {
                httpIp: httpIp,
                httpPort: httpPort,
                list: list,
            }
        )
        
        this.player.load(url);
        this.player.play();
        // 打开页面即加载

    }

    setUrl= (v1, v2, v3) => {
        const url = `http://${this.state.httpIp}:${this.state.httpPort}/live/cameraid/${v1}%24${v2}/substream/${v3}.m3u8`
        this.player.load(url);
        this.player.play();
        // 切换按钮，更换视频
    }

    componentWillUnmount() {
        this.player.destory();
        // 结束播放
    }

    

    render() {
        return( 
            <div>
                <div id="id_test_video" style={{width:"100%", height:"auto"}}></div>
                <div className="choose">
                    {
                        this.state.list.map (
                            (item, index) => {
                                return (
                                    <Button type="primary" inline size="small" onClick={() => this.setUrl(item.number, item.channelNumber, item.byteType)}>
                                        {item.position}
                                    </Button>
                                )
                            }
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Video;