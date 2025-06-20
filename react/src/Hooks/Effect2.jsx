import React, { useEffect, useState } from 'react'

const Effect2 = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => (res.json()))
            .then((data) => setUser(data))
    })

    return (


        <div>
            <ol>
                {user.map((data) => (
                    <>
                         
                            <p>id:{data.id}</p>
                        <p>name:{data.name}</p>
                          <p>username:{data.username}</p>
                          <p>email:{data.email}</p>
                          <p>address:{data.address.geo.lat}</p>

                        
                          
                    </>
                ))}
            </ol>
        </div>
    )
}

export default Effect2