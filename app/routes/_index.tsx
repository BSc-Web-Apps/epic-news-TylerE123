import { type MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'
import HeroCallToAction from '#app/components/organisms/Hero/HeroCallToAction.tsx'
import NewsCard from '#app/components/organisms/NewsCard.tsx'
import { Button } from '#app/components/ui/button.tsx'
import heroImage from '~/assets/jpg/sample-hero.jpg'

export const meta: MetaFunction = () => [{ title: 'Epic News' }]

export default function Index() {
	return (
		<main className="h-full">
			<div className="">
				<HeroCallToAction image={heroImage} imageRight={true}>
					<div className="flex h-full flex-1 flex-col justify-between p-16">
						<div className="flex flex-col gap-8">
							<h2 className="text-h2">Welcome to Epic News</h2>
							<p className="text-lg">
								Keep up to date with the latest tech news.
							</p>
						</div>
						<Button asChild variant="default" size="lg">
							<Link to="/signup">Sign up</Link>
						</Button>
					</div>
				</HeroCallToAction>
			</div>

			<div className="container mx-auto flex justify-between py-8">
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
			</div>
		</main>
	)
}
