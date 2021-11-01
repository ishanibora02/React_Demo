import React from "react";

/**
 * Renders information about the user obtained from Microsoft Graph
 */
export const ProfileData = (props) => {
  return <div id="profile-div">{props.graphData}</div>;
};
