import Header from "@/components/Header";
import React from "react";
import carDetails from "../components/shared/carDetails";
import features from "../components/shared/features";
import InputField from "./component/InputField";
import Dropdown from "./component/Dropdown";
import TextField from "./component/TextField";
import { Checkbox } from "@/components/ui/checkbox";
import { handler } from "tailwindcss-animate";
import { Button } from "@/components/ui/button";

const AddListing = () => {
  const [formData, SetFormData] = React.useState([])

  const InputHandler = (name,value)=>{
      SetFormData((prevData)=>({
        ...prevData,
        [name]:value,
      }))
  }
  const onsubmit=(e)=>{
    e.preventDefault
  }
  return (
    <div>
      <Header />
      <div style={{ padding: "2rem 1rem", margin: "2rem auto" }}>
        <h2>Add Listing</h2>
        <form
          action=""
          style={{
            padding: "2rem 1rem",
            margin: "2rem auto",
            border: "solid 1px gray",
            borderRadius: "10px",
          }}
        >
          <div>
            <h3>Car Details</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              {carDetails.carDetails.map((item, index) => {
                return (
                  <div key={index} style={{margin:"0.5rem 0rem"}}>
                    <label htmlFor={item.name}>
                      {item.label}
                      {item.required && <span style={{ color: "red" }}>*</span>}
                    </label>
                    {item.fieldType === "text" ||
                    item.fieldType === "number" ? (
                      <InputField {...item} InputHandler={InputHandler}/>
                    ) : item.fieldType === "dropdown" ? (
                      <Dropdown {...item} InputHandler={InputHandler}/>
                    ) : item.fieldType === "textarea" ? (
                      <TextField {...item} InputHandler={InputHandler}/>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <hr />
            <h3>Car Features</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              {features.features.map((item, index) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                     key={index}
                  >
                    <Checkbox id="terms" onCheckedChange={(value)=>{InputHandler(item.name, value)}}/>
                    <label
                      htmlFor="terms"
                      style={{
                        fontSize: "0.875rem", // equivalent to text-sm
                        fontWeight: 500, // equivalent to font-medium
                        lineHeight: "3rem", // equivalent to leading-none
                        cursor: "pointer", // assuming default cursor behavior
                        opacity: 1, // default for non-disabled
                      }}
                    >
                      {item.name}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div style={{marginTop:"1rem", display:"flex", justifyContent:"flex-end"}}>
            <Button style={{backgroundColor:"gray"}} onClick={(e)=>onsubmit(e)}>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddListing;
