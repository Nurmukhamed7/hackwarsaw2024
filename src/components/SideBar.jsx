import { BedDouble, DiscAlbum, HardHat, Lamp, Sofa, Tv } from 'lucide-react'
import CardList from './CardList'

const navigationItems = [
	{ icon: Tv, text: 'TV' },
	{ icon: Lamp, text: 'Lamps' },
	{ icon: Sofa, text: 'Sofas' },
	{ icon: HardHat, text: 'Kaski' },
	{ icon: BedDouble, text: 'Beds' },
	{ icon: DiscAlbum, text: 'Stereo' },
]

const SideBar = () => {
	return (
		<div className='flex overflow-hidden bg-white rounded-lg'>
			<div className='hidden md:flex md:flex-shrink-0'>
				<div className='flex flex-col w-64'>
					<div className='flex flex-col flex-grow pt-5 overflow-y-auto bg-white border-r border-gray-50'>
						<div className='flex flex-col items-center flex-shrink-0 px-4'>
							<a
								className='px-8 text-left focus:outline-none'
								href='/groups/sidebar/'
							>
								<img
									className='block tracking-tighter transition cursor-pointer hover:text-gray-900 pt-5'
									src='../../src/assets/SwapNovo.svg'
									alt='SwapNovoLogo'
								/>
							</a>
							<button className='hidden rounded-lg focus:outline-none focus:shadow-outline'>
								<svg
									fill='currentColor'
									viewBox='0 0 20 20'
									className='w-6 h-6'
								>
									<path
										fillRule='evenodd'
										d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
										clipRule='evenodd'
									></path>
									<path
										fillRule='evenodd'
										d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
										clipRule='evenodd'
									></path>
								</svg>
							</button>
						</div>
						<div className='flex flex-col flex-grow px-4 mt-5'>
							<nav className='flex-1 space-y-1 bg-white'>
								<ul>
									{navigationItems.map((item, index) => (
										<li key={index}>
											<a
												className='inline-flex items-center w-full px-4 py-2 mt-1 text-base text-gray-900 transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline hover:bg-gray-50'
												href='#'
											>
												<item.icon size={16} />
												<span className='ml-4'>{item.text}</span>
											</a>
										</li>
									))}
								</ul>
							</nav>
						</div>
						<div className='flex flex-shrink-0 p-4 px-4 bg-gray-100'>
							<a href='#' className='flex-shrink-0 block w-full group'>
								<div className='flex items-center'>
									<div>
										<img
											className='inline-block rounded-full h-9 w-9'
											src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
											alt='user'
										/>
									</div>
									<div className='ml-3'>
										<p className='text-sm font-medium text-gray-900'>
											Ilon Musk
										</p>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className='flex flex-col flex-1 w-0 overflow-hidden'>
				<main className='relative flex-1 overflow-y-auto focus:outline-none'>
					<div className='py-6'>
						<div className='px-4 mx-auto max-w-7xl sm:px-6 md:px-8'>
							<h1 className='text-lg text-neutral-600'></h1>
						</div>
						<div className='px-4 mx-auto max-w-7xl sm:px-6 md:px-8'>
							{/* Put your content here */}
							<CardList />
							<div className='py-4'>
								<div className='rounded-lg bg-gray-50 h-96'></div>
							</div>
							{/* Do not cross the closing tag underneath this comment */}
						</div>
					</div>
				</main>
			</div>
		</div>
	)
}

export default SideBar
