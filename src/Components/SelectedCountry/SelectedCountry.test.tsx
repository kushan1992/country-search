import React from 'react';
import { render, screen } from '@testing-library/react';
import SelectedCountry from './SelectedCountry';

describe('SelectedCountry Component', () => {
    const selectedCountry = 
        {
          ccn3: 860,
          name: { common: "Uzbekistan", official: "Republic of Uzbekistan" },
          currencies: {
            "UZS": {
                name: "Uzbekistani so'm",
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
        }

  it('should render the selected country details', () => {
    render(<SelectedCountry selectedCountry={selectedCountry} />);

    // Check if the official name is rendered
    expect(screen.getByText('Republic of Uzbekistan')).toBeInTheDocument();

    // Check if the currency name and symbol are rendered
    expect(screen.getByText('Currency Name :')).toBeInTheDocument();
    expect(screen.getByText("Uzbekistani so'm")).toBeInTheDocument();
    expect(screen.getByText('Currency Symbol :')).toBeInTheDocument();
    expect(screen.getByText("so'm")).toBeInTheDocument();

    // Check if the side of the road they drive on is rendered
    expect(screen.getByText('What side of the road they drive on :')).toBeInTheDocument();
    expect(screen.getByText('right')).toBeInTheDocument();

    // Check if the flags and coat of arms images are rendered
    expect(screen.getByAltText('country flags')).toBeInTheDocument();
    expect(screen.getByAltText('coat of arms')).toBeInTheDocument();
  });
});