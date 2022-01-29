import React, {useEffect} from "react";
import { useSelector } from "react-redux";
const ServerPlayback = (props) => {
  let current = {
    title: null,
    volume: null,
    songLoop: null,
    queueLoop: null,
    thumbnail: null
  }
  const redux = useSelector(state => state);
  if (props.children) {
    current.title = Object.values(props.children)[1];
    current.songLoop = Object.values(props.children)[2] === 1 ? 'true' : 'false';
    current.queueLoop = Object.values(props.children)[3] === 1 ? 'true' : 'false';
    current.thumbnail = Object.values(props.children)[4];
  }
  let { websocketManager } = redux.websocketManager
  function updatePlaybackData() {
    setTimeout(() => {
      websocketManager.sendData('getCurrentPlayback', { serverId: redux.currentServer.currentServer.ServerId });
      websocketManager.sendData('getServerQueue', { serverId: redux.currentServer.currentServer.ServerId })
    }, 100);
  }
  function currentSong() {
    if (current.title) {
      return (
        <>
          <hr />
          <div className="d-flex flex-row flex-nowrap justify-content-start align-items-start">
            <div className="d-flex flex-column">
              <img className="d-flex card-img" src={current.thumbnail} alt={current.title}></img>
              <div className="d-flex flex-row justify-content-between player-under-field">
                <div className="d-flex align-items-center"><i className="bi bi-skip-backward-fill player-button-side"></i></div>
                <div className="d-flex align-items-center"><i className="bi bi-pause-circle-fill player-button-center" onClick={() => { websocketManager.sendData('togglePauseSongFunction', { serverId: redux.currentServer.currentServer.ServerId }); updatePlaybackData() }}></i></div>
                <div className="d-flex align-items-center"><i className="bi bi-skip-forward-fill player-button-side" onClick={() => { websocketManager.sendData('skipSongFunction', { serverId: redux.currentServer.currentServer.ServerId }); updatePlaybackData() }}></i></div>
              </div>

            </div>
            <div className="d-flex flex-column w-100">
              <div className="d-flex flex-column field">
                <div><h5>Now Playing: </h5><h6>{current.title}</h6></div>
              </div>
              <div className="d-flex flex-column field margin-top">
                <h5>Next In Queue:</h5>
                {redux.serverQueue.queue && redux.serverQueue.queue.map((song, index) => (
                  <>
                    <div className="d-flex flex-row">
                      <div className="d-flex field-option w-100" data-bs-toggle="collapse" data-bs-target={`#collapseItem${song.Id}`}>{song.Songname}</div>
                    </div>
                    <div className="d-flex flex-row">
                      <div className="collapse w-100" id={`collapseItem${song.Id}`}>
                        <div className="option-collapse-field">
                          <div className="d-flex flex-row  w-100">
                            <i className="button remove-button bi bi-trash-fill" onClick={() => { websocketManager.sendData('removeSongFunction', { serverId: redux.currentServer.currentServer.ServerId, songIndex: index }); updatePlaybackData() }}></i>
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
      )
    } else return <h4>Playback is not active on this server</h4>
  }
  return (<>
    <div className={props.visible ? "d-flex dashboard-card align-self-start" : "hide_container"}>
      <div className="w-100">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2>Current Playback</h2>
          </div>
          <div className="d-flex">
            <button className="btn button-bg" type="submit" onClick={() => updatePlaybackData()}><i className="bi bi-arrow-clockwise"></i></button>
          </div>
        </div>
        {currentSong()}
      </div>
    </div>
  </>
  )
}
export default ServerPlayback