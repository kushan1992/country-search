import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Options from './Options';
import { selectedCountry } from '../../Interfaces/getCountry';

describe('Options Component', () => {
    const result: selectedCountry[] = [
        {
          ccn3: 860,
          name: { common: "Uzbekistan", official: "Republic of Uzbekistan" },
          currencies: {
            "UZS": {
                name: "Uzbekistani soʻm",
                symbol: "so'm"
            }
          },
          flags: {
            png: "https://flagcdn.com/w320/uz.png",
            svg: "https://flagcdn.com/uz.svg",
            alt: "The flag of Uzbekistan is composed of three equal horizontal bands of turquoise, white with red top and bottom edges, and green. On the hoist side of the turquoise band is a fly-side facing white crescent and twelve five-pointed white stars arranged just outside the crescent opening in three rows comprising three, four and five stars."
          },
          coatOfArms: {
            png: "https://mainfacts.com/media/images/coats_of_arms/uz.png",
            svg: "https://mainfacts.com/media/images/coats_of_arms/uz.svg"
          },
          car: {side: "right"},
        },
        {
            ccn3: 740,
            name: { common: "Austria", official: "Republik Österreich" },
            currencies: {
              "EUR": {
                  name: "Euro",
                  symbol: "€"
              }
            },
            flags: {
                alt: "The flag of Austria is composed of three equal horizontal bands of red, white and red.",
                png: "https://flagcdn.com/w320/at.png",
                svg: "https://flagcdn.com/at.svg",
            },
            coatOfArms: {
                png: "https://mainfacts.com/media/images/coats_of_arms/at.png",
                svg: "https://mainfacts.com/media/images/coats_of_arms/at.svg"
            },
            car: {side: "right"},
          },
      ];

  it('should render the list of options', () => {
    const userInput = 'Uzbekistan';
    const handleSelectedCounty = jest.fn();

    render(<Options result={result} userInput={userInput} handleSelectedCounty={handleSelectedCounty} />);

    const options = screen.getAllByRole('listitem');
    expect(options).toHaveLength(result.length);

    // Check if the text content is rendered correctly
    expect(screen.getByText('Uzbekistan')).toBeInTheDocument();
    expect(screen.getByText('Uzbekistan')).toBeInTheDocument();
  });

  it('should highlight the matching text in the option', () => {
    const userInput = 'Uzbekistan';
    const handleSelectedCounty = jest.fn();

    render(<Options result={result} userInput={userInput} handleSelectedCounty={handleSelectedCounty} />);

    const option = screen.getByText('Uzbekistan');
    const optionText = option.textContent;
    
    const computedStyle = getComputedStyle(option);

    expect(computedStyle.getPropertyValue('font-weight')).toBe('bold');
    expect(optionText?.includes('Uzbekistan')).toBe(true);
  });

  it('should call handleSelectedCounty when an option is clicked', () => {
    const userInput = 'Uzbekistan';
    const handleSelectedCounty = jest.fn();

    render(<Options result={result} userInput={userInput} handleSelectedCounty={handleSelectedCounty} />);

    const option = screen.getByText('Uzbekistan');
    fireEvent.click(option);

    expect(handleSelectedCounty).toHaveBeenCalledWith(result[0]);
  });
});