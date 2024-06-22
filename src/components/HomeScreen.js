import {React,} from 'react'
import GIO from '../assets/GIO.jpeg'
import JAY from '../assets/JAY.jpeg'
import LOU from '../assets/LOU.jpeg'
import RATON from '../assets/RATON.jpeg'
import ISH from '../assets/ISH.jpeg'
// import { fetchFixtures } from '../lib/FetchData'

const HomeScreen = () => {

  // const [fixturesData, setFixturesData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const id = '14e1ebd6d992dbd5'; // Replace with the actual ID you want to fetch
  //       const data = await fetchFixtures(id);
  //       console.log('Fetched fixtures data for ID:', id, data);
  //       setFixturesData(data.result); // Assuming 'result' is the array of fixtures you want to display
  //     } catch (error) {
  //       console.error('Error fetching fixtures:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  
  return (
    <div className='h-screen pt-8' >

      <div className='flex justify-center items-center w-screen px-2 '>


        <div className='md:w-4/5'>

          <table className='table'>
            {/* head */}
            <thead>
              <tr className='text-white'>
                <th>Player</th>
                <th>Euros</th>
                <th>Copa America</th>
              </tr>
            </thead>
            <tbody>
              {/* Gio */}
              <tr>
                <td>
                  <div className='flex items-center gap-3'>
                    <div className='avatar'>
                      <div className='mask mask-squircle w-12 h-12'>
                        <img src={GIO} alt='Avatar Tailwind CSS Component' />
                      </div>
                    </div>
                    <div>
                      <div className='font-bold'>Gio</div>
                    </div>
                  </div>
                </td>
                <td>
                  Germany
                  <br /> Italy <br /> Switzerland
                  <br /> Poland
                </td>
                <td>
                  Argentina <br /> Mexico <br /> Paraguay
                </td>
              </tr>

              {/* Jay*/}
              <tr>
                <td>
                  <div className='flex items-center gap-3'>
                    <div className='avatar'>
                      <div className='mask mask-squircle w-12 h-12'>
                        <img src={JAY} alt='Avatar Tailwind CSS Component' />
                      </div>
                    </div>
                    <div>
                      <div className='font-bold'>Jay</div>
                    </div>
                  </div>
                </td>
                <td>
                  Spain
                  <br /> Belgium <br /> Turkey
                  <br /> Ukrain
                </td>
                <td>
                  Colombia <br /> Canada <br /> Bolivia
                </td>
              </tr>

              {/* Lou */}
              <tr>
                <td>
                  <div className='flex items-center gap-3'>
                    <div className='avatar'>
                      <div className='mask mask-squircle w-12 h-12'>
                        <img src={LOU} alt='Avatar Tailwind CSS Component' />
                      </div>
                    </div>
                    <div>
                      <div className='font-bold'>Luis</div>
                    </div>
                  </div>
                </td>
                <td>
                  Portugal
                  <br /> Netherlands <br /> Austria
                  <br /> Scotland
                </td>
                <td>
                  Brazil <br /> Peru <br /> Costa Rica
                </td>
              </tr>

              {/* Ish */}
              <tr>
                <td>
                  <div className='flex items-center gap-3'>
                    <div className='avatar'>
                      <div className='mask mask-squircle w-12 h-12'>
                        <img src={ISH} alt='Avatar Tailwind CSS Component' />
                      </div>
                    </div>
                    <div>
                      <div className='font-bold'>Ismael</div>
                    </div>
                  </div>
                </td>
                <td>
                  England
                  <br /> Denmark <br /> Hungary
                  <br /> Serbia
                </td>
                <td>
                  USA <br /> Chile <br /> Venezuela
                </td>
              </tr>

              {/* raton */}

              <tr>
                <td>
                  <div className='flex items-center gap-3'>
                    <div className='avatar'>
                      <div className='mask mask-squircle w-12 h-12'>
                        <img src={RATON} alt='Avatar Tailwind CSS Component' />
                      </div>
                    </div>
                    <div>
                      <div className='font-bold'>Tutus</div>
                    </div>
                  </div>
                </td>
                <td>
                  France
                  <br /> Croatia <br /> Czechia
                  <br /> Georgia
                </td>
                <td>
                  Uruguay <br /> Ecuador <br /> Panama
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
