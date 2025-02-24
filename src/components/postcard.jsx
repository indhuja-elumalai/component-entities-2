import React from 'react';
import LikeButton from './LikeButton';
import './PostCard.css';

const PostCard = ({ post, onLikeToggle }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <img
          src={post.profileImage}
          alt={post.username}
          className="profile-image"
        />
        <span className="username">{post.username}</span>
      </div>
      <p className="post-content">{post.content}</p>
      <LikeButton isLiked={post.isLiked} onLikeToggle={() => onLikeToggle(post.id)} />
    </div>
  );
};

export default PostCard;
