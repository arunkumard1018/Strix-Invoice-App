
function page() {
  return (
    <div className='space-y-5 flex-col items-center justify-center mt-10'>
        <div className='text-4xl text-center  text-green-500 font-bold'>Working Fine</div>
        <p className='text-center'>Axios BASE URL : {process.env.BASE_URL}</p>
    </div>
  )
}

export default page


