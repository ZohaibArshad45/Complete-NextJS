import React from 'react'
import getDataAPI from '../../../../services/page'

// const StaticDetails = async (props) => { 
// console.log(props.params.detailPage)
// const usercheck = props.params.detailsPage

const StaticDetails = async ({ params }) => {
    const data = await getDataAPI() // getDataAPI function hum ny servers (Src sy baher) ma banaya howa ha

    const usercheck = params.detailsPage
    const userID = data[usercheck - 1]

    return (
        <>
            <h1>Static User Info : </h1>
            <h1>Username : {userID.username}</h1>
            <h1>Name : {userID.name}</h1>
            <h1>Email : {userID.email}</h1>
            <h1>Address: {userID.address.suite}</h1>
            <h1>ID : {userID.id}</h1>
            <h1>ZipCode : {userID.address.zipcode}</h1>
            <h1>GEO Lat : {userID.address.geo.lat}</h1>
            <h1>GEO Lng : {userID.address.geo.lng}</h1>

        </>
    )
}

export default StaticDetails



// // ============================================
// // static side generation
// // function name bilkul same huna chahia generateStaticParams
export const generateStaticParams = async () => {
    const data = await getDataAPI() // getDataAPI function hum ny servers (Src sy baher) ma banaya howa ha

    return data.map((data) => ({ //her page return krny lia map use kry gy
        id: data.id.toString()  // id int ma hoti ha,, to is string ma convert krny ky lia tostring use kry gy
        //detailsPage: user.id.toString(), // Ensure key matches the dynamic route `[detailsPage]`

    }))

}
// // After this we need to make build
// // npm run build
