import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { CURRENT_USER } from "../../graphql/queries";
import { RESET_POINT } from '../../graphql/mutations';
import "./sidebar.css";

export default ({ user, categoriesList }) => {

  const [resetPoint, { pointLoading, pointError }] = useMutation(
    RESET_POINT,
    {
      refetchQueries: [{ query: CURRENT_USER }],
    }
  );

  if (pointLoading || pointError) return null;

  return (
    <div className="sideber-div">
      <div className="sidebar-details">
        <div className="user-name-div">
          <div className="welcome-div">
            <p>Welcome</p>
          </div>
          <div className="user-name">
            <p>
              {user.username}!
            </p>
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
          <button className="reset-button" onClick={(e) => {
            e.preventDefault();
            resetPoint({
              variables: 
                {
                  point: 0,
                },
              });
            }}>
            Reset Points
          </button>
        </div>
        <div className="sidebar-categories-div">
          <ul className="sidebar-categories-ul">{categoriesList}</ul>
        </div>
      </div>
    </div>
  );
};
