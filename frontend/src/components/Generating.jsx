
import { loading } from '../assests'

const Generating = ( { className}) => {
  return (
    <div className={`flex items-center h-[3.5rem] px-6 bg-n-8 rounded-[1.7rem] ${className || ""} text-base`}>
      <img className='w-5 h-5 mr-4' src={loading} alt='Loading' />
      Code generating
    </div>
  )
}

export default Generating
