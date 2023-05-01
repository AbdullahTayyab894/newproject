import React from 'react'
import { Data } from './SelectionDataApi'

const Solution = () => {
    return (
        <div style={{
            background: "rgba(0, 66, 22, 0.15)",
            paddingTop: "20px"
        }}>
            <h1 style={{
                margin: "50px 0px 10px 50px",
                color: "#00541C",
                fontFamily: 'Roboto',
                fontStyle: "normal",
                fontWeight: "500",

            }}>Why You Should Choose Us</h1>
            <p style={{
                marginLeft: "50px",
                fontFamily: 'Poppins',
                fontStyle: "normal",
                fontWeight: "400",

            }}>Agric360 aims to promote agricultural growth, food security, economic development, and poverty reduction.</p>
            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                padding: "20px 60px 0px 60px",
                justifyContent:"space-between"
            }}>
                {
                    Data.map((item, index) => {
                        return (
                            <div style={{
                                maxWidth: "40%",
                                minWidth:"375px",
                                height: "341px",
                                textAlign: "left",
                                lineHeight: "3em",
                            }}>
                                <div style={{
                                    position: "relative",
                                    marginBottom: "80px",
                                }}>
                                    <img src={item.img} style={{
                                        position: "absolute",
                                        width: "72px",
                                        height: "72px",
                                    }} />
                                    <img src={item.image} style={{
                                        position: "absolute",
                                        width: "36px",
                                        height: "36px",
                                        top: "18px",
                                        left: "18px",
                                    }} />
                                </div>

                                <h1 style={{
                                    color: "#00541C",
                                    fontFamily: 'Open Sans',
                                    fontStyle: "normal",
                                    fontWeight: "700",
                                    fontSize: "24px",

                                }}>{item.heading}</h1>
                                <p style={{
                                      fontFamily: 'Open Sans',
                                      fontStyle: "normal",
                                      fontWeight: "700",
                                      fontSize: "16px",
                                      color: "#3A3A3A",
                                }}>{item.description}</p>
                            </div>
                        )
                    })
                }
            </div >
        </div >
    )
}

export default Solution