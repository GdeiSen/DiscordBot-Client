import React from "react";
import { useSelector } from "react-redux";
import "../main.scss";
import WarningField from "../WarningField/WarningField";
const ServerPlaybackCard = () => {
  const store = useSelector((state) => state);
  function currentSong() {
    if (store.currentPlayback.title) {
      return (
        <>
          <hr />
          <div className="d-flex flex-row flex-nowrap justify-content-start align-items-start">
            <div className="d-flex flex-column">
              <img
                className="d-flex dashboard-card-img"
                src={store.currentPlayback.thumbnail}
                alt={store.currentPlayback.title}
              ></img>
              <div className="d-flex flex-row justify-content-between player-under-field">
                <div className="d-flex align-items-center">
                  <i className="bi bi-skip-backward-fill player-button-side"></i>
                </div>
                <div className="d-flex align-items-center">
                  <i
                    className="bi bi-pause-circle-fill player-button-center"
                    onClick={() => {
                      store.connectionManager.sendData(
                        "togglePauseSongFunctionActivated",
                        { serverId: store.currentServer.ServerId }
                      );
                    }}
                  ></i>
                </div>
                <div className="d-flex align-items-center">
                  <i
                    className="bi bi-skip-forward-fill player-button-side"
                    onClick={() => {
                      store.connectionManager.sendData(
                        "skipSongFunctionActivated",
                        { serverId: store.currentServer.ServerId }
                      );
                    }}
                  ></i>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column w-100">
              <div className="d-flex flex-column field">
                <div>
                  <h5>Now Playing: </h5>
                  <h6>{store.currentPlayback.title}</h6>
                </div>
              </div>
              <div className="d-flex flex-column field margin-top">
                <h5>Next In Queue:</h5>
                {store.serverQueue &&
                  store.serverQueue.map((index, song) => (
                    <>
                      <div className="d-flex flex-row">
                        <div
                          className="d-flex field-option w-100"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapseItem${song.Id}`}
                        >
                          <img src={song.thumbnail}></img>
                          {song.title}
                        </div>
                      </div>
                      <div className="d-flex flex-row">
                        <div
                          className="collapse w-100"
                          id={`collapseItem${song.Id}`}
                        >
                          <div className="option-collapse-field">
                            <div className="d-flex flex-row  w-100">
                              <i
                                className="button remove-button bi bi-trash-fill"
                                onClick={() => {
                                  store.connectionManager.sendData(
                                    "removeSongFunctionActivated",
                                    {
                                      serverId: store.currentServer.ServerId,
                                      songIndex: index,
                                    }
                                  );
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
    } else
      return (
        <>
          <div className="field">
            <h4>Playback is not active on this server</h4>
          </div>
          <WarningField>
            This message may mean that the audio stream is not currently playing
            on the selected server. However, if the audio stream is being
            played, it may indicate an error when sending data!
          </WarningField>
        </>
      );
  }
  return (
    <>
      <div className={"d-flex dashboard-card align-self-start"}>
        <div className="w-100">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <h2>Current Playback</h2>
            </div>
            <div className="d-flex">
              <button
                className="btn button-bg"
                type="submit"
                
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
