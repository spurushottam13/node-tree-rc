import React from 'react'
import './github-badge.css'

export default function GithubBadge(){
    return(
        <div className="git-wrapper">
            <p className="n-text">
                crafted with 
                <span role="img" aria-labelledby="love"> 💙 </span> 
                by &nbsp;
                <a 
                    href="https://github.com/spurushottam13" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="clean-aTag"
                >
                    <img src="./github.png" height="17px"/> /spurushottam13</a></p>
        </div>
    )
}