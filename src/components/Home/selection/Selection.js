import React from 'react'
import { Data } from './SelectionDataApi'
import './Selection.css'

const Solution = () => {
    return (
        <>
            <div className='selection-parent'>
                <h1>Why You Should Choose Us</h1>
                <p>Agric360 aims to promote agricultural growth, food security, economic development, and poverty reduction.</p>
                <div className='selection-child'>
                    {
                        Data.map((item, index) => {
                            return (
                                <div className='selection-child-internal-div'>
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

                                    <h1>{item.heading}</h1>
                                    <p>{item.description}</p>
                                </div>
                            )
                        })
                    }
                </div >
            </div >
        </>
    )
}

export default Solution