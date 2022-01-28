import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loader from './Loader';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =`https://newsapi.org/v2/everything?q=tesla&from=2021-12-28&sortBy=publishedAt&apiKey=0772ce1f0aff4a9981b17bc585ee96a5&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles ,totalArticles:parsedData.totalResults,loading:false});
  }

  handleNextClick = async () => {
    if(!(this.state.page+1> Math.ceil(this.state.totalResults/this.props.pageSize))){
    let url =`https://newsapi.org/v2/everything?q=tesla&from=2021-12-28&sortBy=publishedAt&apiKey=0772ce1f0aff4a9981b17bc585ee96a5&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
        page:this.state.page+1,
        articles: parsedData.articles,
        loading:false
    })
    }
  };

  handlePrevClick = async () => {
    let url =`https://newsapi.org/v2/everything?q=tesla&from=2021-12-28&sortBy=publishedAt&apiKey=0772ce1f0aff4a9981b17bc585ee96a5&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
        page:this.state.page-1,
        loading:false,
        articles: parsedData.articles
    })
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h1 className="text-center">NewsMonkey - Top Headlines</h1>
          {this.state.loading && <Loader/>}
          <div className="row">
            {!this.state.loading && this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage? element.urlToImage: "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found-300x169.jpg"}newsUrl={element.url}/>
                </div>
              );
            })}
          </div>
          <div className="container d-flex justify-content-between">
            <button className="btn btn-primary" onClick={this.handlePrevClick} disabled={this.state.page<=1}>&larr;Previous</button>
            <button className="btn btn-primary" onClick={this.handleNextClick} disabled={this.state.page+1> Math.ceil(this.state.totalResults/this.props.pageSize)}>Next&rarr;</button>
          </div>
        </div>
      </>
    );
  }
}

export default News;