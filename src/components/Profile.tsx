import './Palette.css'



const Profile = () => {
  return (
    <div className='flex flex-col border-2 p-8 items-center text-cyan-950'>

        

        <div className="palette">
          <div style={{ backgroundColor: '#ff2299'}}></div>
          <div style={{ backgroundColor: '#ee2299'}}></div>
          <div style={{ backgroundColor: '#dd2299'}}></div>
          <div style={{ backgroundColor: '#cc2299'}}></div>
          <div style={{ backgroundColor: '#bb2299'}}></div>
          
          <div style={{ backgroundColor: '#B945E2'}}></div>
          <div style={{ backgroundColor: '#E245E2'}}></div>
          <div style={{ backgroundColor: '#EF4BC1'}}></div>
          <div ></div>

        </div>

        <h1 className='text-2xl p-2'>kavery</h1>
        <p>58 likes</p>
        <p>6 hues</p>
        {/* <div className="flex w-1/2">
            <img src={kaylee} alt="" className='rounded-full'/>
        </div> */}

    </div>
  )
}

export default Profile