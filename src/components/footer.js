import React from 'react'

const Footer = () => {
    return (
        <div className="footer container-fluid">
            <div className= "row">
                <div className= "colums " id="footer-1st-link">
                <div className="p-1">
                <a
            target="_blank"
            id="anchor"
            href="https://docs.google.com/forms/d/e/1FAIpQLScHw7xfAeZ3kiCocbeIU4vhMHrbPCWFp5lDiEegFOxCpg0USQ/viewform"
          >
            Become a Mentor
          </a>
            </div>
            <div className="p-1">
          <a
            target="_blank"
            id="anchor"
            href="https://heypm-interview-experience.webflow.io/share-your-interview"
          >
            Submit Your Interview Experience
          </a>
          </div>
          <div className="p-1">
          <a
            target="_blank"
            id="anchor"
            href=" mailto: heypm2020@gmail.com"
          >
            Write to us at: heypm2020@gmail.com
          </a>
          </div>
                </div>
                <i className="border"></i>
                <div className= " colums">
                    <div>
                        <a
                        id= "footer-links"
                        target="_blank"
                         href="https://heypm.glideapp.io/"
                        >
                            heyPM app 
                        </a>
                    </div>
                    <div className="footer-text">
                        Access <strong >PM</strong> related resources and concepts. 
                    </div>
                </div>
                <i className="border"></i>
                <div className= " colums">
                <div>
                        <a
                        id= "footer-links"
                        target="_blank"
                         href="https://anchor.fm/heypm"
                        >
                            togetherVproduct
                        </a>
                    </div>
                    <div className="footer-text">
                        A podcast of aspiring <strong>PMs</strong> providing industry insights.
                    </div>
                </div>
                <i className="border"></i>
                <div className= "colums">
                <div>
                        <a
                        id= "footer-links"
                        target="_blank"
                         href="https://heypm.substack.com/pm-resources"
                        >
                            PM Resources
                        </a>
                    </div>
                    <div className="footer-text">
                        A master vault with all resources for your next <strong>PM</strong> interview.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
