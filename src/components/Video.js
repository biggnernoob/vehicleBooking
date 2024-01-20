import { useContext, useEffect } from 'react';
import './video.css';
import ThemeContext from '../context/ThemeContext';
import useVideoDispatch from '../hooks/VideoDispatch';

function Video({id,title,channel="Apna channel",views,time,varified,children,editVideo}){
    console.log("render-Video");

    const theme = useContext(ThemeContext);
    const dispatch = useVideoDispatch();

    useEffect(() => {
        console.log('playing video -> ',id);
    },[id])

    return (
        <>
            <div className={`container ${theme}`}>
                <button className='close' onClick={() => dispatch({type:'DELETE',payload:id})}>X</button>
                <button className='edit' onClick={() => editVideo(id)}>edit</button>
                <div className='pic'>
                    <img src={`https://picsum.photos/id/${id}/160/90`} alt="book"/> 
                </div>
                <div className='title'>{title}</div>
                <div className='channel'>{channel} {varified && "✅"}</div>
                <div className='views'>
                    {views} views <span>.</span> {time}
                </div>
                <div>{children}</div>
            </div>
        </>
    )
}

export default Video;