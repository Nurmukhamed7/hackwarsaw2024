import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import cardData from '../cardData.json'

const Card = ({ imgSrc, title, description, region }) => {
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
				<img className='max-h-80 min-h-80' src={imgSrc} alt={title} />
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>{title}</h2>
				<p>{description}</p>
				<div className='font-extrabold card-actions justify-end items-center'>
					<p>{region}</p>
					<button
						className={`btn ${isCountingDown ? 'btn-warning' : ''}`}
						onClick={handleBuyNowClick}
						disabled={isCountingDown}
						style={{
							backgroundColor: isCountingDown ? '#FFB566' : '#25CBCB',
							color: 'white',
						}}
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
	const [searchQuery, setSearchQuery] = useState('')
	const [filteredCards, setFilteredCards] = useState(cardData)
	const [selectedRegion, setSelectedRegion] = useState('')

	const handleSearchInputChange = event => {
		setSearchQuery(event.target.value)
	}

	const handleRegionChange = event => {
		setSelectedRegion(event.target.value)
	}

	useEffect(() => {
		const filtered = cardData.filter(card => {
			const { title, description, region } = card
			const normalizedQuery = searchQuery.trim().toLowerCase()
			const matchesQuery =
				title.toLowerCase().includes(normalizedQuery) ||
				description.toLowerCase().includes(normalizedQuery)
			const matchesRegion = selectedRegion === '' || region === selectedRegion
			return matchesQuery && matchesRegion
		})
		setFilteredCards(filtered)
	}, [searchQuery, selectedRegion])

	const uniqueRegions = [...new Set(cardData.map(card => card.region))]

	return (
		<>
			<div className='pb-4 flex gap-2'>
				<div className='flex flex-grow items-center gap-2 input input-bordered'>
					<input
						type='text'
						className='flex-grow'
						placeholder='What are you looking for?'
						value={searchQuery}
						onChange={handleSearchInputChange}
					/>
					<Search size={16} />
				</div>
				<select
					className='select select-bordered w-full max-w-xs'
					value={selectedRegion}
					onChange={handleRegionChange}
				>
					<option value=''>Select District</option>
					{uniqueRegions.map(region => (
						<option key={region} value={region}>
							{region}
						</option>
					))}
				</select>
			</div>
			<div className='flex flex-wrap justify-center gap-4'>
				{filteredCards.map(card => (
					<Card key={card.id} {...card} />
				))}
			</div>
		</>
	)
}

export default CardList
