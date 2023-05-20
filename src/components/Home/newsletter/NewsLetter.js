import React from 'react'

const NewsLetter = () => {
    return (
        <div style={{
            background: "#00541C",
            padding:"20px 40px 20px 40px",
            marginTop:"40px"
        }}>
            <h1 style={{
                fontFamily: 'Open Sans',
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "35px",
                color: "#FFFFFF",
                textAlign: "center"
            }}>Newsletter</h1>
            <p style={{
                fontFamily: 'Open Sans',
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "180.18%",
                color: "#FFFFFF",
                textAlign: "center"
            }}>Subscribe to our news letter and be the first to get new updates </p>
            <form style={{
                display: "flex",
                margin:"20px 0px 20px 0px"
            }}>
                <input placeholder='Enter your email address' style={{
                    width: "500px",
                    height: "70px",
                    margin: "auto",
                    background: "#FFFFFF",
                    boxShadow: "0px 4px 4px rgba(255, 255, 255, 0.1)",
                    borderRadius: "10px",
                    paddingLeft:"20px",
                    fontFamily: 'Open Sans',
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "180.18%",
                }} />
            </form>
            <button style={{
                width: "150px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
                background: "#FFFFFF",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                fontFamily: 'Open Sans',
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "18px",
                lineHeight: "30px",
                color: "#00541C",
                border:"none"
            }}>Learn More</button>
        </div>
    )
}

export default NewsLetter