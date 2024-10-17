import React from 'react'
import {redirect} from 'next/navigation';

const page = () => {
  const workingOnPage = false;
  if(!workingOnPage){
    redirect('/projectView');
  }
  return (
    <div className='text-center'>Welcome Page</div>
  )
}

export default page