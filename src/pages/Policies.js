import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import NavigationBar from '../pages/navigationBar';
import Popup from '../component/poup';
import '../style/policies.css';


const data=[
    { url: "https://www.zj.gov.cn/art/2022/7/22/art_1229603977_59730598.html",title: "浙江全力打造数字乡村引领区——数智，让乡村未来更有“范儿”", src: "浙江省人民政府门户网站-浙江在行动", time: "2022-07-22" },
    { url:"https://search.zj.gov.cn/jsearchfront/visit/link.do?url=http%3A%2F%2Fwww.zj.gov.cn%2Fart%2F2022%2F3%2F8%2Fart_1229616937_59679425.html&q=%E4%B9%A1%E6%9D%91&websiteid=330000000000000&title=%E6%B5%99%E6%B1%9F%E4%BB%A3%E8%A1%A8%E5%9B%A2%E5%88%86%E7%BB%84%E5%AE%A1%E8%AE%AE%E7%8E%B0%E5%9C%BA%20%E4%B9%A1%E6%9D%91%E5%BC%95%E6%89%8D%E5%BC%95%E5%8F%91%E4%BB%A3%E8%A1%A8%E7%83%AD%E8%AE%AE%EF%BC%9A%E5%B9%B4%E8%BD%BB%E4%BA%BA%EF%BC%8C%E4%B9%A1%E6%9D%91%E8%AF%B7%E4%BD%A0%E7%95%99%E4%B8%8B%E6%9D%A5",title: "浙江代表团分组审议现场 乡村引才引发代表热议: 年轻人，乡村请你留下来", src: "浙江省人民政府门户网站 -浙江声音 (代表之声)", time: "2022-03-08" },
    { url:"https://search.zj.gov.cn/jsearchfront/visit/link.do?url=http%3A%2F%2Fwww.zj.gov.cn%2Fart%2F2022%2F9%2F20%2Fart_1229603979_59827469.html&q=%E4%B9%A1%E6%9D%91&websiteid=330000000000000&title=%E5%8F%B0%E5%B7%9E%EF%BC%9A%E6%8E%A8%E8%BF%9B%E6%95%B0%E5%AD%97%E5%8C%96%E5%BB%BA%E8%AE%BE%20%E5%8A%A9%E6%8E%A8%E4%B9%A1%E6%9D%91%E6%8C%AF%E5%85%B4",title: "台州: 推进数字化建设 助推乡村振兴", src: "浙江省人民政府门户网站 -我身边的数字化改革", time: "2022-09-20" },
    { url:"https://search.zj.gov.cn/jsearchfront/visit/link.do?url=http%3A%2F%2Fwww.zj.gov.cn%2Fart%2F2021%2F11%2F17%2Fart_1229574491_59161225.html&q=%E4%B9%A1%E6%9D%91&websiteid=330000000000000&title=%E6%88%91%E7%9C%81%E2%80%9C%E5%8D%81%E5%9B%9B%E4%BA%94%E2%80%9D%E6%9C%9F%E9%97%B4%E8%A6%81%E8%AE%A9%E4%B9%A1%E6%9D%91%E6%9B%B4%E7%BE%8E%E6%9B%B4%E5%AF%8C%20%20%E2%80%9C%E4%BA%94%E6%9C%B5%E9%87%91%E8%8A%B1%E2%80%9D%E5%90%84%E7%BE%8E%E5%85%B6%E7%BE%8E%20%E7%BE%8E%E4%B8%BD%E4%B9%A1%E6%9D%91%E6%8A%B1%E5%9B%A2%E5%85%B1%E5%AF%8C",title: "我省“十四五”期间要让乡村更美更富“五朵金花”各美其美 美丽乡村抱团共富", src: "浙江省人民政府门户网站 -协同推进新型城镇化和乡村振兴", time: "2021-11-17" },
    { url:"https://search.zj.gov.cn/jsearchfront/visit/link.do?url=http%3A%2F%2Fwww.zj.gov.cn%2Fart%2F2023%2F6%2F2%2Fart_1229603979_60133852.html&q=%E4%B9%A1%E6%9D%91&websiteid=330000000000000&title=%E4%B9%A1%E6%9D%91%E6%B2%BB%E7%90%86%E6%95%B0%E5%AD%97%E5%8C%96%E5%93%AA%E5%AE%B6%E5%BC%BA%EF%BC%9F%E5%B9%B3%E6%B9%96%E6%8B%BF%E4%B8%8B%E5%85%A8%E5%9B%BD%E7%AC%AC%E4%BA%94",title: "乡村治理数字化哪家强? 平湖拿下全国第五", src: "浙江省人民政府门户网站 -我身边的数字化改革", time: "2023-06-02" },
    { url:"https://search.zj.gov.cn/jsearchfront/visit/link.do?url=http%3A%2F%2Fwww.zj.gov.cn%2Fart%2F2021%2F3%2F9%2Fart_1229497795_59085869.html&q=%E4%B9%A1%E6%9D%91&websiteid=330000000000000&title=%E5%A5%94%E5%90%91%E5%85%B1%E5%90%8C%E5%AF%8C%E8%A3%95%E6%96%B0%E7%94%9F%E6%B4%BB%20%E4%BB%A3%E8%A1%A8%E5%A7%94%E5%91%98%E7%83%AD%E8%AE%AE%E5%85%A8%E9%9D%A2%E6%8E%A8%E8%BF%9B%E4%B9%A1%E6%9D%91%E6%8C%AF%E5%85%B4",title: "奔向共同富裕新生活 代表委员热议全面推进乡村振兴", src: "浙江省人民政府门户网站 -两会云客厅", time: "2021-03-09" },
];

function Part ({url,title,src,time}){
    return(
    <div className='part'>
        <h3>
            <a href={url} style={{textDecoration: "none",color: "#333"}}>
            {title}
            </a>
        </h3>
        <p className='src'>来源：{src}</p>
        <p className='time'>时间：{time}</p>
        
    </div>
);}


const Policies = () => (
    <>
        <NavigationBar/>
        <br/>
        <div className='mainbox1'>
        <hr></hr>
        {data.map((item,index)=>(
            <>
            <Part key={index} {...item}/>
            <hr/>
            </>
        ))}
    
        </div>
        
    </>
);

export default Policies;