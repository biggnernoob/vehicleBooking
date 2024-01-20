import "./AddVideo.css";
import { useEffect, useRef, useState } from "react";
import useVideoDispatch from "../hooks/VideoDispatch";

const initialState = {
    title:"",
    views:"",
    channel: "Bahar ka channel",
    time: "1 Year ago",
    varified: true,
}

function AddVideo({ editAbleVideo}) {
    
    const [video,setVideo] = useState(initialState);
    const dispatch = useVideoDispatch();
    const inputRef = useRef(null);

    function handleSubmit(e){

        e.preventDefault();
        if(editAbleVideo){
            dispatch({type:'UPDATE',payload:video});
        }else{
            dispatch({type:'ADD',payload:video});
        }
        setVideo(initialState);
    }

    function handleChange(e){

        e.stopPropagation();
        console.log(e.target.name," ",e.target.value);

        setVideo({...video,
            [e.target.name] : e.target.value,
        });
    }

    useEffect(() => {
        if(editAbleVideo){
            setVideo(editAbleVideo);
        }
        inputRef.current.focus();
    },[editAbleVideo])

    return (
        <form>
        <input 
            ref={inputRef}
            type="text" 
            name="title" 
            onChange={handleChange} 
            placeholder="title"
            value={video.title}
        />
        <input 
            type="text" 
            name="views" 
            onChange={handleChange} 
            placeholder="views"
            value={video.views}
        />
        <div>
            <button
                onClick={handleSubmit}
            >
            {editAbleVideo ? 'Edit': 'Add'} Video
            </button>
        </div>
        </form>
    );
}

export default AddVideo;
