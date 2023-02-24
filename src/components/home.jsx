import React, { Component } from "react";
import Navbar from "./navbar";
import News from "./news";
import LoadingBar from "react-top-loading-bar";
export default class Home extends Component {
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Navbar />
        <LoadingBar color="blue" progress={this.state.progress} />
        {/* onLoaderFinished = {()=>setProgress(0)} */}
        <News
          setProgress={this.setProgress}
          category={this.props.category}
          pagesize={20}
          country="in"
        />
      </div>
    );
  }
}
