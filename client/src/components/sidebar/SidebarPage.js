import React, {useState} from "react";
import { useMutation } from "@apollo/react-hooks";
import { CURRENT_USER } from "../../graphql/queries";
import { RESET_POINT } from "../../graphql/mutations";
import "./sidebar.css";

export default ({ user, categoriesList, attempts, home }) => {

  const [refresh, setRefresh] = useState(0);

  let icon = <i className="fas fa-volume-up"></i>;

  const soundCheck = document.getElementsByClassName("sound")[0];

  if (soundCheck.muted) {
    icon = <i className="fas fa-volume-mute"></i>;
  } else {
    icon = <i className ="fas fa-volume-up"></i>;
  }

  function muteAudio() {
    const els = document.getElementsByClassName("sound");
    for (var j = 0; j < els.length; j++) {
      if (els[j].muted){
        els[j].muted = false;
      }else{
        els[j].muted = true;
      }
    }
    setRefresh(refresh + 1);
  }
  
  const [resetPoint, { pointLoading, pointError }] = useMutation(RESET_POINT, {
    refetchQueries: [{ query: CURRENT_USER }],
  });

  if (pointLoading || pointError) return null;

  let showAttempt;
  if (home) {
    showAttempt = null;
  } else {
    showAttempt = (
      <>
        <strong className="attempts-counter">
          Attempted <span className="att-nm">{attempts} </span> 
          out of <span className="ten">10</span> Questions
        </strong>
      </>
    );
  }

  return (
    <div className="sidebar-div">
      <div className="sidebar-details">
        <div className="user-name-div">
          <div className="welcome-div">
            <p>Welcome</p>
          </div>
          <div className="user-name">
            <p>{user.username}!</p>
          </div>
        </div>
        <div className="mastery-points-main-div">
          <div className="mp-div">
            <p>Mastery Points</p>
          </div>
          <div className="mastery-points--div">
            <div className="mastery-points">
              <strong>{user.masteryPoints}</strong>
            </div>
          </div>
          <div className="reset-button-div">
            <button
              className="reset-button"
              onClick={(e) => {
                e.preventDefault();
                resetPoint({
                  variables: {
                    point: 0,
                  },
                });
              }}
            >
              Reset Points
            </button>
            {!home ? 
            <button id="volume-up" onClick={() => muteAudio()}>
              {icon}
            </button>
            :
            null
            }
            <p className="refresh-mute">{refresh}</p>
          </div>
          {showAttempt}
        </div>
        <div className="sidebar-categories-div">
          <ul className="sidebar-categories-ul">{categoriesList}</ul>
        </div>
      </div>
    </div>
  );
};
