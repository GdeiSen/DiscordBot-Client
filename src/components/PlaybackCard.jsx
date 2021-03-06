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
                  }}
                ></i>
              </div>
            </div>
          </div>
          <div className="playback-info-container">
            <div className="song-info-container">
              <h5>{store?.servers?.currentServer?.playback?.title}</h5>
              <h6 className="channel-name">{store?.servers?.currentServer?.playback?.channel.name}</h6>
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
                        <div className="song-index">{index}</div>
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
          <div className="header">
            <div className="icon"><i class="fs-1 bi-boombox-fill"></i></div>
            <div className="name"><h2>Current Playback</h2></div>
          </div>
          <WarningField>
            This message may mean that the audio stream is not currently playing
            on the selected server. However, if the audio stream is being
            played, it may indicate an error when sending data!
          </WarningField>
          <div className="field">
            <h4>Playback is not active on this server</h4>
          </div>
        </div>
      </>
    );
};
export default ServerPlaybackCard;
