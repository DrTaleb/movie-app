import { GENERAL_COTENT } from "../content/general"
import SvgIcon from "../utils/SvgIcon"

const MainLoading = () => {
  return (
    <div className='h-screen w-full bg-black flex items-center justify-center'>
        <span className='text-bold text-[30px] text-white flex items-center gap-2'>
           {GENERAL_COTENT.MAIN_TITLE} <SvgIcon name="loading" size={30}/>
        </span>
    </div>
  )
}

export default MainLoading