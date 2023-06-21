import React from 'react'
interface Props {
    name:string,
    symbol?:string,
    value:string|number,
    setValue:(e:any)=>void,
    label?:string,
    placeholder?:string,
    type:string,
    min?:number|string,

}

const ClassicInput: React.FC<Props> = ({
    name,
    symbol,
    value,
    setValue,
    label,
    type,
    placeholder,
    min,
  }) => {
    return (
        <>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
                {symbol && (
                    <div className="mr-1 inset-y-0 left-0 pl-1 flex items-center pointer-events-none">
                        <span className="text-black-500 md:text-l sm:text-sm">
                            {symbol}
                        </span>
                    </div>
                )}
                <input
                    value={value}
                    onChange={setValue}
                    type={type}
                    min={min}
                    name={name}
                    id={name}
                    className="focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-600"
                    placeholder={placeholder}
                />
            </div>
        </>
    );
};

export default ClassicInput