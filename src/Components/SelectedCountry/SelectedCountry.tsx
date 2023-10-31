import React from 'react';
import { selectedCountry } from '../../Interfaces/getCountry';

interface ISelectedCountry {
  selectedCountry: selectedCountry
}

function SelectedCountry(props: ISelectedCountry) {

  return (
  <div className="flex flex-col justify-center z-0">
    <div
      className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
      <div className="w-full md:w-1/3 bg-white grid place-items-center border ">
        {props.selectedCountry?.flags && (
          <img src={`${props.selectedCountry?.flags?.png}?auto=compress&cs=tinysrgb&dpr=1&w=500`} loading="lazy" alt="country flags" className="rounded-xl" />
        )}
      </div>
        <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
          <h3 className="font-black text-gray-800 md:text-3xl text-xl">{props.selectedCountry?.name.official}</h3>
          <p className="md:text-lg text-gray-800 text-base">
            Currency Name : <span className="font-normal text-gray-600 text-base">{Object.values(props.selectedCountry?.currencies)[0].name}</span>
          </p>
          <p className="md:text-lg text-gray-800 text-base">
            Currency Symbol : <span className="font-normal text-gray-600 text-base">{Object.values(props.selectedCountry?.currencies)[0].symbol}</span>
          </p>
          <p className="md:text-lg text-gray-800 text-base">
            What side of the road they drive on : <span className="font-normal text-gray-600 text-base">{props.selectedCountry?.car?.side}</span>
          </p>
        </div>
        <div className="w-full md:w-1/3 bg-white grid place-items-center border">
          {props.selectedCountry?.flags && (
            <img src={`${props.selectedCountry?.coatOfArms?.png}?auto=compress&cs=tinysrgb&dpr=1&w=500`} loading="lazy" alt="coat of arms" className="rounded-xl" />
          )}
        </div>
      </div>
	</div>
  );    
}

export default SelectedCountry;