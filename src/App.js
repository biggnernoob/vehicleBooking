import "./App.css";
import Counter from "./components/Counter";
import { useReducer, useState, useCallback} from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import ThemeContext from "./context/ThemeContext";
import VideosContext from "./context/VideosContext";
import VideoDispatchContext from "./context/VideoDispatchContext";

function App() {
  console.log("render-App");

  const [editAbleVideo,setEditAbleVideo] = useState(null);

  function videosReducer(videos,action){
    switch(action.type){
      case "LOAD":
          return action.payload;
      case "ADD":
          return [
            ...videos,{ ...action.payload, id: videos.length+1 }
          ];
      case "DELETE":
          return videos.filter(video => video.id !== action.payload);
      case "UPDATE":
          const index = videos.findIndex(v => v.id === action.payload.id);
          const newVideos = [...videos];
          newVideos.splice(index,1,action.payload);
          setEditAbleVideo(null);
          return newVideos;
      default:
        return videos;
    }
  };
  const [videos,dispatch] = useReducer(videosReducer,[]);
  const [mode,setMode] = useState('darkMode');

  const editVideo = useCallback(function editVideo(id){
    console.log(videos.find(video => video.id === id));
    setEditAbleVideo(videos.find(video => video.id === id));
  },[videos]);

  return (
    <ThemeContext.Provider value={mode}>  
      <VideosContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>
          
        <div className={`App ${mode}`} onClick={() => console.log("Play")}>
         <Counter></Counter>
          <button onClick={()=> setMode(mode === 'darkMode'?'lightMode':'darkMode')}>Change Theme</button>
          <AddVideo  editAbleVideo={editAbleVideo}></AddVideo>
          <VideoList editVideo={editVideo}></VideoList>
        </div>


        </VideoDispatchContext.Provider>
      </VideosContext.Provider>
    </ThemeContext.Provider>
  );

};

export default App;
