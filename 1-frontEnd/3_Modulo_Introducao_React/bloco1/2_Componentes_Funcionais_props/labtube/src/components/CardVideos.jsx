import React from "react";

const CardVideos = (props) => {

    const titulo = 'Título do vídeo'

    const reproduzVideo = () => {
      alert('O video está sendo produzido...')
    }

    return (
        <>
           <div className="box-pagina-principal media" onClick={reproduzVideo}>
                <img src= {`https://picsum.photos/400/400?a=${props.img}`} alt="" />
                <h4>{titulo} </h4>
           </div>
        </>
    )
}

export default CardVideos