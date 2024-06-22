import axios from 'axios';
import data from './DummyData';

// export const fetchFixtures = async (id) => {
//     const options = {
//         method: 'GET',
//         url: `https://soccer-football-info.p.rapidapi.com/championships/view/?i=${id}`,
//         headers: {
//             
//             'X-RapidAPI-Host': 'soccer-football-info.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await axios.request(options);
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching fixtures:', error);
//         throw error;
//     }
// };;



export const fetchFixtures = async (id = null) => {
  try {
    if (id) {
      // Simulate fetching specific data based on ID
      const dummyData = data.find(item => item.id === id);
      if (!dummyData) {
        throw new Error('Fixture not found');
      }
      return dummyData;
    } else {
      // Return entire dummy data array if no ID is specified
      return data;
    }
  } catch (error) {
    console.error('Error fetching fixtures:', error);
    throw error;
  }
};
