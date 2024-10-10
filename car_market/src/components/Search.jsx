import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator"
import { CiSearch } from "react-icons/ci";
import data from './shared/data'

console.log(data.CarNames)


const Search = () => {
  return (
    <div className='searchbar'>
    <div className='searchCenter'> 
      <Select>
        <SelectTrigger className="search">
          <SelectValue placeholder="Cars" />
        </SelectTrigger>
        <SelectContent className="dropDown">
          <SelectItem value="light">New</SelectItem>
          <SelectItem value="dark">Old</SelectItem>
        </SelectContent>
      </Select>
      {/* <Separator orientation="vertical"/>   */}
      <Select>
        <SelectTrigger className="search">
          <SelectValue placeholder="Brands" />
        </SelectTrigger>
        <SelectContent className="dropDown">
          {data.CarNames.map((brand,index)=>{

            return <SelectItem value={brand.name} key={index}>{brand.name}</SelectItem>
          })}
        </SelectContent>
      </Select>
      {/* <Separator orientation="vertical"/> */}
      <Select>
        <SelectTrigger className="search">
          <SelectValue placeholder="Price" />
        </SelectTrigger>
        <SelectContent className="dropDown">
        {data.CarPrices.map((price,index)=>{
            return <SelectItem value={price.amount} key={index}>{price.amount}</SelectItem>
          })}
        </SelectContent>
      </Select>
      <div>
      <CiSearch style={{fontSize:'30px', paddingTop:'3px',paddingRight:'5px',}}/>
      </div>
    </div>
    </div>
  );
};

export default Search;
