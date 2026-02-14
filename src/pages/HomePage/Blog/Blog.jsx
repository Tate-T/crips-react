import { useSelector } from "react-redux";
import style from "./Blog.module.scss";
import { NavLink } from "react-router-dom";

export const Blog = () => {
  const posts = useSelector((state) => state.blog.posts);

  return (
    <section id="blog" className={style.blog}>
      <div className={style.blog__container}>
        <h1 className={style.blog__title}>Blog</h1>

        <ul className={style.blog__list}>
          {posts.map((post) => (
            <li className={style.blog__item} key={post.id}>
              <NavLink to="/articlepage">
                <h2 className={style.blog__title_item}>{post.category}</h2>
                <h3 className={style.blog__subtitle_item}>{post.title}</h3>
                <p className={style.blog__info_item}>{post.excerpt}</p>
                <div className={style.blog__line_item}></div>
                <p className={style.blog__date_item}>
                  {post.date} by {post.author}
                </p>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
