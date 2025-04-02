"use client"
import BanquetsCard from './BanquetsCard'
import axios from "axios";
import { useEffect, useState } from "react";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
export default function TopBanquets() {
    const [Banquet, setBanquet] = useState([])

    const fetchBanquet = async () => {
        try {
            const { data } = await axios.get(`${baseUrl}/api/v1/banquet/fetch`)
            setBanquet(data.banquet)
        } catch (error) {
            return error
        }
    }
    useEffect(() => {
        fetchBanquet();
    }, [])
    return (
        <div className='flex flex-wrap justify-center items-center'>
            {
                Banquet.slice(0, 3).map((Banquet, i) => {
                    return (

                        <BanquetsCard key={i} Banquet={Banquet} />
                    )
                })
            }


        </div>
    )
}
