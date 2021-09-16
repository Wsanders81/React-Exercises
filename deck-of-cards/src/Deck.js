import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Card from './Card';
import { v4 as uuid } from 'uuid';
import './Deck.css'
const Deck = () => {
	const [ deckId, setDeckId ] = useState('');
	const [ draw, setDraw ] = useState(false);
	const timerId = useRef(null);
	const [ cards, setCards ] = useState([]);
	useEffect(
		() => {
			async function getDeck() {
				const res = await axios.get(
					`http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
				);
				setDeckId(res.data.deck_id);
			}
			getDeck();
		},
		[ setDeckId ]
	);

	useEffect(
		() => {
			
            async function drawCard() {
                try {
                    let res = await axios.get(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
                if (res.data.remaining === 0) {
                    setDraw(false);
                    throw new Error('No more cards!');
                }
                const cardImage = res.data.cards[0].image;
                setCards((cards) => [ ...cards, { image: cardImage } ]);
            } catch (e) {
				console.error(e)
            }
        }
			if (draw && !timerId.current) {
				timerId.current = setInterval(async () => {
					await drawCard();
				}, 100);
			}

			return () => {
				clearInterval(timerId.current);
				timerId.current = null;
			};
		},
		[ draw, setDraw, deckId ]
        );

	const startAutoDraw = () => {
		setDraw((draw) => !draw);
        
	};

	return (
		<div className="Deck">
			<button onClick={startAutoDraw}>Start/Stop Deal</button>
			{cards.map((card) => <Card image={card.image} key={uuid()} />)}
		</div>
	);
};

export default Deck;
