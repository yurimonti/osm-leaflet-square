import ClassicInput from '@/components/ClassicInput'
import { LatLngLiteral } from 'leaflet'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import './style.css'


const colors = [
    "indianred",
    "lightcoral",
    "salmon",
    "darksalmon",
    "lightsalmon",
    "crimson",
    "red",
    "darkred",
    "pink",
    "lightpink",
    "hotpink",
    "deeppink",
    "mediumvioletred",
    "palevioletred",
    "coral",
    "tomato",
    "orangered",
    "darkorange",
    "orange",
    "gold",
    "yellow",
    "lightyellow",
    "lemonchiffon",
    "lightgoldenrodyellow",
    "papayawhip",
    "moccasin",
    "peachpuff",
    "palegoldenrod",
    "khaki",
    "darkkhaki",
    "lavender",
    "thistle",
    "plum",
    "violet",
    "orchid",
    "fuchsia",
    "magenta",
    "mediumorchid",
    "mediumpurple",
    "rebeccapurple",
    "blueviolet",
    "darkviolet",
    "darkorchid",
    "darkmagenta",
    "purple",
    "indigo",
    "slateblue",
    "darkslateblue",
    "mediumslateblue",
    "greenyellow",
    "chartreuse",
    "lawngreen",
    "lime",
    "limegreen",
    "palegreen",
    "lightgreen",
    "mediumspringgreen",
    "springgreen",
    "mediumseagreen",
    "seagreen",
    "forestgreen",
    "green",
    "darkgreen",
    "yellowgreen",
    "olivedrab",
    "olive",
    "darkolivegreen",
    "mediumaquamarine",
    "darkseagreen",
    "lightseagreen",
    "darkcyan",
    "teal",
    "aqua",
    "cyan",
    "lightcyan",
    "paleturquoise",
    "aquamarine",
    "turquoise",
    "mediumturquoise",
    "darkturquoise",
    "cadetblue",
    "steelblue",
    "lightsteelblue",
    "powderblue",
    "lightblue",
    "skyblue",
    "lightskyblue",
    "deepskyblue",
    "dodgerblue",
    "cornflowerblue",
    "royalblue",
    "blue",
    "mediumblue",
    "darkblue",
    "navy",
    "midnightblue",
    "cornsilk",
    "blanchedalmond",
    "bisque",
    "navajowhite",
    "wheat",
    "burlywood",
    "tan",
    "rosybrown",
    "sandybrown",
    "goldenrod",
    "darkgoldenrod",
    "peru",
    "chocolate",
    "saddlebrown",
    "sienna",
    "brown",
    "maroon",
    "white",
    "snow",
    "honeydew",
    "mintcream",
    "azure",
    "aliceblue",
    "ghostwhite",
    "whitesmoke",
    "seashell",
    "beige",
    "oldlace",
    "floralwhite",
    "ivory",
    "antiquewhite",
    "linen",
    "lavenderblush",
    "mistyrose",
    "gainsboro",
    "lightgray",
    "silver",
    "darkgray",
    "gray",
    "dimgray",
    "lightslategray",
    "slategray",
    "darkslategray",
    "black"
];

interface TableData {
    coords1: LatLngLiteral,
    coords2: LatLngLiteral,
    color: string
}

interface RowData {
    idx: number,
    data: TableData
}

const initialTableRows: RowData[] = [{ idx: 0, data: { coords1: { lat: 0.00, lng: 0.00 }, coords2: { lat: 0.00, lng: 0.00 }, color: "red" } }];

const TablePage: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [tableData, setTableData] = useState<RowData[]>(initialTableRows)
    const [refresh, setRefresh] = useState<boolean>(false);

    function arrayToObject(arrayData: RowData[]) {
        let object = new Object();
        arrayData.forEach((e: RowData) => {
            object = { ...object, [e.idx]: e.data }
        });
        return object;
    }

    function getDataFromIndex(idx: number) {
        return tableData.filter(data => data, idx === idx)[0].data;
    }

    function setProp(row: RowData, prop: string, value: any) {
        if (prop === 'coords1.lat') return { ...row, data: { ...row.data, coords1: { ...row.data.coords1, lat: value } } };
        if (prop === 'coords1.lng') return { ...row, data: { ...row.data, coords1: { ...row.data.coords1, lng: value } } };
        if (prop === 'coords2.lat') return { ...row, data: { ...row.data, coords2: { ...row.data.coords2, lat: value } } };
        if (prop === 'coords2.lng') return { ...row, data: { ...row.data, coords2: { ...row.data.coords2, lng: value } } };
        if (prop === 'color') return { ...row, data: { ...row.data, color: value } };
        else return initialTableRows[0];
    }

    function setDataFromIndex(idx: number, e: any, prop: string) {
        setTableData((prev: RowData[]) => {
            let currentIndex = prev.findIndex((a) => a.idx === idx);
            const currentRow = prev[currentIndex];
            let updatedRow = setProp(currentRow, prop, e.target.value);
            const newRows = [...prev];
            newRows[currentIndex] = updatedRow;
            console.log(idx);
            return newRows;
        })
    }

    function controlQuery() {
        if (tableData.length === 1 && tableData[0].data.coords1 === initialTableRows[0].data.coords1 &&
            tableData[0].data.coords2 === initialTableRows[0].data.coords2)
            return { data: undefined };
        else return { data: JSON.stringify(tableData) }
    }

    function clearTable() {
        setRefresh(prev => { return !prev });
    }

    function prefillTable() {
        setTableData([
            { idx: 0, data: { color: 'red', coords1: { lat: 43.138868894503666, lng:13.068729789615748 }, coords2: { lat: 43.14022513585687, lng: 13.067773901196542 } } },
            { idx: 1, data: { color: 'green', coords1: { lat: 43.137333442955935, lng: 13.074103310978453 }, coords2: { lat: 43.14006985131974, lng: 13.072155473231529 } } },
            { idx: 2, data: { color: 'blue', coords1: { lat: 43.13677551942528, lng: 13.065856857713438 }, coords2: { lat: 43.13721388834219, lng: 13.068623879559535 } } }
        ]);
        setCount(2);
    }

    useEffect(() => {
        setTableData(initialTableRows);
        return () => {
            setTableData(initialTableRows);
        }
    }, [refresh])

    return (
        <main>
            {/* <main className="flex flex-col items-center text-center justify-center m-auto pt-6"> */}
            <h1 className='text-center text-2xl font-bold pt-8'>TablePage</h1>
            <div className='flex flex-col items-center justify-center h-screen pb-52'>
                <table className="table-auto border-2 border-sky-700">
                    <caption className='text-center text-lg font-bold pb-4' >Fill table with your Points</caption>
                    <thead>
                        <tr className='border-b-2 border-sky-600'>
                            <th className='border-r-2 border-sky-700'>Point 1 Lat</th>
                            <th className='border-r-2 border-sky-700'>Point 1 Lng</th>
                            <th className='border-r-2 border-sky-700'>Point 2 Lat</th>
                            <th className='border-r-2 border-sky-700'>Point 2 Lng</th>
                            <th className='border-r-2 border-sky-700'>Square Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map(row => {
                            return <tr className='border-b-2 border-sky-600' key={row.idx}>
                                <td className='p-2 border-r-2 border-sky-700'>
                                    <ClassicInput
                                        name="lat"
                                        value={row.data.coords1.lat}
                                        setValue={(e: any) => {
                                            setDataFromIndex(row.idx, e, 'coords1.lat');
                                            console.log(tableData);
                                        }}
                                        label="lat"
                                        type="number"
                                        placeholder="lat point"
                                        min="0"
                                    />
                                </td>
                                <td className='p-2 border-r-2 border-sky-700'>
                                    <ClassicInput
                                        name="lng"
                                        value={row.data.coords1.lng}
                                        setValue={(e: any) => {
                                            setDataFromIndex(row.idx, e, 'coords1.lng');
                                            console.log(tableData);
                                        }}
                                        label="lon"
                                        type="number"
                                        placeholder="lng point"
                                        min="0"
                                    />
                                </td>
                                <td className='p-2 border-r-2 border-sky-700'>
                                    <ClassicInput
                                        name="lat"
                                        value={row.data.coords2.lat}
                                        setValue={(e: any) => {
                                            setDataFromIndex(row.idx, e, 'coords2.lat');
                                            console.log(tableData);
                                        }}
                                        label="lat"
                                        type="number"
                                        placeholder="lat point"
                                        min="0"
                                    />
                                </td>
                                <td className='p-2 border-r-2 border-sky-700'>
                                    <ClassicInput
                                        name="lng"
                                        value={row.data.coords2.lng}
                                        setValue={(e: any) => {
                                            setDataFromIndex(row.idx, e, 'coords2.lng');
                                            console.log(tableData);
                                        }}
                                        label="lon"
                                        type="number"
                                        placeholder="lng point"
                                        min="0"
                                    />
                                </td>
                                <td className='p-2 border-r-2 border-sky-700'>
                                    <ClassicInput
                                        name="color"
                                        value={row.data.color}
                                        setValue={(e: any) => {
                                            setDataFromIndex(row.idx, e, 'color');
                                            console.log(tableData);
                                        }}
                                        label='color'
                                        type="text"
                                        placeholder="square's color"
                                        min=""
                                    />
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
                <div className='flex flex-row justify-center items-center'>
                    <button className='font-medium text-black hover:text-white ring-2 ring-yellow-600 hover:bg-yellow-600 p-2 rounded-lg mx-1 my-4' onClick={() => {
                        clearTable();
                        console.log(tableData);
                    }}>Refresh</button>
                    <button className='font-medium text-black hover:text-white ring-2 ring-indigo-600 hover:bg-indigo-600 p-2 rounded-lg mx-1 my-4' onClick={() => {
                        prefillTable();
                        console.log(tableData);
                    }}>Prefill</button>
                    <button className='font-medium text-black hover:text-white ring-2 ring-green-600 hover:bg-green-600 p-2 rounded-lg mx-1 my-4' onClick={() => {
                        setTableData((prev) => {
                            const newRows = [...prev];
                            setCount((prev) => { return prev + 1 });
                            newRows.push({ idx: count + 1, data: initialTableRows[0].data });
                            return newRows;
                        });
                        console.log(tableData);
                    }}>Row +</button>
                    <button className='font-medium text-black hover:text-white ring-2 ring-red-700 hover:bg-red-700 p-2 rounded-lg mx-1 my-4' disabled={tableData.length <= 1} onClick={() => {
                        (tableData.length > 1) && setTableData((prev) => {
                            const newRows = [...prev];
                            newRows.pop();
                            setCount((prev) => { return prev - 1 });
                            return newRows;
                        });
                        console.log(tableData);
                    }}>Row -</button>
                    <Link
                        href={{
                            pathname: '/map',
                            query: controlQuery()
                        }}
                    >
                        <button className='font-medium text-black hover:text-white ring-2 ring-sky-600 hover:bg-sky-600 p-2 rounded-lg mx-1 my-4'>
                            Apply Squares
                        </button>
                    </Link>
                </div>
            </div>
        </main>

    )
}

export default TablePage