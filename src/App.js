import React from 'react';
import FeedbackList from './components/FeedbackList';
import VideoStream from './components/VideoStream';
import PageBox from './layout/PageBox';
import CssBaseline from '@material-ui/core/CssBaseline';
import Dashboard from './components/Dashboard';
import PageControls from './components/PageControls';

import './App.css';

function App() {
  const feedbackList = [
    {
      id: '01',
      name: 'Jonas',
      datetime: 'YYYY-MM-DD',
      score: 1,
      text: 'komentaras kaip vertina Jonas'
    },
    {
      id: '02',
      name: 'Aldona',
      datetime: 'YYYY-MM-DD',
      score: -1,
      text: 'komentaras kaip vertina Aldona'
    }
  ];
  const eventId = 'WUWz6xmSzbk';

  return (
    <>
      <CssBaseline />
      <div className="main-content">
        <div className="main-content__left">
          <PageBox>
            <FeedbackList feedbackList={feedbackList} />
          </PageBox>
        </div>

        <div className="main-content__right">
          <div className="sub-section">
            <PageBox>
              <VideoStream
                videoUrl={`https://www.youtube.com/embed/${eventId}?controls=0`}
              />
            </PageBox>
          </div>

          <div className="sub-section">
            <PageBox>
              <Dashboard feedbackList={feedbackList} />
            </PageBox>
          </div>
        </div>
      </div>
      <PageControls />
    </>
  );
}

export default App;
