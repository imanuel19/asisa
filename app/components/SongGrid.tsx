import React from 'react';

interface SongGridProps {
  songs: any[];
  downloadPermalink: string;
}

const SongGrid: React.FC<SongGridProps> = ({ songs, downloadPermalink }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {songs.map((song, index) => (
        <div key={index} className="song-item">
          <h3>{song.title}</h3>
          <p>{song.artist}</p>
          <a href={`${downloadPermalink}/${song.id}`} download>Download</a>
        </div>
      ))}
    </div>
  );
};

export default SongGrid;
