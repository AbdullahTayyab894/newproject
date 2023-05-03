import React from 'react'
import { Data } from './SolutionDataApi'
import './Solution.css'

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
            <div className='solution-parent-div'>
                {
                    Data.map((item, index) => {
                        return (
                            <div style={{
                                padding:"20px"
                            }}>
                                {
                                    item.id == 1 ? (
                                        <div className='solution-first-dev' >
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
                                        <div className='solution-all-div'>
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