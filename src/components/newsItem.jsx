import React, { PureComponent } from "react";

export default class NewsItem extends PureComponent {
  // props are read only and states are variables

  render() {
    let props = this.props;
    return (
      <div>
        <div className="card">
          <div className="card-header">{props.category}</div>
          <img
            src={
              props.imageurl !== null
                ? props.imageurl
                : "https://res.cloudinary.com/teepublic/image/private/s--79EwJk3z--/t_Preview/b_rgb:000000,c_limit,f_auto,h_630,q_90,w_630/v1608236443/production/designs/17519845_0.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}...</h5>
            <p className="card-text">{props.description}...</p>
            <a
              href={props.newsurl}
              target="_blank"
              className="btn btn-sm btn-warning"
            >
              read full article
            </a>
          </div>
          <div className="card-footer text-muted">{props.date}</div>
        </div>
      </div>
    );
  }
}
