import React from 'react'

const Navbar = () => {
  return (
    <div style={{
        backgroundColor: "#454545",
        color :"white",
        display:"flex",
        alignItems :"center",
        justifyContent: "center",
        gap:"20px"

    }}>
        <h4>Introduction</h4>
        <h4>Cause</h4>
        <h4>Effects</h4>
        <h4>Solutions</h4>
        <h4>Global Statistics</h4>
        <h4>Check AQI</h4>
    </div>
  )
}

export default Navbar