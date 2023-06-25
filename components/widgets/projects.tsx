import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
const cards = [1, 2, 3, 4, 5,6,7,8,9];
const cardVariants = {
  selected: {
    rotateY: 180,
    scale: 1.1,
    transition: { duration: .35 },
    zIndex: 10,
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px'
  },
  notSelected: (i: number) => ({
    rotateY: i * 15,
    scale: 1 - Math.abs(i * 0.15),
    x: i ? i * 50 : 0,
    opacity: 1 - Math.abs(i * .15),
    zIndex: 10 - Math.abs(i),
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
    transition: { duration: .35 }
  })
}
const Flashcards = () => {
    const [selectedCard, setSelectedCard] = useState(null) as React.ComponentState;
    const [{ 
      startX,
      startScrollLeft,
      isDragging
    }, setDragStart] = useState({ 
      startX: undefined, 
      startScrollLeft: undefined, 
      isDragging: false
    }) as React.ComponentState;
    const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    const cardRefs = useRef(new Array());
    useEffect(() => {
      const { scrollWidth, clientWidth } = containerRef.current;
      const halfScroll = (scrollWidth - clientWidth) / 2;
      containerRef.current.scrollLeft = halfScroll;
    }, [containerRef.current]); 
    const handleMouseDown = (e: { pageX: number; }) => {
      setDragStart({ 
        startX: e.pageX - containerRef.current.offsetLeft,
        startScrollLeft: containerRef.current.scrollLeft,
        isDragging: true
      });
    }
    const handleMouseMove = (e: { pageX: number; }) => {
      if (!isDragging || selectedCard) return;
      const x = e.pageX - containerRef.current.offsetLeft;
      const walk = x - startX;
      containerRef.current.scrollLeft = startScrollLeft - walk;
    }
    const selectCard = (card: number | React.SetStateAction<null>) => {
      setSelectedCard(selectedCard ? null : card);
      
      if (card && !selectedCard) {
        cardRefs.current[card as number - 1].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        }); 
      }
    }
    const handleCardMouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, card: number) => {
      if (isDragging) {
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = x - startX;
        if (Math.abs(walk) < 5) selectCard(card);
      } else selectCard(card);
    }
    return (
      <div 
        className="flashcards"
        onMouseDown={handleMouseDown}
        onMouseUp={() => setDragStart((prev: any) => ({ ...prev, isDragging: false }))}
        onMouseMove={handleMouseMove}
      >
        <div 
          className="flashcards__container" 
          ref={containerRef}
        >
          {cards.map((card, i) => (
            <motion.div 
              className="card" 
              key={card}
              ref={el => cardRefs.current.push(el)}
              onMouseUp={e => handleCardMouseUp(e, card)}
              variants={cardVariants}
              animate={selectedCard === card ? "selected" : "notSelected"}
              custom={selectedCard ? selectedCard - card : 0}
            />
          ))}
        </div>
      </div>
    )
}

export default Flashcards