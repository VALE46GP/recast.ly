import VideoListEntry from './VideoListEntry.js';

class VideoList extends React.Component {
  render() {
    return <div className="video-list">
            { 
              this.props.videos.map((v, k) => {
                  return <VideoListEntry video={v} key={k}/>;
              })
            } 
            </div>;
  }
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;

// need Class to instantiate each div of Video-List


// var VideoList = (props) => (
//   <div className="video-list">
//   { 
//     props.videos.map((v, k) => {
//         return <VideoListEntry video={v} key={k}/>;
//     })
//   } 
//   </div>
// );