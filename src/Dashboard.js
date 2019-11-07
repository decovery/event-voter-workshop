import React from 'react';
import ScoreDashboardItem from './ScoreDashboardItem';
import { Box, makeStyles, Typography } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

export default function Dashboard({ feedbackList = [] }) {
  const validScores = feedbackList.filter(f => f.score).map(f => f.score);
  const likesCount = validScores.filter(score => score >= 5).length;
  const dislikeCount = validScores.filter(score => score < 5).length;

  const completed = 60;
  return (
    <div className="dashboard">
      <Box my={2}>
        <Typography component="h2" variant="h4" my={3} align="center">
          MyLiveEvent
        </Typography>
      </Box>
      <Box className="dashboard__event-description" my={2}>
        <Typography color="textSecondary" align="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Box>
      <div className="dashboard__progress-bar">
        <LinearProgress variant="determinate" value={completed} />
      </div>
      <ScoreDashboardItem likes={likesCount} dislikes={dislikeCount} />
    </div>
  );
}
