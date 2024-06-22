import React, { useEffect, useState } from 'react';
import { fetchFixtures } from '../lib/FetchData';

const CopaAmericaGroups = () => {
    const [fixturesData, setFixturesData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const id = '6fbc70180e08330e'; // Replace with the actual ID you want to fetch from dummy data
          const data = await fetchFixtures(id); // Call fetchFixtures with optional ID
          console.log('Fetched fixtures data for ID:', id, data);
          if (data) {
            setFixturesData([data]); // Set the data in state
          }
        } catch (error) {
          console.error('Error fetching fixtures:', error);
        }
      };
  
      fetchData();
    }, []); 


    return (
        <div className='pt-16 flex flex-col justify-center items-center w-screen px-2 pb-12'>
            <h1 className='text-white text-2xl' >Copa America Groups</h1>
            <div className='flex flex-col gap-16 pt-12' >
                <div className='flex flex-col md:flex-row gap-12 justify-center items-center'>
                    <div className='' >

                        {/* Group A */}
                        <h2 className='flex justify-center' >Group A</h2>
                        <table className='table'>
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Team</th>
                                    <th>Player</th>

                                </tr>
                            </thead>
                            <tbody>

                                {/* row 1 */}
                                <tr>
                                    <th>1</th>
                                    <td>Argentina</td>
                                    <td>Gio</td>
                                </tr>


                                {/* row 2 */}
                                <tr>
                                    <th>2</th>
                                    <td>Peru</td>
                                    <td>Luis</td>

                                </tr>


                                {/* row 3 */}
                                <tr>
                                    <th>3</th>
                                    <td>Chile</td>
                                    <td>Ish</td>

                                </tr>

                                {/* row 4 */}
                                <tr>
                                    <th>4</th>
                                    <td>Canada</td>
                                    <td>Jay</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>


                    {/* Group B */}
                    <div>
                        <h2 className='flex justify-center'>Group B</h2>
                        <table className='table'>
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Team</th>
                                    <th>Player</th>

                                </tr>
                            </thead>
                            <tbody>

                                {/* row 1 */}
                                <tr>
                                    <th>1</th>
                                    <td>Mexico</td>
                                    <td>Gio</td>
                                </tr>


                                {/* row 2 */}
                                <tr>
                                    <th>2</th>
                                    <td>Ecuador</td>
                                    <td>Tutus</td>

                                </tr>


                                {/* row 3 */}
                                <tr>
                                    <th>3</th>
                                    <td>Venezuela</td>
                                    <td>Ish</td>

                                </tr>

                                {/* row 4 */}
                                <tr>
                                    <th>4</th>
                                    <td>Jamaica</td>
                                    <td>None</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>





                    {/* Group C */}
                    <div>
                        <h2 className='flex justify-center'>Group C</h2>
                        <table className='table'>
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Team</th>
                                    <th>Player</th>

                                </tr>
                            </thead>
                            <tbody>

                                {/* row 1 */}
                                <tr>
                                    <th>1</th>
                                    <td>USA</td>
                                    <td>Ish</td>
                                </tr>


                                {/* row 2 */}
                                <tr>
                                    <th>2</th>
                                    <td>Uruguay</td>
                                    <td>Tutus</td>

                                </tr>


                                {/* row 3 */}
                                <tr>
                                    <th>3</th>
                                    <td>Panama</td>
                                    <td>Tutus</td>

                                </tr>

                                {/* row 4 */}
                                <tr>
                                    <th>4</th>
                                    <td>Bolivia</td>
                                    <td>Jay</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>


                    {/* Group D */}
                    <div>
                        <h2 className='flex justify-center'>Group D</h2>
                        <table className='table'>
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Team</th>
                                    <th>Player</th>

                                </tr>
                            </thead>
                            <tbody>

                                {/* row 1 */}
                                <tr>
                                    <th>1</th>
                                    <td>Brazil</td>
                                    <td>Luis</td>
                                </tr>


                                {/* row 2 */}
                                <tr>
                                    <th>2</th>
                                    <td>Colombia</td>
                                    <td>Jay</td>

                                </tr>


                                {/* row 3 */}
                                <tr>
                                    <th>3</th>
                                    <td>Paraguay</td>
                                    <td>Gio</td>

                                </tr>

                                {/* row 4 */}
                                <tr>
                                    <th>4</th>
                                    <td>Costa Rica</td>
                                    <td>Luis</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>






                </div>



               
            </div>

        </div>
    )
}

export default CopaAmericaGroups