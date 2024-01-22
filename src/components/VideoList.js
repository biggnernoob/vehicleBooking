import { useCallback, useEffect, useMemo } from "react";
import useVideos from "../hooks/Videos";
import PlayButton from "./playButton";
import Video from "./Video";
import axios from "axios";
import useVideoDispatch from "../hooks/VideoDispatch";


function VideoList({ editVideo }) {

    // const [videos,setVideos] = useState([]);
    const dispatch = useVideoDispatch();
    const url = 'https://my.api.mockaroo.com/movies.json?key=e085bda0';

    useEffect(() => {
        async function fetchVideos(){
            const res = await axios.get(url)
            console.log("get videos working .... ", res);
            dispatch({type:'LOAD',payload:res.data});
        }
        fetchVideos();
    },[dispatch])

    const videos = useVideos()

    const play = useCallback(() => console.log("Play -> "),[]);
    const pause = useCallback(() => console.log("pause -> "),[]);

    const memoButton = useMemo(() => {
        <PlayButton
            onPlay={play}
            onPause={pause}
        >
            Play..
        </PlayButton>
    },[pause,play])
  return (
    <>
        {
            videos.map((video) => (
                <Video
                    key={video.id}
                    id={video.id}
                    title={video.title}
                    views={video.views}
                    time={video.time}
                    channel={video.channel}
                    varified={video.varified}
                    editVideo={editVideo} 
                >
                    {memoButton}
                </Video>
            ))
        }
    </>
  );

}

export default VideoList;
