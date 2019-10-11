import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

export const PORTFOLIO_LIST = gql`
  {
    portfolios {
      id
      title
      description
      img_url
      tec_stack
      create
      createBy
    }
  }
`;

class Home extends Component {
  render() {
    return (
      <Query query={PORTFOLIO_LIST}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          const datas = data.portfolios;
          console.log(datas);

          return (
            <div className="homeContent">
              <h1 class="homeContent_title">PROJECTS</h1>
              <div id="columns">
                {datas.map(data => (
                  <figure>
                    <img src={data.img_url} alt="hello" />
                    <figcaption>
                      <ul>
                        <li>
                          <div className="product_item">
                            <span className="item_title">{data.title}</span>
                            <br />
                            <span className="item_description">
                              {data.description}
                            </span>
                            <br />
                            <span className="item_stack">{data.tec_stack}</span>
                            <br />
                            <span className="item_create">{data.create}</span>
                            <br />
                            <span className="item_createBy">
                              {data.createBy}
                            </span>
                          </div>
                        </li>
                      </ul>
                    </figcaption>
                  </figure>
                ))}
              </div>
              {/* <ul className="product">
                {datas.map(data => (
                  <li>
                    <div className="product_item">
                      <span className="item_title">{data.title}</span>
                      <br />
                      <span className="item_description">
                        {data.description}
                      </span>
                      <br />
                      <span className="item_stack">{data.tec_stack}</span>
                      <br />
                      <span className="item_create">{data.create}</span>
                      <br />
                      <span className="item_createBy">{data.createBy}</span>
                    </div>
                  </li>
                ))}
              </ul> */}
            </div>
          );
        }}
      </Query>
      // <div className="homeContent">
      //   <div>{/* <img></img> */}</div>
      //   <ul className="product">

      //   </ul>
      // </div>
    );
  }
}

export default Home;
