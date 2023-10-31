import React, { ChangeEvent, Ref } from 'react';

interface IInput {
  inputRef: Ref<HTMLInputElement>
  handleOnChange: (userInput: string) => void;
  toggle: (e: React.MouseEvent<HTMLElement>) => void;
}

function Input(prop: IInput) {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    prop.handleOnChange(e.target.value)
  }

  return (
    <div className="relative w-[400px]">
        <input type="text" ref={prop.inputRef} className="p-2 pl-8 w-[400px] rounded border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent" placeholder="Search by country name..." onChange={handleOnChange} onClick={prop.toggle}/>
        <svg className="w-4 h-4 absolute left-2.5 top-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
    </div>
  );    
}

export default Input;