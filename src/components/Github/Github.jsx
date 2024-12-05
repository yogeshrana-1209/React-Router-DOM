import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/yogeshrana-1209')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data);
    //         })
    // }, [])

    return (
        <>
            
            <img src={data.avatar_url} alt="" />
            <div className='rounded-3xl  text-center m-4 bg-orange-600 text-white p-4 text-2xl'>
                Github Followers : {data.followers} 
                
            </div>

        </>
    )
}

export default Github

export const githubInfoLoader  = async () => {
    const response = await fetch('https://api.github.com/users/yogeshrana-1209')
    return response.json()
}
