import React, {useEffect, useRef, useState} from "react";

const ImagePlayer = ({slide, goToNextSlide}) => {
    const [format, setFormat] = useState(null)
    const inputEl = useRef(null);
    let imgUrl = slide.value
    useEffect(() => {
        const img = inputEl.current;
        const onImageLoad = () => {
            if (img.clientWidth < img.clientHeight) {
                console.log("c'est vertical maggle")
                setFormat('vertical')
            } else if (img.clientWidth > img.clientHeight) {
                console.log("c'est horizontal maggle")
                setFormat('horizontal')
            } else {
                console.log("c'est une image parfaitement carrée, bravo")
                setFormat('square')
            }
        };
        img.addEventListener('load', onImageLoad);
        return () => {
            img.removeEventListener('load', onImageLoad)
        }
    });
    useEffect(()=>{
        const interval = setInterval(goToNextSlide, 5000);
        return ()=>{
            clearInterval(interval);
        }
    },[])
    return <img ref={inputEl} className={`o-fluidimage c-player__image c-player_image--${format}`} src={imgUrl} alt=""/>
}

export default ImagePlayer;