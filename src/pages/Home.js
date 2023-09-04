/* UTF-8 please */

import React, { useState,useEffect } from 'react';
import'../style/home.css';
import NavigationBar from './navigationBar';
import Carousel from '../component/carousel';
import Showbox from '../component/showbox';
import ParticlesBg from 'particles-bg'

export default function Home({isshow}) {
    const [showhome, setShowHome] = useState(true);
    const [auth,setAuth]=useState(false)
    const handleLinkClick = () => {
        setShowHome(false);
    };
    const showboxList = [
        {
            imageUrl: 'dachencun/2.png',
            text: '你好，大陈村',
        },
        {
            imageUrl: 'zeguo/2.jpg',
            text: '泽国镇乡村共富之路',
        },
        {
            imageUrl: 'yuniao/2.jpg',
            text: '记玉鸟集实践',
        },
        {
            imageUrl: 'logo192.png',
            text: 'description',
        },
        
      ];

      const showboxpublic={
            altText: 'picture',
            imageSize: '100px' // 可根据需要调整图片大小
      };

    useEffect(() => {
        setShowHome(true);
    }, []);

    return (
        <>
        { showhome && (
        <div class="mainboxbc" replace>
             <div className="mainboxhome" >\
                <br/>
                <NavigationBar />
                <div className='covertext'>
                    <h1>三州同筑乡村梦</h1>
                    <h1 style={{paddingLeft:"25%"}}>百年共络创业情</h1>
                </div>
                <div className="showbox-list">
                    <a href="articles/1">你好，大陈村</a>
                    <a href="articles/2">泽国镇乡村共富之路</a>
                    <a href="articles/3">记玉鸟集实践</a>
                </div>
             </div>
        </div>
        )}
        </>
    );

    /*
    return (
        <div > 
            { showhome && (
            <div class="mainbox" replace>
                <div class="blank"></div>
                <NavigationBar/>
                <br/>
                <br/>
                <ParticlesBg color="#dddfd4" num={10} type="polygon" bg={true} />
                <div className='foo'>
                    <img src="01288c5968878ca8012193a397171.png" style={{width:"300px",height:"300px"}}/>
                    <Carousel />
                    <img src="f99eaf22_E787246_f008ef89.png" style={{width:"300px",height:"300px"}}/>
                </div>
                <br></br>
                <div className="showbox-list">
                    {showboxList.map((showbox, index) => (
                        <Showbox key={index} articleId={index+1} {...showboxpublic} {...showbox}  />
                    ))}
                </div>
            </div>
            )
            }
            
            
        </div>
    );*/
  }
