import React from 'react'

function Experience() {
    return (
        <div>
            <div className='bg-white p-12 m-12 '>
                <h2 className='text-4xl text-blue-900 font-bold'>Experience</h2>
                <div className="grid grid-cols-4 gap-5 ">
                    <div className="left mt-5  col-span-3 p-3">
                        <h3 className='text-blue-900 text-2xl'>ABC Infotech</h3>
                        <h4 className='text-blue-900 text-xl'>Software Engineer</h4>
                        <ul className='mt-5'>
                            <li className='list-disc list-inside'>Working as a Back-end engineer in the Banking and Finance Sector.</li>
                            <li className='list-disc list-inside'>Maintaing and adding new features to an Application Portal for an Internation Bank. Tech stack includes: Java, Spring, MySQL.</li>
                        </ul>
                    </div>
                    <div className="right mt-5">
                        <h3 className='text-2xl text-end text-gray-600'>July 2021 - Now</h3>
                    </div>
                </div>
                 <div className="grid grid-cols-4 gap-5 ">
                    <div className="left mt-5  col-span-3 p-3">
                        <h3 className='text-blue-900 text-2xl'>ABC Infotech</h3>
                        <h4 className='text-blue-900 text-xl'>Software Engineer</h4>
                        <ul className='mt-5'>
                            <li className='list-disc list-inside'>Working as a Back-end engineer in the Banking and Finance Sector.</li>
                            <li className='list-disc list-inside'>Maintaing and adding new features to an Application Portal for an Internation Bank. Tech stack includes: Java, Spring, MySQL.</li>
                        </ul>
                    </div>
                    <div className="right mt-5">
                        <h3 className='text-2xl text-end text-gray-600'>July 2021 - Now</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience