import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <div className="homeContent">
        <div id="columns">
          <figure>
            <img
              src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/cinderella.jpg"
              alt="hello"
            />
            <figcaption>
              Cinderella wearing European fashion of the mid-1860’s
            </figcaption>
          </figure>

          <figure>
            <img
              src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/rapunzel.jpg"
              alt="hello"
            />
            <figcaption>Rapunzel, clothed in 1820’s period fashion</figcaption>
          </figure>

          <figure>
            <img
              src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/belle.jpg"
              alt="hello"
            />
            <figcaption>Belle, based on 1770’s French court fashion</figcaption>
          </figure>

          <figure>
            <img
              src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/mulan_2.jpg"
              alt="hello"
            />
            <figcaption>Mulan, based on the Ming Dynasty period</figcaption>
          </figure>

          <figure>
            <img
              src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/sleeping-beauty.jpg"
              alt="hello"
            />
            <figcaption>
              Sleeping Beauty, based on European fashions in 1485
            </figcaption>
          </figure>

          <figure>
            <img
              src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/pocahontas_2.jpg"
              alt="hello"
            />
            <figcaption>
              Pocahontas based on 17th century Powhatan costume
            </figcaption>
          </figure>

          <figure>
            <img
              src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/snow-white.jpg"
              alt="hello"
            />
            <figcaption>
              Snow White, based on 16th century German fashion
            </figcaption>
          </figure>

          <figure>
            <img
              src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ariel.jpg"
              alt="hello"
            />
            <figcaption>Ariel wearing an evening gown of the 1890’s</figcaption>
          </figure>

          <figure>
            <img
              src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/tiana.jpg"
              alt="hello"
            />
            <figcaption>
              Tiana wearing the <i>robe de style</i> of the 1920’s
            </figcaption>
          </figure>
        </div>
      </div>
    );
  }
}

export default Profile;
