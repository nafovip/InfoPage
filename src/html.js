import React from "react"
import PropTypes from "prop-types"
/*import IMG from './images/loading.gif';*/

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes} /*style={{backgroundColor: '#1D1D1D'}}*/ /*style={{backgroundColor: '#000', overflow: "hidden"}}*/ id="___bd">
        {props.preBodyComponents}
        <div
          key={`loader`}
          id="___loader"
          /*style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            zIndex: 100
          }}*/
        >
          {/*<img
            src={IMG}
            alt="loading spinner"
            width='500rem'
            height='300rem'
        />*/}
        </div>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
          /*style={{display: "none"}}*/
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
