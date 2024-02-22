import React, { useState, useEffect } from 'react';
import './styles/Slider.scss';



const Panel = ({ panelInfo, dataSlider, activeID }) => {

    const panelClassName = `panel${panelInfo ? `-${panelInfo}` : ''}`;

    return (
        <aside className={panelClassName}>

        </aside>
    );

};




const Slider = ({ dataSlider, panelInfo }) => {
  const wrapperClassName = `wrapper${panelInfo ? `-${panelInfo}` : ''}`;

    // defineel background img inicial del slider
  const [activeID, setActiveID] = useState(0);
  const [wrapperStyle, setWrapperStyle] = useState({
    backgroundImage: `url('${dataSlider[0].img}')`,
    
  });


  // cambia el background del slider por el id
  const changeActive = (id) => {
    setActiveID(id);
    setWrapperStyle({ 
      backgroundImage: `url('${dataSlider[id].img}')` });
  };

  // modifica el estilo del panel.aside en funcion del panelInfo
  


  // script que define el cambio de id del slider por periodos de tiempo 
  useEffect(() => {
    const interval = setInterval(() => {
      const nextID = (activeID + 1) % dataSlider.length;
      changeActive(nextID);
    }, 4000); 

    return () => {
      clearInterval(interval); 
    };
  }, [activeID]); // Se ejecuta cada vez que activeID cambia

  const titleAnimation = activeID % 2 === 0 ? 'slideInRight' : 'slideInLeft';
  // Actualización para usar el título del slider activo
  const activeTitle = dataSlider[activeID].title; // Obtiene el título basado en activeID

  return (
    <section className={wrapperClassName} style={wrapperStyle}>
      {activeID !== undefined && (
      <Panel dataSlider={dataSlider} panelInfo={panelInfo} activeID={activeID} />
    )}

      {panelInfo === "heroHome" && <div className='overlay-wrapper'></div>}

        <h1 
          className={`title-slider ${titleAnimation}`}
          style={{ animation: `2s ${titleAnimation} ease-in-out ` }}
        >
          {activeTitle}
        </h1>
    </section>
  );
};

export default Slider;