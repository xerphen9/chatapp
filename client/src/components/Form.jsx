import React from 'react'

const Form = ({children}) => {
    return (
        <>
            <form onSubmit={handleSubmit} className='w-full p-6'>
                {children}
                {/* {
                    field.map((data, index) =>      
                        <div key={index} className='py-3'>
                            <label htmlFor={data.name} 
                                className="absolute block text-[1rem] duration-200 text-dark">
                                {data.label}
                            </label>
                            <input type={data.type}
                                    className='w-full border-0 border-b-2 border-gray outline-0 text-lg
                                               py-2.5 mt-3 px-0 bg-transparent placeholder:text-transparent 
                                               focus:border-dark'
                                    placeholder={`${data.name}`} 
                                    name={data.name}
                                    value={data.value}
                                    onChange={(e) => handleChange(e)} required />
                        </div>
                    )
                } */}
                {/* <div className='mt-5'>
                    {button}
                </div> */}
            </form>
        </>
    )
}

export default Form;