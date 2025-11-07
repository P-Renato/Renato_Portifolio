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
    if (e.propertyName.includes('flex')) {
      setActivePanel(openPanel === panelNumber ? panelNumber : null);
    }
  };

  return (
    <section className='w-screen h-screen flex justify-center items-center p-6'>
      <nav className='grid grid-cols-2 grid-rows-2 w-[60em] h-[43em] border-2 border-black *:m-4 *:p-4'>
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
          <p>Content 1</p>
        </div>
        <div 
          className={`${styles.panel} ${styles.panel2} ${
            openPanel === 2 ? styles.open : ''
          } ${activePanel === 2 ? styles.openActive : ''}`}
          onClick={() => handleClick(2)}
          onTransitionEnd={(e) => handleTransitionEnd(e, 2)}
        >
          <p className='text-orange-700 text-3xl border'>Content 2</p>
          <p className='text-violet-700 text-3xl border'>Content 2-3</p>
          <p className='text-sky-700 text-3xl border'>Content 2-4</p>
        </div>
        <div 
          className={`${styles.panel} ${styles.panel3} ${
            openPanel === 3 ? styles.open : ''
          } ${activePanel === 3 ? styles.openActive : ''}`}
          onClick={() => handleClick(3)}
          onTransitionEnd={(e) => handleTransitionEnd(e, 3)}
        >
          <p>Content 3</p>
        </div>
        <div 
          className={`${styles.panel} ${styles.panel4} ${
            openPanel === 4 ? styles.open : ''
          } ${activePanel === 4 ? styles.openActive : ''}`}
          onClick={() => handleClick(4)}
          onTransitionEnd={(e) => handleTransitionEnd(e, 4)}
        >
          <p>Content 4</p>
        </div>
      </nav>
    </section>
  );
}

export default Page;