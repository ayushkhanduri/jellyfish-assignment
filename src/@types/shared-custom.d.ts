export as namespace SharedCustom;

export interface AuxProps {
  children: ReactChild | ReactChildren;
}

export type QueryParams = {
  [key: string]: number | string;
};

export type IDropdownItem = {
  label: string;
  value: string | number;
}

export type ICity = {
  id: number;
  nm: string;
  lat: number;
  lon: number
}