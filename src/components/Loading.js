import React from 'react'

export default class LoadingScreen extends React.Component {
     render() {
          return (
            <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
              <img
                src={require("../assets/loading-animation.gif")}
                alt="loading"
              />
            </div>
          );
     }
}