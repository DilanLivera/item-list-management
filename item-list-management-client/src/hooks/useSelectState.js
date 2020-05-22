import {useState} from 'react';
import ItemPriority from '../constants/Priority';

const useSelectState = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue(ItemPriority.Low);
  }

  return [value, handleChange, reset];
}

export default useSelectState;