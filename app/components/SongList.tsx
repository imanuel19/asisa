import React from 'react';

interface SongListProps {
  songs: any[];
  downloadPermalink: string;
}

const SongList: React.FC<SongListProps> = ({ songs, downloadPermalink }) => {
  return (
    <ul className="song-list">
      {songs.map((song, index) => (
        <li key={index} className="song-item">
          <h3>{song.title}</h3>
          <p>{song.artist}</p>
          <a href={`${downloadPermalink}/${song.id}`} download>Download</a>
        </li>
      ))}
    </ul>
  );
};

export default SongList;
