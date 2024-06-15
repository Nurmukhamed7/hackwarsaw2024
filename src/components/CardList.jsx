import React, { useEffect, useState } from 'react'
import cardData from '../cardData.json'

const Card = ({ imgSrc, title, description }) => {
	const initialCountdown = 24 * 60 * 60 // 24 hours in seconds
	const [countdown, setCountdown] = useState(null)
	const [isCountingDown, setIsCountingDown] = useState(false)

	useEffect(() => {
		let timer
		if (isCountingDown && countdown > 0) {
			timer = setInterval(() => {
				setCountdown(prevCountdown => prevCountdown - 1)
			}, 1000)
		} else if (countdown === 0) {
			setIsCountingDown(false)
			setCountdown(null)
		}
		return () => clearInterval(timer)
	}, [isCountingDown, countdown])

	const handleBuyNowClick = () => {
		setCountdown(initialCountdown)
		setIsCountingDown(true)
	}

	const formatTime = timeInSeconds => {
		const hours = Math.floor(timeInSeconds / 3600)
		const minutes = Math.floor((timeInSeconds % 3600) / 60)
		const seconds = timeInSeconds % 60
		return `${hours}h ${minutes}m ${seconds}s`
	}

	return (
		<div className='card card-compact w-96 bg-base-100 shadow-xl'>
			<figure>
				<img src={imgSrc} alt={title} />
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>{title}</h2>
				<p>{description}</p>
				<div className='card-actions justify-end'>
					<button
						className={`btn ${isCountingDown ? 'btn-warning' : 'btn-primary'}`}
						onClick={handleBuyNowClick}
						disabled={isCountingDown}
					>
						{isCountingDown
							? `Reserved till ${formatTime(countdown)}`
							: 'Reserve'}
					</button>
				</div>
			</div>
		</div>
	)
}

const CardList = () => {
	return (
		<div className='flex flex-wrap justify-center gap-4'>
			{cardData.map(card => (
				<Card key={card.id} {...card} />
			))}
		</div>
	)
}

export default CardList
