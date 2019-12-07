import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

export default function ScoreIcon({ score, onClick }) {
  if (!score) {
    return null;
  }
  return (
    <Avatar variant="rounded" style={{ backgroundColor: '#a5d6a7' }}>
      <ThumbUpIcon />
    </Avatar>
  );
}
