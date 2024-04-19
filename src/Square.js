import React from 'react'

const Square = ({isDark, color, hexCode}) => {
    return (
        <div className="box" style={{ backgroundColor: color, color: isDark ? "black" : "white" }}>
            <p>{color ? color : "Empty value"}</p>
            <p>{hexCode ? hexCode : null}</p>
        </div>
    )
}
Square.defaultProps = {
    color:"Empty color value"
}

export default Square