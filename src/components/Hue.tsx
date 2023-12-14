import HueObject from "../HueObject";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

interface Props {
  hue: HueObject,
  toggleLike?: (id?:number)=> void
}

function getTextColor(backgroundColor:string): string
{
  const r_num = Number("0x" + backgroundColor.slice(1, 3));
  const g_num = Number("0x" + backgroundColor.slice(3, 5));
  const b_num = Number("0x" + backgroundColor.slice(5, 7));

  const hue_intensity = r_num * 0.299 + g_num * 0.587 + b_num * 0.114;

  const text_color = hue_intensity > 186 ? "#000000" : "#FFFFFF";
  return text_color;
}

const Hue = ({hue, toggleLike}: Props) => {
  return (
    <div
      className="flex flex-col h-64 aspect-square rounded-3xl text-center justify-between items-center"
      style={{ backgroundColor: hue.color }}
      onClick={ ()=> toggleLike && toggleLike(hue.id)}
    >
      <p className={`text-[${getTextColor(hue.color)}] text-2xl opacity-80`}>{hue.color}</p>

      {/* {hue.isLiked && <span>HEART</span>}
      {!hue.isLiked && <span>NO HEART</span>} */}

      {hue.isLiked ? <FaHeart className="text-[${getTextColor(hue.color)}]"/> : <FaRegHeart className="text-[${getTextColor(hue.color)}]"/> }

      <div className="bg-black text-white flex w-full text-center justify-center p-4 rounded-b-2xl">
        <p className="text-xl">{hue.username}</p>

      </div>
    </div>
  );
};

export default Hue;
