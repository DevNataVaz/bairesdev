import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';


export default function Bar() {
  return (  
    <div className='flex justify-between shadow-sm shadow-gray-400  p-3'>
      <p className="font-bold text-2xl" >Vitorino</p>
   
      <a href='/'><FontAwesomeIcon className='w-8 h-8' icon={faSearchengin} /></a>
    </div>

  );
}

