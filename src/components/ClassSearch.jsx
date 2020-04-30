import React from 'react'


export default function ClassSearch() {

  return (
    <>

    <form onSubmit={submitHandler} >

      <label htmlFor="instructor">Instructor Name
        <input name='instructor' type="text" id='instructor' className='' 
          placeholder='Enter Name' onChange={changeHandler} />
      </label>



    </form>

    </>
  )
}