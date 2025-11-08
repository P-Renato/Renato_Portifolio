'use client';

import { useState } from 'react';
import clsx from 'clsx'; 
import styles from './projects.module.css';

function Page() {
  const [openPanel, setOpenPanel] = useState<number | null>(null);
  const [activePanel, setActivePanel] = useState<number | null>(null);

  const handleClick = (panelNumber: number) => {
    console.log('Clicked panel:', panelNumber, 'Currently open:', openPanel);
    setOpenPanel(openPanel === panelNumber ? null : panelNumber);
  };
  console.log('Current open panel:', openPanel);

  const handleTransitionEnd = (e: React.TransitionEvent, panelNumber: number) => {
    console.log('Transition ended:', e.propertyName);
    if (['flex', 'flex-grow', 'flex-basis'].some(p => e.propertyName.includes(p))) {
      setActivePanel(openPanel === panelNumber ? panelNumber : null);
    }
  };

  return (
    <section className=' flex justify-center items-center '>
      <nav className=' flex flex-wrap w-screen h-screen  *:border-8 *:border-zinc-950  overflow-hidden'>
        <div 
          className={clsx(
            styles.panel, 
            styles.panel1,
            openPanel === 1 && styles.open,
            activePanel === 1 && styles.openActive
          )}
          onClick={() => handleClick(1)}
          onTransitionEnd={(e) => handleTransitionEnd(e, 1)}
        >
          <div>
            <p className='text-orange-700 text-3xl w-2xl bg-white p-3  '>A memory game made for children with audio and text in several languages. Perfect for multi cultural families where children play whilst learning</p>
          </div>
          <div className=''>
            <p className='text-violet-700 text-3xl bg-white p-3 '>Click</p> 
          </div>
          <div>
            <p className='text-sky-700 text-3xl bg-white p-3 '>Content 1-4</p>
          </div>

        </div>
        <div 
          className={clsx(
            styles.panel,
            styles.panel2, 
            openPanel === 2 && styles.open,
            activePanel === 2 && styles.openActive
            )}
          onClick={() => handleClick(2)}
          onTransitionEnd={(e) => handleTransitionEnd(e, 2)}
        >
          <div>
            <p className='text-orange-700 text-3xl '>Content 2</p>
          </div>
          <div>
            <p className='text-violet-700 text-3xl bg-white p-3 '>anywhere</p>
          </div>
          <div>
            <p className='text-sky-700 text-3xl '>Content 2-4</p>
          </div>
        </div>
        <div 
          className={clsx(
            styles.panel,
            styles.panel3, 
            openPanel === 3 && styles.open,
            activePanel === 3 && styles.openActive
            )}
          onClick={() => handleClick(3)}
          onTransitionEnd={(e) => handleTransitionEnd(e, 3)}
        >
          <div>
             <p className='text-orange-700 text-3xl '>Content 3</p>
          </div>
          <div>
            <p className='text-violet-700 text-3xl bg-white p-3'>to see</p>
          </div>
          <div>
            <p className='text-sky-700 text-3xl '>Content 3-4</p>
          </div>

        </div>
        <div 
          className={clsx(
            styles.panel,
            styles.panel4, 
            openPanel === 4 && styles.open,
            activePanel === 4 && styles.openActive
            )}
          onClick={() => handleClick(4)}
          onTransitionEnd={(e) => handleTransitionEnd(e, 4)}
        >
          <div>
            <p className='text-orange-700 text-3xl '>Content 4</p>
          </div>
          <div>
            <p className='text-violet-700 text-3xl bg-white p-3'>more</p>
          </div>
          <div>
            <p className='text-sky-700 text-3xl '>Content 4-4</p>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Page;