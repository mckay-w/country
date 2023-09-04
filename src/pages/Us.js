/* UTF-8 please */

import React, { useState,useEffect } from 'react';
import'../style/home.css';

import NavigationBar from './navigationBar';


export default function Home({isshow}) {
    const [showhome, setShowHome] = useState(true);
    const [auth,setAuth]=useState(false)
    const handleLinkClick = () => {
        setShowHome(false);
    };

    useEffect(() => {
        setShowHome(true);
    }, []);

    return (
        <div > 
            { showhome && (
            <div class="mainbox" replace>
                <div class="blank"></div>
                <NavigationBar/>
            </div>
            )
            }
            
            
        </div>
    );
  }
