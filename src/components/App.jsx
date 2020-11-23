import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
    onFormSubmit(inputVideo){
        console.log(inputVideo);
    }

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onFormSubmit}/>
      </div>
    );
  }
}

export default App;
