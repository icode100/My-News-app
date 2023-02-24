import React, { Component } from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
// 4c42d7ae182448d49916ebb929f3e7e9
import NewsItem from "./newsItem";
import Spinner from "./spinner";
export default class News extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 20,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };
  articles = [];
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      isdisabled: 0,
      page: 1,
      totalResults: 0,
    };
    document.title = `My News App | ${this.props.category}`;
  }

  async pageconcat(pa) {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4c42d7ae182448d49916ebb929f3e7e9&page=${pa}&pagesize=${this.props.pagesize}`;
    this.state.loading = true;
    let data = await fetch(url); //to make the async function wait till the data is fetched completely
    let parsedata = await data.json();
    console.log(parsedata);
    console.log(this.state.articles.length);
    this.setState({
      articles: this.state.articles.concat(parsedata.articles),
      page: pa,
      loading: false,
    });
  }
  async pagerender(pa) {
    this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4c42d7ae182448d49916ebb929f3e7e9&page=${pa}&pagesize=${this.props.pagesize}`;
    this.state.loading = true;
    let data = await fetch(url); //to make the async function wait till the data is fetched completely
    let parsedata = await data.json();
    console.log(this.state.articles.length);
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
      page: pa,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.pagerender(this.state.page);
  }

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center"  style={{marginTop:"10vh"}}> My News - Top headlines</h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={async () => {
            this.pageconcat(this.state.page + 1);
          }}
          loader={
            <h4>
              <Spinner />
            </h4>
          }
          hasMore={this.state.articles.length !== this.state.totalResults}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-3 my-3" key={element.url}>
                    <NewsItem
                      imageurl={element.urlToImage}
                      title={
                        element.title !== null ? element.title.slice(0, 20) : ""
                      }
                      description={
                        element.description !== null
                          ? element.description.slice(0, 50)
                          : ""
                      }
                      newsurl={element.url}
                      date={new Date(element.publishedAt).toGMTString()}
                      category={this.props.category}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}
