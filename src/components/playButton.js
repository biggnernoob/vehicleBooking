import ThemeContext from '../context/ThemeContext';
import './playButton.css';
import { useContext, useState, memo } from 'react';

const PlayButton = memo(function PlayButton({children,onPlay,onPause}){
    console.log("render-PlayButton");

    const theme = useContext(ThemeContext);

    const  [playing,setPlaying] = useState(false);
    
    function handleClick(e){
        e.stopPropagation();

        if(playing)onPause();
        else onPlay();

        setPlaying(!playing)
    }

    return (
        <button className={theme} onClick={handleClick}>{children}  : {playing?'▶️':'⏸️'}</button>
    )
})

export default PlayButton;