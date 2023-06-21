"use client"
import ClassicInput from '@/components/ClassicInput'
import { LatLngLiteral } from 'leaflet'
import React, { useEffect, useState } from 'react'


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

const TablePage: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [TableData, setTableData] = useState<TableData[]>([])

    useEffect(() => {
      return () => {
        setTableData([]);
      }
    }, [])
    


    return (
        <main>
            {/* <main className="flex flex-col items-center text-center justify-center m-auto pt-6"> */}
            <h1 className='text-center text-2xl font-bold pt-8'>TablePage</h1>
            <div className='flex items-center justify-center h-screen pb-52'>
                <table className="table-auto">
                    <caption className='text-center text-lg font-bold pb-4' >Fill table with your Points</caption>
                    <thead>
                        <tr>
                            <th>Point 1</th>
                            <th>Point 2</th>
                            <th>Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <td>
                                <ClassicInput
                                    name="lat"
                                    value={}
                                    setValue={}
                                    label="lat"
                                    type="number"
                                    placeholder="lat point"
                                    min="0"
                                />
                                <ClassicInput
                                    name="lng"
                                    value={}
                                    setValue={}
                                    label="lon"
                                    type="number"
                                    placeholder="lng point"
                                    min="0"
                                />
                            </td>
                            <td>
                                <ClassicInput
                                    name="lat"
                                    value={}
                                    setValue={}
                                    label="lat"
                                    type="number"
                                    placeholder="lat point"
                                    min="0"
                                />
                                <ClassicInput
                                    name="lng"
                                    value={}
                                    setValue={}
                                    label="lon"
                                    type="number"
                                    placeholder="lng point"
                                    min="0"
                                />
                            </td>
                            <td>
                                <ClassicInput
                                    name="color"
                                    value={}
                                    setValue={}
                                    label="color"
                                    type="text"
                                    placeholder="square's color"
                                    min=""
                                />
                            </td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </main>

    )
}

export default TablePage