import React from 'react'

export default function Home() {   
    return(
        <>
        <a style={{textDecoration: "none"}} href="/create">Create player</a>
        <a style={{textDecoration: "none"}} href="/edit"> - Edit player</a>
        <a style={{textDecoration: "none"}} href="/find"> - Find player</a>
        </>
    )
}
