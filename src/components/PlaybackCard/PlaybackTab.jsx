import React, { useEffect } from "react";
import "../main.scss";
const ServerPlaybackCard = (props) => {
  let current = {
    title: null,
    volume: null,
    songLoop: null,
    queueLoop: null,
    thumbnail: null,
  };
  if (props.children) {
    current.title = Object.values(props.children)[1];
    current.songLoop =
      Object.values(props.children)[2] === 1 ? "true" : "false";
    current.queueLoop =
      Object.values(props.children)[3] === 1 ? "true" : "false";
    current.thumbnail = Object.values(props.children)[4];
  }
  function updatePlaybackData() {
    setTimeout(() => {
      props.websocketManager.getData("getCurrentPlayback", {
        serverId: props.currentServer.ServerId,
      });
      props.websocketManager.getData("getServerQueue", {
        serverId: props.currentServer.ServerId,
      });
    }, 100);
  }
  function currentSong() {
    if (current.title) {
      return (
        <>
          <hr />
          <div className="d-flex flex-row flex-nowrap justify-content-start align-items-start">
            <div className="d-flex flex-column">
              <img
                className="d-flex dashboard-card-img"
                src={current.thumbnail}
                alt={current.title}
              ></img>
              <div className="d-flex flex-row justify-content-between player-under-field">
                <div className="d-flex align-items-center">
                  <i className="bi bi-skip-backward-fill player-button-side"></i>
                </div>
                <div className="d-flex align-items-center">
                  <i
                    className="bi bi-pause-circle-fill player-button-center"
                    onClick={() => {
                      props.websocketManager.sendData(
                        "togglePauseSongFunctionActivated",
                        { serverId: props.currentServer.ServerId }
                      );
                      updatePlaybackData();
                    }}
                  ></i>
                </div>
                <div className="d-flex align-items-center">
                  <i
                    className="bi bi-skip-forward-fill player-button-side"
                    onClick={() => {
                      props.websocketManager.sendData(
                        "skipSongFunctionActivated",
                        { serverId: props.currentServer.ServerId }
                      );
                      updatePlaybackData();
                    }}
                  ></i>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column w-100">
              <div className="d-flex flex-column field">
                <div>
                  <h5>Now Playing: </h5>
                  <h6>{current.title}</h6>
                </div>
              </div>
              <div className="d-flex flex-column field margin-top">
                <h5>Next In Queue:</h5>
                {props.serverQueue &&
                  props.serverQueue.map((index, songObj) => (
                    <>
                      <div className="d-flex flex-row">
                        <div
                          className="d-flex field-option w-100"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapseItem${songObj.Id}`}
                        >
                          <img src={songObj.song.thumbnail}></img>
                          {songObj.song.title}
                        </div>
                      </div>
                      <div className="d-flex flex-row">
                        <div
                          className="collapse w-100"
                          id={`collapseItem${songObj.song.Id}`}
                        >
                          <div className="option-collapse-field">
                            <div className="d-flex flex-row  w-100">
                              <i
                                className="button remove-button bi bi-trash-fill"
                                onClick={() => {
                                  props.websocketManager.sendData(
                                    "removeSongFunctionActivated",
                                    {
                                      serverId: props.currentServer.ServerId,
                                      songIndex: index,
                                    }
                                  );
                                  updatePlaybackData();
                                }}
                              ></i>
                              <i className="button copy-button bi bi-files"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
              </div>
            </div>
          </div>
        </>
      );
    } else return <div className = "field"><h4>Playback is not active on this server</h4><p>Еhis message may mean that the audio stream is not currently playing on the selected server. However, if the audio stream is being played, it may indicate an error when sending data!</p></div>;
  }
  return (
    <>
      <div
        className={
          props.isVisible
            ? "d-flex dashboard-card align-self-start"
            : "hide_container"
        }
      >
        <div className="w-100">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <h2>Current Playback</h2>
            </div>
            <div className="d-flex">
              <button
                className="btn button-bg"
                type="submit"
                onClick={() => updatePlaybackData()}
              >
                <i className="bi bi-arrow-clockwise"></i>
              </button>
            </div>
          </div>
          {currentSong()}
        </div>
      </div>
    </>
  );
};
export default ServerPlaybackCard;
