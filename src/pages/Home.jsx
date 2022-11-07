import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Home() {
    const location = useLocation()
    let username = ""
    let password = ""
    let email = ""
    let exp = ""
    let level = ""
    if (location.state == null) {
        console.log('data masih kosong');
    } else {
        username = location.state.username
        password = location.state.password
        email = location.state.email
        exp = location.state.exp
        level = location.state.level
    }
    return(
        <>
        <a style={{textDecoration: "none"}} href="/create">Create player</a>
        <a style={{textDecoration: "none"}} href="/edit"> - Edit player</a>
        <a style={{textDecoration: "none"}} href="/find"> - Find player</a>
        <div>{ username !== undefined &&'username : ' + username }</div>
        <div>{ password !== undefined && 'password : ' + password } </div>
        <div>{ email !== undefined &&'email : ' + email }</div>
        <div>{ exp !== undefined && 'exp : ' + exp }</div>
        <div>{ level !== undefined && 'level : ' + level }</div>
        </>
    )
}
