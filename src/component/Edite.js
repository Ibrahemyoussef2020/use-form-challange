import '../style/edite.css';
import { useCustomForm} from '../hooks';
import { useWatch } from 'react-hook-form';
import { useEffect } from 'react';


const Edite = ({id , editeUiProduct}) => {

  return (
    <button type='btn' onClick={()=>editeUiProduct(id)} className='edite'>
        Edite
    </button>
  )
}

export default Edite
