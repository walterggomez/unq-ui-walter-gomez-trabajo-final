import axios from 'axios'; 
import { DICTIONARY_API_URL } from '../constants/game.js';

export const validateWordInDictionary = async (word) => {
  try {    
    const response = await axios.get(DICTIONARY_API_URL, {
      params: { word: word } 
    });    
    return Boolean(response.data.exists);
  } catch (error) {    
    throw new Error('No pudimos consultar el diccionario. Intenta de nuevo.', {cause: error});
  }
};

