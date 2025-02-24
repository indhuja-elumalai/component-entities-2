import React, { useState } from 'react';
import './LikeButton.css';

const LikeButton = ({ isLiked, onLikeToggle }) => {
  return (
    <button
      className={`like-button ${isLiked ? 'liked' : 'unliked'}`}
      onClick={onLikeToggle}
    >
      {isLiked ? 'Liked' : 'Like'}
    </button>
  );
};

export default LikeButton;
