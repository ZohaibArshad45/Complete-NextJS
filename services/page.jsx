// ------------- This is use for Static Site Generation
// u can see src => app => Learn-Static-Site-Generation-(SSG)

async function  getDataAPI(){
    const result = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await result.json()
    return data
    
    // return (await result.json())
        // return await result.json()
        // return  result.json()

    }
export default getDataAPI


// ------------------------- Also we can store function in variable ----------------
// const getDataAPI= async function  getData(){
//     const result = await fetch('https://jsonplaceholder.typicode.com/users')
//         return result.json()
//     }
// export default getDataAPI



// ------------------------- By Arrow Function ------------------------------
// // asy b bana sakhty ha, arrow function, 
// // I think arrow function hi bana chahia

// const getDataAPI = async () =>{
//     const result = await fetch('https://jsonplaceholder.typicode.com/users')
//     return result.json()
// }
// export default getDataAPI