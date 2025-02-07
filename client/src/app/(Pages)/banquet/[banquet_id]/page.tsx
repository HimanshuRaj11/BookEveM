"use client"
import { CarouselPlugin } from '@/components/ImagesCrousel'
import React from 'react'

function page({ params }: { params: any }) {

    const BanquetImg = [
        "/banquet2.jpg", "/banquet3.jpg", "/banquet4.jpg", "/banquet5.jpg", "/banquet6.jpg"
    ]

    const Banquet_id = params.banquet_id

    return (
        <div>
            <div className="flex justify-center items-center w-full">
                <CarouselPlugin BanquetImg={BanquetImg} />
            </div>

            <div className="w-full">
                .

            </div>

        </div>
    )
}

export default page