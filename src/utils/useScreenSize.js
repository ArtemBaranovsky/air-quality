import React, {useEffect, useState} from 'react';

const useScreenSize = () => {
	const [size, setSize] = useState({
		// width: window.screen.availWidth,
		// height: window.screen.availHeight,
		...window.screen	// деструктуризация объекта
	})

	useEffect(() => {
		const handleResize = () => setSize(...window.screen) // для храниения информации о том что изменилось при ресайзе
		window.addEventListener('resize', handleResize) // передаем в колбэк кодд функции
		return window.removeEventListener('resize', handleResize) // удаляем лишние обработчики
	},[])
	return size;
};

export default useScreenSize;