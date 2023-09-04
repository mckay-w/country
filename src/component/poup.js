import React from 'react';
import ReactDOM from 'react-dom';

const Popup = (props) => {
	const { container } = props;
		
	return ReactDOM.createPortal(
		// 这里可以是dom元素,也可以是react组件,还可以是react节点
		<div>我是弹窗的容器</div>,
		// 将传入的元素/组件/节点,挂载到container下面
		container
	)
}

export default Popup;
