import'../style/navigationBar.css';
import React, { useState, useEffect, useRef } from 'react';

const NavigationBar=()=>{
    return (
        <ul>
            <li><a href="/">主页</a></li>
            <li><a href="/interview">采访专栏</a></li>
            <li><a href="/digitalvillage">数字乡村</a></li>
            <li><a href="/policies">政策集锦</a></li>
            <li><a href="/merchant">产业联盟</a></li>
            <li><a href="/us">关于我们</a></li>
        </ul>
    )
}

export default NavigationBar;