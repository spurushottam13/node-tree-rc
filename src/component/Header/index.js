import React, { Fragment } from 'react'
import './header.css'
import GithubBadge from '../GithubBadge'
export default function Header(){
    return(
        <Fragment>
            <div className="header-wrapper">
            Tree Drag & Drop RC Coding
            <GithubBadge/>
            </div>
        </Fragment>
    )
}