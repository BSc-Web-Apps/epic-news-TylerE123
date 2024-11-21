import { Link, useMatches } from '@remix-run/react'
import { SearchBar } from '../molecules/SearchBar'
import LoginOrUserDropdown from './LoginOrUserDropdown'
import NavLogo from './NavLogo'

export default function HeaderWithSearch() {
	const matches = useMatches()
	const isOnSearchPage = matches.find(m => m.id === 'routes/users+/index')
	const searchBar = isOnSearchPage ? null : <SearchBar status="idle" />

	return (
		<header className="dark:bg-dark-primary/10 bg-primary/10 py-6">
			<nav className="container flex flex-wrap items-center justify-between gap-4 sm:flex-nowrap md:gap-8">
				<NavLogo />
				<div>
					<Link
						to="/news"
						className="text-sm font-semibold text-muted-foreground transition hover:text-foreground"
					>
						News
					</Link>
				</div>

				<div className="ml-auto hidden max-w-sm flex-1 sm:block">
					{searchBar}
				</div>
				<div className="flex items-center gap-10">
					<LoginOrUserDropdown />
				</div>
				<div className="block w-full sm:hidden">{searchBar}</div>
			</nav>
		</header>
	)
}
