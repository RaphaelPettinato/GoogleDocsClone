import React, { useCallback, useEffect, useRef } from 'react'
import Quill from "quill"
import "quill/dist/quill.snow.css"

const toolsOptions = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    [{ align: [] }],
    ["image", "blockquote", "code-block"],
    ["clean"]
]

export default function TextEditor() {
    const wrapperRef = useCallback((wrapper) => {
        if(wrapper == null) return 

        wrapper.innerHTML = ''
        const editor = document.createElement('div')
        wrapper.append(editor)
        new Quill(editor, {theme: 'snow', modules: {toolbar: toolsOptions}})
    }, [])
    return <div className='container' ref={wrapperRef}></div>
}
