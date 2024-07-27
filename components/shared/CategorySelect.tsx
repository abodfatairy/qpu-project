import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/types";
type DropdownProps = {
  value?: string;
  onChangeHandler?: () => void;
  Categories: categories[];
};
export function CategorySelcet({
  onChangeHandler,
  value,
  Categories,
}: DropdownProps) {
  return (
    <Select
      onValueChange={onChangeHandler}
      defaultValue={value}
      
    >
      <SelectTrigger className='w-[180px] text-dark-2 '>
        <SelectValue
          placeholder='Select a ctegory '
          className=' text-black'
        />
      </SelectTrigger>
      <SelectContent className='text-black'>
        <SelectGroup className=" text-black">
       
          {Categories.map((item: categories) => (
            <SelectItem
              className='text-black'
              value={item.id}
              key={item.id}
            >
              
              {item.name}
            </SelectItem>
          ))}
          {/* <SelectItem value='apple'>Apple</SelectItem>
          <SelectItem value='banana'>Banana</SelectItem>
          <SelectItem value='blueberry'>Blueberry</SelectItem>
          <SelectItem value='grapes'>Grapes</SelectItem>
          <SelectItem value='pineapple'>Pineapple</SelectItem> */}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
