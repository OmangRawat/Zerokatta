import React from 'react'

const GridBox = (props) => {
    return (
        <div className='gridbox' id={'box_' + props.i + '_' + props.j}>
            { props.src ? <img className={props.ele} src={props.src} alt=""/> : "" }
        </div>
    )
}

export default GridBox