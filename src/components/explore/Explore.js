import React from 'react'
import explore from "../../images/explore.png"

const Explore = () => {
    return (
        <div>
            <h1 style={{
                fontFamily: 'Roboto',
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "48px",
                lineHeight: "56px",
                color: "#00541C",
                textAlign: "center",
                paddingTop: "40px"
            }}>We keep you updated with the latest report.</h1>
            <img src={explore} style={{
                display: "flex",
                width: "80%",
                height: "100vh",
                margin: "auto",
                marginTop: "40px"
            }} />
            <button style={{
                display: "flex",
                width: "437px",
                height: "70px",
                margin: "auto",
                background: "#00541C",
                boxShadow: "0px 4px 4px rgba(0, 109, 36, 0.25)",
                borderRadius: "10px",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "20px",
                color: "#FFFFFF",
                fontFamily: 'Open Sans',
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "20px",
                lineHeight: "27px",

            }}>Explore more</button>
        </div>
    )
}

export default Explore