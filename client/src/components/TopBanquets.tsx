import React from 'react'
import BanquetsCard from './BanquetsCard'

export default function TopBanquets() {
    return (
        <div className='flex flex-wrap justify-center items-center'>
            <BanquetsCard />
            <BanquetsCard />
            <BanquetsCard />
            <BanquetsCard />

        </div>
    )
}
