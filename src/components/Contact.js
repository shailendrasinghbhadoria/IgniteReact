import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1 className='font-bold text-2xl p-4'>Contact Us Page</h1>

        <form className='p-6 flex w-[400px] flex-wrap'>
          <input type='text' className='p-2 mb-4 border border-[1px solid #ddd] w-[100%]' placeholder='Name'/>
          <textarea type='text' className='p-2 border border-[1px solid #ddd] w-[100%]' placeholder='Message'></textarea>
          <button className='mt-4 text-white bg-blue-700 hover:bg-blue-800 p-2 rounded-md'>Submit</button>
        </form>

    </div>
  )
}

export default Contact