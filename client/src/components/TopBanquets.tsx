import React from 'react'
import BanquetsCard from './BanquetsCard'
import { TopBanquetsList } from "../Data/Banquet"
export default function TopBanquets() {

    return (
        <div className='flex flex-wrap justify-center items-center'>
            {
                TopBanquetsList.slice(0, 3).map((Banquet, i) => {
                    return (

                        <BanquetsCard key={i} Banquet={Banquet} />
                    )
                })
            }


        </div>
    )
}
