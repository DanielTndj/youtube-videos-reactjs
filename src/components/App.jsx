import React from "react";
import youtube from "../api/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onFormSubmit = async (inputVideo) => {
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        q: inputVideo,
        maxResults: 5,
      },
    });

    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    console.log(video)
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onFormSubmit} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;
