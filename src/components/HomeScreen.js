import React from 'react'
import GIO from '../assets/GIO.jpeg'
import JAY from '../assets/JAY.jpeg'
import LOU from '../assets/LOU.jpeg'
import RATON from '../assets/TUTUTS.jpeg'
import ISH from '../assets/ISH.jpeg'

const HomeScreen = () => {
  return (
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
                    <div className='text-sm opacity-50'>@El_Gordo</div>
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
                    <div className='text-sm opacity-50'>@El_Yerberito</div>
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
                    <div className='text-sm opacity-50'>@El_Seco</div>
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
                    <div className='text-sm opacity-50'>@El_Greñas</div>
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
                    <div className='text-sm opacity-50'>@El_Edgar</div>
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
  )
}

export default HomeScreen
