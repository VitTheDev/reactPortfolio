import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { key } from '../../../Pojects/Projects';
import Spinner from '../../UI/Spinner';

import './ProjectSnippet.scss';

class ProjectSnippet extends Component {
  state = {
    overlay: false,
    image: null,
    loading: false,
  };

  componentDidMount() {
    this.fetchVideoImage();
  }

  fetchVideoImage = async () => {
    this.setState({ loading: true });
    await axios
      .get('https://www.googleapis.com/youtube/v3/videos', {
        params: {
          part: 'snippet',
          id: `${this.props.youtubeId}`,
          key: key,
        },
      })
      .then((res) =>
        this.setState({
          image: res.data.items[0].snippet.thumbnails.medium.url,
          loading: false,
        })
      )
      .catch((err) => console.log(err));
  };

  setOverlay = () => {
    this.setState({ overlay: true });
  };

  unsetOverlay = () => {
    this.setState({ overlay: false });
  };

  render() {
    console.log('inside render');
    const { image } = this.state;
    if (this.state.loading) {
      return <Spinner />;
    }
    return (
      <div
        onMouseEnter={this.setOverlay}
        className="ProjectSnippet"
        onMouseLeave={this.unsetOverlay}
      >
        <div>
          <img src={image} alt={this.props.name} />
        </div>
        {this.state.overlay ? (
          <Link to={`/mywork/${this.props.youtubeId}`}>
            <div className="Overlay">
              <h3>{this.props.name}</h3>
              <h5>Click for details</h5>
            </div>
          </Link>
        ) : null}
      </div>
    );
  }
}

export default ProjectSnippet;
