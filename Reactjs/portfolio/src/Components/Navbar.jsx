import React from 'react'

function Navbar() {
    return (
        <div>
            <div class="mx-auto flex max-w-lg items-center justify-center gap-x-10 rounded-3xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">

            <div><a href="">Home</a></div>
            <div><a href="">About</a></div>
            <div><a href="">Work</a></div>
            <div><a href="">Blog</a></div>
            <div><a href="">Contact</a></div>

            </div>
        </div>
    )
}

export default Navbar