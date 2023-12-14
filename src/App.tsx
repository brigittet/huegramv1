//import Menu from './components/Menu'
import Main from './components/Main'
import Profile from './components/Profile'
import { useEffect, useState } from 'react'
import HueObject from './HueObject'

function App() {

  const [hues, setHues] = useState<HueObject[]>([]);

  const [currentUser] = useState({
    username: "kavery",
    likes: 58,
    hues: [ {id:36, color:'#ffa510', username:"kavery", likes: 15}]
  });


  useEffect( ()=>
  {
    // fetch("<backend_base_url>/api/hues/")
    fetch('https://greenegunnar.pythonanywhere.com/api/hues/')
    .then(res => console.log(res))
    // .then( res => res.json() )
    // .then( data => setHues(data) ) 
  }, [])

  const addNewHue = (color:string ) => 
  {
      console.log(color)
      const newHue = {color, username: currentUser.username, id: hues.length+1 , likes:0, isLiked: false};
      setHues( [newHue, ...hues ] );
  }

  const toggleLikeForHue = (id?:number) => 
  {
      // generate new array of hues with modified hue
      const newHues = [...hues]
      const hue = newHues.find( h => h.id == id)
      if(hue){
        hue.isLiked = !hue.isLiked
        setHues( newHues )
      }
  }

  return (
    <div className='flex bg-white h-screen'>
      {/* <Menu /> */}

      <Main hues={hues} addHue = {addNewHue} toggleLike = {toggleLikeForHue}/>

      <Profile />
    </div>
  )
}

export default App
