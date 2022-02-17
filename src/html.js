import React from "react"
import PropTypes from "prop-types"

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <footer className="container">
            <hr/>
            <p>Copyright &copy; 2020, All rights reserved | <a href="/rss.xml">RSS</a> | <a href="http://eepurl.com/gfvuAH" target="_blank">Newsletter</a> | <a href="https://github.com/enato/parents" target="_blank">Πηγαίος κώδικας στο GitHub</a> | <a href="https://www.enato.edu.gr" target="_blank">Ιστότοπος Σχολείου</a></p>
          </footer>
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
