import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'

export const ProductPageTemplate = ({
  title,
  heading,
  intro,
}) => (
  <section className="section section--gradient">
    <div className="container">
        <div className="columns">
          <div className="column is-10">
            <h1 className="title is-size-3 has-text-weight-bold is-bold-light">
              {heading}
            </h1>
            <p>Ο Σύλλογός μας ευχαριστεί θερμά όλους τους χορηγούς που παρέχουν απλόχερα υπηρεσίες και προϊόντα στο σχολείο μας.</p>
            <p>Ως ελάχιστη ανταπόδοση προς τους χορηγούς μας σε καθέναν από αυτούς παρέχεται:</p>
            <ul>
              <li>Επίσημη ευχαριστήρια επιστολή</li>
              <li>Καταγραφή της χορηγίας στα πρακτικά</li>
              <li>Ανάρτηση λογότυπου και σύντομου κειμένου στον ιστότοπο του Συλλόγου</li>
              <li>Εμφάνιση του λογότυπου σε σχετικές αφίσες του Συλλόγου</li>
              <li>Εμφάνιση του λογότυπου σε δημοσιεύσεις που στέλνει ο Σύλλογος στα τοπικά ειδησεογραφικά μέσα</li>
            </ul>
          </div>
        </div>
        <Features gridItems={intro.blurbs} />
      </div>
  </section>
)

ProductPageTemplate.propTypes = {
  heading: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProductPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
        }
      }
    }
  }
`
