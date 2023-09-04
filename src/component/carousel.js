import React, { useState, useEffect } from 'react';
import '../style/carousel.css'; // 导入样式表

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timerInterval, setTimerInterval] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 2000);

    setTimerInterval(timer);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleMouseEnter = () => {
    clearInterval(timerInterval);
  };

  const handleMouseLeave = () => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 2000);

    setTimerInterval(timer);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const renderImages = () => {
    const images = [
      "https://ts1.cn.mm.bing.net/th/id/R-C.a96c0cc66f675d2ec880ac15c5c34561?rik=ZR14I9eStSOK%2fQ&riu=http%3a%2f%2fp6.itc.cn%2fimages01%2f20200524%2f07fd9be1a6334bdda4edc1cd4c91c73b.jpeg&ehk=YGjCEK4c9%2fjyrYivqRA8sTCQ71FEI8SJHOkY7%2fKMSj8%3d&risl=&pid=ImgRaw&r=0",
      "https://ts1.cn.mm.bing.net/th/id/R-C.550fe630361fe5b3b086cf18d492d930?rik=u1Xux2CfQszJuA&riu=http%3a%2f%2fxczx.lwcj.com%2fuploads%2fallimg%2f191105%2f1556264Z8-2.jpg&ehk=pV51lvaZkbm%2fk2qrDA8wBhBFKODkKR7V988cTN8BK3I%3d&risl=&pid=ImgRaw&r=0",
      "https://img2.gujianchina.cn/201909/23/1526068037699.png",
      "https://tse4-mm.cn.bing.net/th/id/OIP-C.tKr-bEhIXgXEENJowaDUQAHaE2?pid=ImgDet&w=745&h=488&rs=1",
      "https://ts1.cn.mm.bing.net/th/id/R-C.554ddf32c10a7e358de4e72a9e2aab29?rik=rUFpAcvqDEXWAQ&riu=http%3a%2f%2fb.zol-img.com.cn%2fdesk%2fbizhi%2fimage%2f5%2f960x600%2f1415066374951.jpg&ehk=7nMCibXEXeBsB4g13sdyCHU1omjRfR5x1SUI7%2fewMYk%3d&risl=&pid=ImgRaw&r=0"
    ];

    return images.map((image, index) => (
      <ul>
        <li key={2}  style={{ opacity: currentIndex === index ? 1 : 0 }}>
          <img src={image} alt="" />
        </li>
        <li key={2}  style={{ opacity: currentIndex === index ? 1 : 0 }}>
          <img src={image} alt="" style={{marginLeft:"0px"}}/>
        </li>
      </ul>
    ));
  };

  const getOpacity = (imageIndex,length) => {
    const prevIndex = (imageIndex + length - 1) % length;
    const nextIndex = (imageIndex + 1) % length;
  
    if (currentIndex === prevIndex) {
      return 1;
    } else if (currentIndex===imageIndex) {
      return 2;
    } else if (currentIndex === nextIndex) {
      return 3;
    } else {
      return 0;
    }
  };

  const renderDots = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <li
        key={index}
        style={{
          backgroundColor: currentIndex === index ? '#ffffff' : '#00000000',
        }}
        onClick={() => handleDotClick(index)}
      ></li>
    ));
  };

  return (
    <div id="max">
      <div className="re" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ul>{renderImages()}</ul>
        <ol>{renderDots()}</ol>
      </div>
    </div>
  );
};

export default Carousel;
