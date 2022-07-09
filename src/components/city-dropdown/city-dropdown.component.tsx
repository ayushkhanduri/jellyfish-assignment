import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { DropdownUI } from '../../presentational';
import CityList from '../../shared/cities-fr.json';

type ICityDropdownComponent = {
    onCitySelected: (city: SharedCustom.ICity) => void;
}
export const CityDropdownComponent: FC<ICityDropdownComponent> = (
    {
        onCitySelected
    }
) => {

    const cityDropdownList = useMemo(() => {
        return CityList.map(city => ({
            label: city.nm,
            value: city.id
        }))
    }, []);

    const [selectedCity, setSelectedCity] = useState<SharedCustom.ICity>(CityList[0]);

    const onCityChange = useCallback((value: string, index: number) => {
        const selectedValue: SharedCustom.ICity = CityList[index];
        setSelectedCity(selectedValue);
    }, [setSelectedCity]);

    useEffect(() => {
        onCitySelected(selectedCity);
    }, [selectedCity, onCitySelected]);
    return (
        <DropdownUI
            id='city-list'
            name='city-list'
            list={cityDropdownList}
            onDropdownChange={onCityChange}
            value={selectedCity.id}

        />
    )
}