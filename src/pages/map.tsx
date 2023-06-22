import './style.css';
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { LatLngLiteral } from 'leaflet';
import { useSearchParams } from 'next/navigation';
const Map = dynamic(() => import('@/components/Map'), { ssr: false });

interface TableData {
    coords1: LatLngLiteral,
    coords2: LatLngLiteral,
    color: string
}

interface RowData {
    idx: number,
    data: TableData
}

const MapPage: React.FC = () => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const [data, setData] = useState<RowData[]>([])
    const [renderMap, setRenderMap] = useState<boolean>(false)


    useEffect(() => {
    setTimeout(() => setRenderMap(true), 20);
    if(router.query.data!==undefined){
        console.log();
        const currentData = JSON.parse(router.query.data as string);
        setData(currentData);
    }
      return () => {
        setRenderMap(false);
        setData([])
      }
    }, [])
    

    return (
        <>
            <Link href='/table' className='flex flex-row items-center justify-start  ml-20 mt-12'>
                <button className='font-medium text-black hover:text-white ring-2 ring-sky-600 hover:bg-sky-600 p-2 rounded-lg mx-1 mt-4'
                    onClick={() => {
                        const currentData = router?.query?.data && JSON.parse(router?.query?.data as string);
                        currentData && setData(currentData);
                        currentData && console.log(currentData);
                    }}>
                    {"<--"} Table
                </button>
            </Link>
            <main className="flex flex-col items-center justify-between px-20 pt-8">
                {renderMap && <Map data={data}/>}
            </main>
        </>
    )
}

export default MapPage