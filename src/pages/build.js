import React from "react"
// import "./sideTOC.css"
import { graphql } from "gatsby"

const SideTOC = ({ slug }) => {
  const data = graphql`
    query CategoryAllPosts {
      categorypost: contentfulCategory(slug: {eq: "thurber-basics"}) {
        title
        slug
        post {
          title
          slug
          shortDescription
        }
      }
    }
  `

  return (
    <div className="article-toc">
      <ul className="toc">
        <li className="toc-header">{data.categoryPosts.title}</li>
        <li>
          <ul className="toc-ul">
            <li className="toc-content">Test</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}


export default SideTOC

//--------------------------------------

// import React from "react"
// import "./sideTOC.css"
// import { StaticQuery, graphql } from "gatsby"

// export default ({ category }) => (
//   <StaticQuery
//     query={
//       graphql`
//       query CategoryAllPosts {
//         categorypost: allContentfulCategory(
//           filter: { slug: { eq: "field-density-testing" } }
//         ) {
//           totalCount
//           nodes {
//             title
//             post {
//               title
//               slug
//             }
//           }
//         }
//       }
//     `}
//     render={data => (
//       <div className="article-toc">
//         <ul className="toc">
//           {data.categorypost.nodes.map(categoryTitles => (
//             <li className="toc-header">{categoryTitles.title}</li>
//           ))}
//           <li>
//             {data.categorypost.nodes.map(categoryTitles => (
//               <ul className="toc-ul">
//                 {categoryTitles.post.map(categoryPosts => (
//                   <li className="toc-content">
//                     {categoryPosts.title}
//                   </li>
//                 ))}
//               </ul>
//             ))}
//           </li>
//         </ul>
//       </div>
//     )}
//   />
// )

