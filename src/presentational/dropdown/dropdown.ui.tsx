import { FC } from 'react';

type IDropdownProps = {
    name: string;
    id: string;
    list: Array<SharedCustom.IDropdownItem>;
    onDropdownChange: (value: string, index: number) => void;
    value: number | string
}
export const DropdownUI: FC<IDropdownProps> = (
    {
        name, id, list, onDropdownChange, value
    }
) => (
    <select name={name} onChange={(event) => onDropdownChange(event.target.value, event.target.selectedIndex)} value={value} id={id} >
        {
            list.map((item, index) => (
                <option  key={item.value} value={item.value} >
                    {
                        item.label
                    }
                </option>
            ))
        }
    </select>
)