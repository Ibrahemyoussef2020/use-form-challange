
import { useCustomForm } from '../hooks';
import '../style/update.css';

const Update = ({updateUiProduct , id}) => {

  return (
   <button type="submit" form="edite-form" className='update' onClick={()=> updateUiProduct(id)}>
      Update
    </button>
  )
}

export default Update