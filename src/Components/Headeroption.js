import React from 'react';
import './Header.css';

export default function HeaderOption(props) {
  return (
    <div className='center'>
      <div className='header_options'>
        <div style={{ marginBottom: '5px' }}>{props.Icon}</div> {/* Add margin bottom to the icon */}
        <div>{props.avatar}</div>
      </div>
      <div className='avatarIconLog'>
        <span style={{ marginTop: '5px' }}>{props.title}</span> {/* Add margin top to the title */}
      </div>
    </div>
  );
}
