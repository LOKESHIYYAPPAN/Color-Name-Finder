import React from 'react'

const Form = ({ color, setColor, handleTxt }) => {

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        name="color"
        id="color"
        placeholder='Enter Color'
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button
        id='txtColor'
        onClick={() => handleTxt(document.querySelector("form .box"))}
      >
        Toggle Text Color
      </button>
    </form>
  )
}

export default Form