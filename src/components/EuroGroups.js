import React from 'react'
import BRACKET from '../assets/BRACKET.jpeg'

const EuroGroups = () => {
    return (
        <div className='pt-16 flex flex-col justify-center items-center w-screen px-2 pb-8'>

            <div className='py-12' >
                <img src={BRACKET} alt='bracket euros 2024' className='rounded-2xl h-128' />
            </div>
            <h1 className='text-white text-2xl'>Euro Groups</h1>
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
                                    <td>Germany</td>
                                    <td>Gio</td>
                                </tr>


                                {/* row 2 */}
                                <tr>
                                    <th>2</th>
                                    <td>Switzerland</td>
                                    <td>Gio</td>

                                </tr>


                                {/* row 3 */}
                                <tr>
                                    <th>3</th>
                                    <td>Hungary</td>
                                    <td>Ish</td>

                                </tr>

                                {/* row 4 */}
                                <tr>
                                    <th>4</th>
                                    <td>Scotland</td>
                                    <td>Luis</td>

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
                                    <td>Spain</td>
                                    <td>Jay</td>
                                </tr>


                                {/* row 2 */}
                                <tr>
                                    <th>2</th>
                                    <td>Italy</td>
                                    <td>Gio</td>

                                </tr>


                                {/* row 3 */}
                                <tr>
                                    <th>3</th>
                                    <td>Albania</td>
                                    <td>None</td>

                                </tr>

                                {/* row 4 */}
                                <tr>
                                    <th>4</th>
                                    <td>Croatia</td>
                                    <td>Tutus</td>

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
                                    <td>Slovenia</td>
                                    <td>None</td>
                                </tr>


                                {/* row 2 */}
                                <tr>
                                    <th>2</th>
                                    <td>Denmark</td>
                                    <td>Ish</td>

                                </tr>


                                {/* row 3 */}
                                <tr>
                                    <th>3</th>
                                    <td>Serbia</td>
                                    <td>None</td>

                                </tr>

                                {/* row 4 */}
                                <tr>
                                    <th>4</th>
                                    <td>England</td>
                                    <td>Ish</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>






                </div>



                <div className='flex flex-col md:flex-row gap-12 justify-center items-center'>
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
                                    <td>Poland</td>
                                    <td>Gio</td>
                                </tr>


                                {/* row 2 */}
                                <tr>
                                    <th>2</th>
                                    <td>Netherlands</td>
                                    <td>Luis</td>

                                </tr>


                                {/* row 3 */}
                                <tr>
                                    <th>3</th>
                                    <td>Austria</td>
                                    <td>Luis</td>

                                </tr>

                                {/* row 4 */}
                                <tr>
                                    <th>4</th>
                                    <td>France</td>
                                    <td>Tutus</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>



                    <div>

                        {/* Group E*/}
                        <h2 className='flex justify-center'>Group E</h2>
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
                                    <td>Belgium</td>
                                    <td>Jay</td>
                                </tr>


                                {/* row 2 */}
                                <tr>
                                    <th>2</th>
                                    <td>Slovenia</td>
                                    <td>None</td>

                                </tr>


                                {/* row 3 */}
                                <tr>
                                    <th>3</th>
                                    <td>Romania</td>
                                    <td>None</td>

                                </tr>

                                {/* row 4 */}
                                <tr>
                                    <th>4</th>
                                    <td>Ukrain</td>
                                    <td>Jay</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>


                    {/* Group f */}
                    <div>
                        <h2 className='flex justify-center'>Group F</h2>
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
                                    <td>Turkey</td>
                                    <td>Jay</td>
                                </tr>


                                {/* row 2 */}
                                <tr>
                                    <th>2</th>
                                    <td>Georgia</td>
                                    <td>Tutus</td>

                                </tr>


                                {/* row 3 */}
                                <tr>
                                    <th>3</th>
                                    <td>Portugal</td>
                                    <td>Luis</td>

                                </tr>

                                {/* row 4 */}
                                <tr>
                                    <th>4</th>
                                    <td>Czechia</td>
                                    <td>Tutus</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>




                </div>

            </div>


        </div>
    )
}

export default EuroGroups
