import React from "react";
const Spotify = props =>{
    const token = 'YOUR_TOKEN_HERE';
    fetch('https://api.github.com/user/repos', {
        headers: {
        Authorization: `token ${token}`
        }
        })
    .then(res => res.json())
    .then(json => console.log(json));
    return(
        <header></header>
    )
}
export default Spotify;

