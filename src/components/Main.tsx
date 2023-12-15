import HueObject from '../HueObject'
import Hue from './Hue'
import PostHue from './PostHue'
import SearchBar from './SearchBar'


interface Props {
    hues: HueObject[],
    addHue: (color:string) => void,
    toggleLike: (id?:number)=> void

}

const Main = ({hues, addHue, toggleLike} : Props) => {
  return (
    <div className='w-full '>
      <SearchBar /> 
      {/* allHues = {hues} */}
      <div className='flex justify-center'>
      <PostHue addHue={addHue}/>
      </div>
      <div className='flex flex-wrap w-full justify-center gap-8 overflow-y-auto'>




        {hues.map( (hue) => ( 
            
            <Hue hue={hue} toggleLike={toggleLike}/>
       ))}

      </div>

    </div>
  )
}

export default Main