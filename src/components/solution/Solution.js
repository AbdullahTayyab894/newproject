import React from 'react'
import { Data } from './SolutionDataApi'

const Solution = () => {
    return (
        <>
            <h1 style={{
                margin: "50px 0px 10px 50px",
                color: "green"
            }}>Solutions</h1>
            <p style={{
                marginLeft: "50px",
            }}>We understand the needs of our customers and we tailor our solutions to <br /> suit their needs all in one place</p>
            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-around",
                padding: "20px",
            }}>
                {
                    Data.map((item, index) => {
                        return (
                            <div>
                                {
                                    item.id == 1 ? (
                                        <div style={{
                                            width: "375px",
                                            height: "341px",
                                            border: "1px solid green",
                                            borderRadius: "10px",
                                            marginTop: "20px",
                                            textAlign: "center",
                                            lineHeight: "3em",
                                            padding: "40px 30px 0px 30px",
                                            background: "rgba(0, 153, 51, 0.1)",
                                        }}>
                                            <img src={item.img} />
                                            <h1 style={{
                                                color: "green"
                                            }}>{item.heading}</h1>
                                            <p>{item.description}</p>
                                            <button style={
                                                {
                                                    width: "215px",
                                                    height: "60px",
                                                    background: "#00541C",
                                                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                                    borderRadius: "10px",
                                                    color: "#FFFFFF",
                                                }
                                            }>Learn more</button>
                                        </div>
                                    ) : (
                                        <div style={{
                                            width: "375px",
                                            height: "341px",
                                            border: "1px solid green",
                                            borderRadius: "10px",
                                            marginTop: "20px",
                                            textAlign: "center",
                                            lineHeight: "3em",
                                            padding: "40px 30px 0px 30px",
                                        }}>
                                            <img src={item.img} />
                                            <h1 style={{
                                                color: "green"
                                            }}>{item.heading}</h1>
                                            <p>{item.description}</p>
                                            <button style={
                                                {
                                                    width: "215px",
                                                    height: "60px",
                                                    background: "#00541C",
                                                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                                    borderRadius: "10px",
                                                    color: "#FFFFFF",
                                                }
                                            }>Learn more</button>
                                        </div>
                                    )
                                }
                            </div>
                        )
                    })
                }
            </div >
        </>
    )
}

export default Solution