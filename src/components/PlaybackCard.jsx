import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ServerService from "../services/serverService";
import WarningField from "./WarningField";
const ServerPlaybackCard = () => {
  const store = useSelector((state) => state);
  if (store?.servers?.currentServer?.playback)
    return (
      <>
        <div className="dashboard-player-card">
          <div className="player-container">
            <img
              className="player-img-container"
              src={store?.servers?.currentServer?.playback?.thumbnail?.url}
              alt={store?.servers?.currentServer?.playback?.title}
            ></img>

            <div className="player-button-container">
              <div className="side-button">
                <i className="bi bi-skip-backward-fill player-button-side"></i>
              </div>
              <div className="center-button">
                <i
                  className="bi bi-pause-circle-fill player-button-center"
                  onClick={() => {
                    store.connectionManagers.socketManager.send(
                      "togglePauseSongFunction",
                      { serverId: store.servers.currentServer.server.id }
                    );
                  }}
                ></i>
              </div>
              <div className="side-button">
                <i
                  className="bi bi-skip-forward-fill player-button-side"
                  onClick={() => {
                    store.connectionManagers.socketManager.send(
                      "skipSongFunction",
                      { serverId: store.servers.currentServer.server.id }
                    );
                    store.connectionManagers.serverService.getPlayback(
                      store.servers.currentServer.server.id,
                      1000
                    );
                  }}
                ></i>
              </div>
            </div>
          </div>
          <div className="playback-info-container">
            <div className="song-info-container">
              <h5>{store?.servers?.currentServer?.playback?.title}</h5>
            </div>
            <div className="queue-container">
              {store?.servers?.currentServer?.queue &&
                store?.servers?.currentServer?.queue.map((song, index) => {
                  return (
                    <>
                      <div
                        className="song-row"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapseItem${song.id}`}
                      >
                        <img
                          src={song.thumbnail.url}
                          className="song-img"
                        ></img>
                        <div className="song-info">
                          <div className="song-name">
                            <p>{song.title}</p>
                          </div>
                          <div className="song-channel">
                            {song.channel.name}
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="collapse" id={`collapseItem${song.id}`}>
                          <div className="collapse-row">
                            <i
                              className="button remove-button bi bi-trash-fill"
                              onClick={() => {
                                store.connectionManagers.socketManager.send(
                                  "removeSongFunction",
                                  {
                                    serverId:
                                      store.servers.currentServer.server.id,
                                    songIndex: index,
                                  }
                                );
                                store.connectionManagers.serverService.getPlayback(
                                  store.servers.currentServer.server.id,
                                  1000
                                );
                              }}
                            ></i>
                            <i className="button copy-button bi bi-files"></i>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </>
    );
  else
    return (
      <>
        <div className="dashboard-card">
          <div className="field">
            <h4>Playback is not active on this server</h4>
          </div>
          <WarningField>
            This message may mean that the audio stream is not currently playing
            on the selected server. However, if the audio stream is being
            played, it may indicate an error when sending data!
          </WarningField>
        </div>
      </>
    );
};
export default ServerPlaybackCard;
