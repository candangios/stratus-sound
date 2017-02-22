import React from 'react';
import { Link } from 'react-router';

const PlaylistIndexItem = ({ track, playlistId, receiveCurrentTrack, togglePlay, currentTrack, showDelete, deletePlaylistTrack }) => {
  const handleClick = () => {
    if (currentTrack) {
      togglePlay();
    } else {
      receiveCurrentTrack(track, playlistId);
    }
  }

  const togglePlayButton = (currentTrack && currentTrack.playing && currentTrack.playlistId === playlistId) ?
    (<i className="fa fa-pause" aria-hidden="true"/>) : ( <i className="fa fa-play" aria-hidden="true"/> );

  return (
    <ul className="playlist-tracks" onClick={ handleClick }>
      <li>
        <img src={track.photo_url}/>
      </li>

      <li className="extra small-play" onClick={ handleClick }>
        { togglePlayButton }
      </li>

      <li>
        <Link to={`tracks/${track.id}`} onClick={ (e) => e.stopPropagation() }>
          {track.user.username} - {track.name}
        </Link>
      </li>

      { showDelete ?
        <button onClick={ () => deletePlaylistTrack(playlistId, track.id) }>
          <i className="fa fa-trash-o" aria-hidden="true"/>
        </button>
        : "" }

    </ul>
  );
};

export default PlaylistIndexItem;