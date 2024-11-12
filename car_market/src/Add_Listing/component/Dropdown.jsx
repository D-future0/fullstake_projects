import React from "react";
// import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Dropdown = ({name, label, options, InputHandler})=> {
  // console.log(name)
    return (
      <Select  onValueChange={(value)=>{InputHandler(name, value)}}>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent style={{backgroundColor:"white", boxShadow:"0px 4px 8px rgba(0, 0, 0.15)", padding:"10px", borderRadius:"4px"}}>
          <SelectGroup>
            {options.map((option, index)=>{
                return(
            <SelectItem value={option} key={index}>{option}</SelectItem>
                )
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    )
  }

export default Dropdown;
