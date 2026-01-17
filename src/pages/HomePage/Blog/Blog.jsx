import { useState } from "react";
import style from "./Blog.module.scss";

const allPostsData = [
	{
		id: 1,
		category: "Article",
		title: "Exactly What To Wear To Every Type Of Wedding This Summer",
		excerpt:
			'A large part of the business here is building up the "experience". Double-page spreads in magazines. Ads on TV. Product placement and sponsorship in golf tournaments, tennis matches and sailing competitions. All of this builds up your perception of the brand - and additionally, it costs money.',
		date: "21 January 2018 by guido",
		author: "guido"
	},
	{
		id: 2,
		category: "TIPS",
		title: "Exactly What To Wear To Every Type Of Wedding This Summer",
		excerpt: "When selling 70% fewer shirts, however, there are fewer shirts on the market, making it more exclusive, and therefore worth the money, for those to whom it matters. ",
		date: "21 January 2018 by guido",
		author: "elena"
	},
	{
		id: 3,
		category: "TIPS",
		title: "Exactly What To Wear To Every Type Of Wedding This Summer",
		excerpt:
			'A large part of the business here is building up the "experience". Double-page spreads in magazines. Ads on TV. Product placement and sponsorship in golf tournaments, tennis matches and sailing competitions. All of this builds up your perception of the brand - and additionally, it costs money.',
		date: "21 January 2018 by guido",
		author: "mark"
	},
	{
		id: 4,
		category: "Article",
		title: "Exactly What To Wear To Every Type Of Wedding This Summer",
		excerpt: "When selling 70% fewer shirts, however, there are fewer shirts on the market, making it more exclusive, and therefore worth the money, for those to whom it matters. ",
		date: "21 January 2018 by guido",
		author: "guido"
	}
];

export const Blog = () => {
	const [posts, setPosts] = useState(allPostsData);

	return (
		<section id="blog" className={style.blog}>
			<div className={style.blog__container}>
				<h1 className={style.blog__title}>Blog</h1>

				<ul className={style.blog__list}>
					{posts.map((post) => (
						<li className={style.blog__item} key={post.id}>
							<h2 className={style.blog__title_item}>{post.category}</h2>
							<h3 className={style.blog__subtitle_item}>{post.title}</h3>
							<p className={style.blog__info_item}>{post.excerpt}</p>
							<div className={style.blog__line_item}></div>
							<p className={style.blog__date_item}>
								{post.date} by {post.author}
							</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};
