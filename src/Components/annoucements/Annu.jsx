import React from 'react'

function Annu() {
    const mystyle={
        width:"30%",
        height:"340px"
    }
    const mystyle1={
        width:"68%",
        height:"340px"
    }
  return (
    <>
      <section className="annouuc background">
        <div className="container cart-container">
            <div className="img" style={mystyle}>
                <img src="./images/banner-1.png" alt="" height='100%' width='100%' />
            </div>
            <div className="img" style={mystyle1}>
                <img src="./images/banner-2.png" alt=""  height='100%' width='100%' />
            </div>
        </div>
      </section>
    </>
  )
}

export default Annu
