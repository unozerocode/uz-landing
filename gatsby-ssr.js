/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react");


exports.onRenderBody = function({ setPostBodyComponents }) {


    setPostBodyComponents([
       
        <script dangerouslySetInnerHTML={{
            __html: `type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/7604870.js"`,
        }}
    />
    ]);

};

