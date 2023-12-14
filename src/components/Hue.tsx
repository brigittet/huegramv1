import HueObject from "../HueObject";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

interface Props {
  hue: HueObject,
  toggleLike?: (id?:number)=> void
}

function getTextColor(backgroundColor:string): string
{
  if(backgroundColor){
    return "white";
  }
  else {
    return "black ";
  }
}

const Hue = ({hue, toggleLike}: Props) => {
  return (
    <div
      className="flex flex-col h-64 aspect-square rounded-3xl text-center justify-between items-center"
      style={{ backgroundColor: hue.color }}
      onClick={ ()=> toggleLike && toggleLike(hue.id)}
    >
      <p className={`text-${getTextColor(hue.color)} text-2xl opacity-80`}>{hue.color}</p>

      {/* {hue.isLiked && <span>HEART</span>}
      {!hue.isLiked && <span>NO HEART</span>} */}

      {hue.isLiked ? <FaHeart /> : <FaRegHeart /> }

      <div className="bg-black text-white flex w-full text-center justify-center p-4 rounded-b-2xl">
        <p className="text-xl">{hue.username}</p>

      </div>
    </div>
  );
};

export default Hue;
