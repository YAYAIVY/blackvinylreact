import React from 'react'


function Bodybackground() {
  const background = require('./../../src/images/background1.jpeg')
  return (
    <>
      <div className="mbg bg-blur">
        <img src={background} alt="background" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="mamberpage">

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bodybackground