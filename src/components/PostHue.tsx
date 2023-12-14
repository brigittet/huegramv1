import { useState } from 'react'
import Hue from './Hue'

interface Props{
    addHue: (color:string)=> void
}

const PostHue = (props:Props) => {

    const[color, setColor] = useState('')

  return (
    <div className='flex flex-row p-4 justify-evenly gap-8'>

        <div className='flex flex-col w-full p-4 gap-4 h-64 w-56' style={{backgroundColor: color}}>
            <input type="text" name="hue" className="bg-gray-100" id="hue" onChange={ (event) => setColor(event.target.value) } />
            <a href="#" onClick={ () => props.addHue(color)  } className="btn bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-600 text-center">Post</a>
        </div>

        <Hue hue={ {color, username:"kaylee", likes:3, isLiked: false}}  />

    </div>
  )
}

export default PostHue