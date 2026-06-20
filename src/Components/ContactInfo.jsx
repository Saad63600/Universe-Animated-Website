import React, { useState } from 'react'

const ContactInfo = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!username.trim() || !email.trim() || !mobile.trim()) {
            alert('Please fill in all fields.')
            return
        }

        alert('We will get you soon. Thank You')
        setUsername("")
        setEmail("")
        setMobile("")
    }

    return (
        <div className='mt-[200px] h-[550px] px-[20px] py-[50px] w-[1000px] ml-[300px] hover:border-blue-700 border-2 border-red-500 rounded-3xl ' >
            <h1 className='text-4xl text-center'>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div className='flex mt-[50px] ml-[80px] '>
                    <label className='text-2xl mt-[10px]' >Name</label>
                    <input value={username} onChange={(e) => { setUsername(e.target.value) }} className='font-bold border-2 px-3 text-2xl py-3 rounded-2xl w-[80%] ml-[20px]' type="text" placeholder='Enter your name' />
                </div>
                <div className='flex mt-[50px] ml-[80px] '>
                    <label className='text-2xl mt-[10px]' >Email</label>
                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} className='font-bold border-2 px-3 text-2xl py-3 rounded-2xl w-[80%] ml-[20px]' type="text" placeholder='Enter your Email' />
                </div>
                <div className='flex mt-[50px] ml-[78px] '>
                    <label className='text-2xl mt-[10px]' >Mobile </label>
                    <input value={mobile} onChange={(e) => { setMobile(e.target.value) }} className='font-bold border-2 px-3 text-2xl py-3 rounded-2xl w-[80%] ml-[20px]' type='text' placeholder='Enter your Mobile number' />
                </div>
                <button type='submit' className='h-fit cursor-pointer active:scale-90 w-full bg-yellow-400 py-3 text-2xl font-extrabold mt-[30px] text-black rounded-4xl'>Submit</button>
            </form>
        </div>
    )
}

export default ContactInfo
