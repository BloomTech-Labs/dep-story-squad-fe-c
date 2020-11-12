/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { messagePopup } from '../../../utils/message-popup';
import RenderMissionDash from './RenderMissionDash';

import { useRecoilState, useSetRecoilState } from 'recoil';
import { headerTitle } from '../../../state/headerTitle';
import { gameState } from '../../../state/gameState';
import { screenState } from '../../../state/screenState';
import { currentUserState } from '../../../state/userState';

import { getData } from '../../../api';

const MissionDashContainer = () => {
  const setGameState = useSetRecoilState(gameState);
  const setScreenState = useSetRecoilState(screenState);
  // Header title
  const setHeaderTitle = useSetRecoilState(headerTitle);
  // mission progress used to control checkbox images and restrict access to missions in order
  const [curUser, setCurUser] = useRecoilState(currentUserState);
  const { curUserId, curUserType } = curUser;

  const missionReqs = curUser.missionProgress;
  const refMissionReqs = useRef(curUser.missionProgress);
  // Calback to push user to correct URL
  const { push } = useHistory();
  // Whenever this component mounts update the <Header /> title
  useEffect(() => {
    setHeaderTitle('Mission');
  }, [setHeaderTitle]);

  useEffect(() => {
    getData(`/${curUserType}/${curUserId}/progress`)
      .then(res => {
        const { read, write, draw } = res.data.progress;
        setCurUser({
          ...curUser,
          missionProgress: {
            ...refMissionReqs.current,
            read,
            write,
            draw,
          },
        });
        // TODO: we need to differentiate whether it's approved or submitted only
        if (read && write && draw) {
          // right now this function is a dummy random value
          //   setGameState({
          //     name: 'pendingSubmissionModeration',
          //     message: 'Please check back on Wednesday',
          //   });
          //   setScreenState('pendingSubmissionModeration');
          setGameState({
            name: 'submissionsCompleteApproved',
            message: 'Please check back on Wednesday',
          });
          setScreenState('submissionsCompleteApproved');
        } else if (read && !write && !draw) {
          setGameState({
            name: 'readComplete',
          });
          setScreenState('readComplete');
        } else {
          setScreenState('submissionStart');
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  // Checks if mission requirements have been met and then pushes
  // to mission URL or displays message popup with the requirements
  const beginMission = (mission, missionURL, message) => {
    switch (mission) {
      case 'read':
        push(missionURL);
        break;

      case 'write':
        missionReqs.read
          ? push(missionURL)
          : messagePopup('warning', message, 'Mission Locked!');
        break;

      case 'draw':
        missionReqs.read
          ? push(missionURL)
          : messagePopup('warning', message, 'Mission Locked!');
        break;

      default:
        break;
    }
  };

  return (
    <RenderMissionDash beginMission={beginMission} missionReqs={missionReqs} />
  );
};

export default MissionDashContainer;
