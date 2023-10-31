export interface selectedCountry {
    ccn3?: number,
    name: {
        common: string,
        official: string,
    },
    currencies: {
        [key: string]: {
            name: string,
            symbol: string
        }
    },
    flags: {
        alt: string,
        png: string,
        svg: string
    },
    coatOfArms: {
        png: string,
        svg: string
    },
    car: {
        side: string
    }
}