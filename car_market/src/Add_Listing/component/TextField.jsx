import React from 'react'
import { Textarea } from "@/components/ui/textarea"

const TextField = ({name, InputHandler}) => {
    return <Textarea id={name} onChange={(e)=>{InputHandler(name, e.target.value)}}/>
}

export default TextField