import React from "react"
import "./sideTOC.css"
import { Link } from "gatsby"

export default ({ categorySlug, categoryTitle, categoryPosts }) => {
  return (
    <div className="article-toc">
      <ul className="toc">
        <li className="toc-header">
          <Link to={`/doc/${categorySlug}`}>{categoryTitle}</Link>
        </li>
        <li>
          <ul className="toc-ul">
            {categoryPosts.map(postTitles => (
              <Link
                to={`/doc/${categorySlug}/${postTitles.slug}`}
                activeClassName="toc-active"
                className="toc-content"
                style={{ textDecoration: "none" }}
              >
                {postTitles.title}
              </Link>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  )
}
