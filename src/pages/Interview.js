/* UTF-8 please */

import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

import NavigationBar from './navigationBar';

import '../style/interview.css';
import {articles} from '../component/article';





const cardContent=articles.map((item,index)=>(
    {
        article_id:item.id,
        title:item.title,
        description:item.description,
        author:item.author==""?"unkonwn":item.author,
        img:item.cover,
    }
))


function Item({article_id,img,title,description,author}){
    return (
        <div >
            <a href={"articles/"+String(article_id)} className="artibox">
                <img src={img} alt="picture" className='img'/>
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <p style={{ fontSize: '8px' }}>作者： {author}</p>
                </div>
            </a>
        </div>
    );
}

export default function Interview({isshow}) {
    const [showitv, setShowItv] = useState(true);
    const [auth,setAuth]=useState(false)
    const handleLinkClick = () => {
        setShowItv(false);
    };

    useEffect(() => {
        setShowItv(true);
    }, []);


    return (
        <div > 
            { showitv && (
                <div class="mainbox" replace>
                    <div class="blank"></div>
                    <NavigationBar/>
                    <br/>
                    <br/>
                    <div className='foo'>
                    <div style={{display:"flex",flexDirection: "column"}}>
                        {cardContent.map((item,index) => (
                            <Item key={index} {...item}/>
                            
                        ))
                        }
                    </div>
                    <img src="f99eaf22_E787246_f008ef89.png" style={{width:"400px",height:"400px",marginLeft:"-30%"}}/>
                    </div>
                </div>
            )
            }
            
        </div>
    );
  }
