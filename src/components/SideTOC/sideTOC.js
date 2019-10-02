import React from "react"
import "./sideTOC.css"
import { Link } from "gatsby"

export default ({ categorySlug, categoryTitle, categoryPosts }) => {

 function compare(a, b) {
    const titleA = a.title.toUpperCase(),
      titleB = b.title.toUpperCase()

    let comparison = 0

    if (titleA > titleB) {
      comparison = 1
    } else if (titleA < titleB) {
      comparison = -1
    }
    return comparison
  }

  const sortedCategorys = categoryPosts.sort(compare)


  return (
    <div className="article-toc">
      <ul className="toc">
        <li className="toc-header">
          <Link to={`/doc/${categorySlug}`}>{categoryTitle}</Link>
        </li>
        <li>
          <ul className="toc-ul">
            {sortedCategorys.map(postTitles => (
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
