import { Input } from "@/components/ui/input";
import React from "react";

const InputField = ({ name, required, fieldType, InputHandler }) => {
  return (
    <div>
      <Input type={fieldType} name={name} id={name} required={required} onChange={(e)=>{InputHandler(name, e.target.value)}}/>
    </div>
  );
};

export default InputField;
