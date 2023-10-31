import React from 'react';
import { selectedCountry } from '../../Interfaces/getCountry';

interface IOptions {
    result: selectedCountry[];
    userInput: string;
    handleSelectedCounty: (country: selectedCountry) => void;
};

function Options(props: IOptions) {
    const { result, handleSelectedCounty } = props;

    function getHighlightedText(text:string, highlight:string) {
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return <span> {parts.map((part, i) => 
            <span key={i} style={part.toLowerCase() === highlight.toLowerCase() ? { fontWeight: 'bold' } : {} }>
                { part }
            </span>)
        } </span>;
    }
    
    return (
        <ul className="bg-white border border-gray-100 mt-11 max-h-96 overflow-auto absolute z-50 w-[400px]">
            {result.length > 0 && result.map((country: selectedCountry) => {
                return (
                <li key={country?.ccn3} className="pl-8 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900 text-ellipsis overflow-hidden" onClick={() => handleSelectedCounty(country)}>
                    <svg className="absolute w-4 h-4 left-2 top-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                    {getHighlightedText(country?.name?.common, props.userInput)}
                </li>
                )
            })}
        </ul>
    )
}

export default Options;