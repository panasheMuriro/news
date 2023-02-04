import React from 'react'

export default function NewsCard({ heading, description, picture, link }) {
    return (
        <div style={{ display: "grid", gridTemplateRows: "2fr 3fr", backgroundColor: "#fff", width: 400, height: 600, margin: 10, padding: 10, borderRadius: 10, overflow: "hidden" }}>
            <img height="300" src={picture} style={{objectFit:"cover", borderRadius: 8}}></img>
            <h3 style={{ margin: 0 }}>{heading}</h3>
            <p style={{ fontSize: 14 }}> {description}</p>
            <a href={link}>
            <button style={{padding: 15, backgroundColor: "black", color: "#fff", border: 0, borderRadius: 10, width: "100%"}}>Read more</button>
        </a> 
        </div>
    )
}
