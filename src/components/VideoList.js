import useVideos from "../hooks/Videos";
import PlayButton from "./playButton";
import Video from "./Video";
import axios from "axios";


function VideoList({ editVideo }) {

    const url = 'https://jsonplaceholder.typicode.com/photos';
    async function handleClick(){
        const res = await axios.get(url)
        console.log("get videos working .... ", res);
    }

    const videos = useVideos()
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
                    <PlayButton
                        onPlay={() => console.log("Play -> ", video.title)}
                        onPause={() => console.log("Pause -> ", video.title)}
                    >
                        {video.title}
                    </PlayButton>
                </Video>
            ))
        }
        <button onClick={handleClick}>Add more videos</button>
    </>
  );

}

export default VideoList;
