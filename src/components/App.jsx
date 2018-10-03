import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      currentVideo: null
    };
  }
  componentDidMount() {
    this.getYouTubeVideos('react tutorials');
  }
  
  handleEntryClick(video) {
    console.log('CLICK');
    this.setState({
      currentVideo: video
    });
  }
  
  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };
    
    this.props.searchYouTube(options, (videos) => 
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      })
    );
  }
  
  // debounce
  getYouTubeVideosWhenReady(query) {
    _.debounce(() => this.getYouTubeVideos(query), 500)();
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em><Search handleSearch={this.getYouTubeVideosWhenReady.bind(this)}/> </em></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em><VideoPlayer video={this.state.currentVideo}/> </em> </h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em><VideoList videos={this.state.videos} handleEntryClick={this.handleEntryClick.bind(this)}/> </em> </h5></div>
          </div>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;