import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Settings from "./Pages/Settings/Settings";
import About from './Pages/About/About';
import CoolApps from './Pages/CoolApps/CoolApps';

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.scss";

import Navcustom from "./Navbar/Navbar";
import Loader from "./Spinner/Loader";
import Footer from "./Footer/Footer";
import DropdownBtn from "./DropdownBtn/DropdownBtn";
import RenderList from "./RenderList/RenderList";
import Pagination from "./Pagination/Pagination";

// Libraries
import moment from "moment";

// Api
import API from '../api/api';

// https://react-bootstrap.github.io/
// at the bottom of the file you have the import for specific component from the react-bootstrap framework
// Example -> import Spinner from 'react-bootstrap/Spinner'

// need to include the dropdowns from hn.algolia.com
// also time & others, u will see on website

// now needs to make dropdowns,
// include a icon to search bar
// make the dropdowns and in the right side results and optionally but great the time fetched ^_^ - i think u can put a tracker in componentDidMount / DidUpdate to see
// in how many time the dom was rendered
// Footer
// Settings page, settings are saved in localStorage from the browser :)
// Have fun

class App extends React.Component {
  state = {
    posts: [
      {
        id: 0,
        title: "React is awesome!",
        url: "www.reactjs.org",
        points: 250,
        user: "Alex Cloudstar",
        date: moment("2010-02-09", "DD-MM-YYYY")._i,
        comments: "100 comments"
      },
      {
        id: 1,
        title: "Angular is good too!",
        url: "www.angular.io",
        points: 350,
        user: "Alex Cloudstar",
        date: moment("2012-04-06", "DD-MM-YYYY")._i,
        comments: "24 comments"
      },
      {
        id: 2,
        title: "Did u saw Vue JS?",
        url: "www.vuejs.org",
        points: 7,
        user: "Alex Cloudstar",
        date: moment("2018-01-02", "DD-MM-YYYY")._i,
        comments: "76 comments"
      },
      {
        id: 3,
        title: "My Journey?",
        url: "www.alexcloudstar.com/myjourney",
        points: 3,
        user: "John Doe",
        date: moment("2013-09-17", "DD-MM-YYYY")._i,
        comments: "3 comments"
      },
      {
        id: 4,
        title: "Frontend or Backend?",
        url: "No url present here",
        points: 17,
        user: "someone",
        date: moment("2014-07-26", "DD-MM-YYYY")._i,
        comments: "76 comments"
      },
      {
        id: 6,
        title: "One more",
        url: "No url present here",
        points: 34,
        user: "someone at some point",
        date: moment("2011-07-26", "DD-MM-YYYY")._i,
        comments: "3 comments"
      },
      {
        id: 7,
        title: "One more for filter with date picker",
        url: "No url present here",
        points: 34,
        user: "someone at some point",
        date: moment("2020-02-22", "DD-MM-YYYY")._i,
        comments: "3 comments"
      },
      {
        id: 8,
        title: "I promise, it's last one for date picker",
        url: "No url present here",
        points: 34,
        user: "someone at some point",
        date: moment("2020-02-25", "DD-MM-YYYY")._i,
        comments: "3 comments"
      },
      {
        id: 9,
        title: "Well, it was one more because i need for 1 day :)",
        url: "No url present here",
        points: 34,
        user: "someone at some point",
        date: moment("2020-02-27", "DD-MM-YYYY")._i,
        comments: "3 comments"
      },
      {
        id: 10,
        title: "Well, it was one more because i need for month :)",
        url: "No url present here",
        points: 34,
        user: "someone at some point",
        date: moment("2020-01-31", "DD-MM-YYYY")._i,
        comments: "3 comments"
      },
      {
        id: 11,
        title: "Well, it was one more because i need for year :)",
        url: "No url present here",
        points: 34,
        user: "someone at some point",
        date: moment("2020-03-20", "DD-MM-YYYY")._i,
        comments: "3 comments"
      }
    ],
    comments: [
      {
        id: 0,
        text: "Lorem ipsum",
        points: 7,
        user: "someone",
        date: moment("2010-09-02", "DD-MM-YYYY")._i
      },
      {
        id: 1,
        text: "Wow!",
        points: 7,
        user: "someone",
        date: moment("2018-02-01", "DD-MM-YYYY")._i
      },
      {
        id: 2,
        text: "Thats awesome!",
        points: 7,
        user: "someone",
        date: moment("2012-04-06", "DD-MM-YYYY")._i
      },
      {
        id: 3,
        text: "Keep up the good work!",
        points: 10,
        user: "someone",
        date: moment("2014-07-26", "DD-MM-YYYY")._i
      },
      {
        id: 4,
        text: "How you can do that?",
        points: 20,
        user: "someone",
        date: moment("2004-01-23", "DD-MM-YYYY")._i
      },
      {
        id: 5,
        text: "One more",
        points: 20,
        user: "someone",
        date: moment("2020-03-01", "DD-MM-YYYY")._i
      }
    ],
    searchTerm: "",
    isLoading: true,
    searchTopic: ["All", "Stories", "Comments"],
    searchBy: ["Popularity", "Date"],
    searchFor: [
      "All Time",
      "Last 24h",
      "Past Week",
      "Past Month",
      "Past Year",
      "Custom Range"
    ],
    currentList: "Stories",
    currentBy: "Popularity",
    lastPost: "All Time",
    currentPage: 1,
    hitsPerPage: 10,
    storiesTest: [],
  };

  async componentDidMount() {

    const id = 8863;
    API.get(`/item/${id}.json`).then(res => {
      this.setState({
        storiesTest: res.data,
        isLoading: false
      });
    })
    
  }

  componentDidUpdate() {
    console.log(this.state.storiesTest);
  }

  onKeyUp = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  setCurrentList = e => {
    this.setState({
      currentList: e.target.text
    });
  };

  setCurrentBy = e => {
    this.setState({
      currentBy: e.target.text
    });
    this.orderBy();
  };

  setLastPost = async e => {
    await this.setState({
      lastPost: e.target.text
    });
    await this.renderLastPosts();
  };

  orderBy = () => {
    // Honestly i have no ideea why i have to pass Date at the points and popularity on sort by date.
    // But hey, it's working 🤷🏿‍♂️
    if (this.state.currentBy === "Date") {
      this.setState({
        posts: this.state.posts.sort((a, b) => (a.points > b.points ? -1 : 1)),
        comments: this.state.comments.sort((a, b) =>
          a.points > b.points ? -1 : 1
        )
      });
    }

    if (this.state.currentBy === "Popularity") {
      this.setState({
        posts: this.state.posts.sort(
          (a, b) =>
            new Date(...b.date.split("/").reverse()) -
            new Date(...a.date.split("/").reverse())
        ),
        comments: this.state.comments.sort(
          (a, b) =>
            new Date(...b.date.split("/").reverse()) -
            new Date(...a.date.split("/").reverse())
        )
      });
    }
  };

  renderLastPosts = () => {
    if (this.state.currentList === "Stories") {
      switch (this.state.lastPost) {
        case "Last 24h":
          let postFilteredOneDay = this.state.posts.filter(post => {
            const lastDay = moment()
              .subtract(1, "days")
              .endOf("day")
              .format("YYYY-MM-DD");
            return lastDay <= post.date;
          });
          return postFilteredOneDay;
        case "Past Week":
          let postFilteredWeek = this.state.posts.filter(post => {
            const lastWeek = moment()
              .subtract(1, "weeks")
              .endOf("week")
              .format("YYYY-MM-DD");
            return lastWeek <= post.date;
          });
          return postFilteredWeek;
        case "Past Month":
          let postFilteredMonth = this.state.posts.filter(post => {
            const lastMonth = moment()
              .subtract(1, "months")
              .endOf("month")
              .format("YYYY-MM-DD");
            return lastMonth <= post.date;
          });
          return postFilteredMonth;
        case "Past Year":
          let postFilteredYear = this.state.posts.filter(post => {
            const lastYear = moment()
              .subtract(1, "years")
              .endOf("year")
              .format("YYYY-MM-DD");
            return lastYear <= post.date;
          });
          return postFilteredYear;
        case "Custom Range":
          // console.log(moment(new Date()).format("YYYY-MM-DD"));
          // const [startDate, setStartDate] = useState(new Date());
          break;
        default:
          return <div>Default state</div>;
      }
    } else {
      switch (this.state.lastPost) {
        case "Last 24h":
          let commentFilteredOneDay = this.state.comments.filter(comment => {
            const lastDay = moment()
              .subtract(1, "days")
              .endOf("day")
              .format("YYYY-MM-DD");
            return lastDay <= comment.date;
          });
          return commentFilteredOneDay;
        case "Past Week":
          let commentFilteredWeek = this.state.comments.filter(comment => {
            const lastWeek = moment()
              .subtract(1, "weeks")
              .endOf("week")
              .format("YYYY-MM-DD");
            return lastWeek <= comment.date;
          });
          return commentFilteredWeek;
        case "Past Month":
          let commentFilteredMonth = this.state.comments.filter(comment => {
            const lastMonth = moment()
              .subtract(1, "months")
              .endOf("month")
              .format("YYYY-MM-DD");
            return lastMonth <= comment.date;
          });
          return commentFilteredMonth;
        case "Past Year":
          let commentFilteredYear = this.state.comments.filter(comment => {
            const lastYear = moment()
              .subtract(1, "years")
              .endOf("year")
              .format("YYYY-MM-DD");
            return lastYear <= comment.date;
          });
          return commentFilteredYear;
        case "Custom Range":
          // console.log(moment(new Date()).format("YYYY-MM-DD"));
          // const [startDate, setStartDate] = useState(new Date());
          break;
        default:
          return <div>Default state</div>;
      }
    }
  };

  setCurrentPage = pageNumber => {
    this.setState({ currentPage: pageNumber });
  };

  paginate = pageNumber => {
    this.setCurrentPage(pageNumber);
  };

  renderDomLoadingTime() {
    let startTime = window.performance.now();
    let endTime = window.performance.now();
    let time = endTime - startTime;
    return time.toFixed(3);
  }

  renderResultsNumber = () => {
    switch (this.state.currentList) {
      case "All":
        return this.state.posts.length + this.state.comments.length;
      case "Stories":
        return this.state.posts.length;
      case "Comments":
        return this.state.comments.length;
      default:
        return null;
    }
  };

  // basically it's repetive code because on settings page i have option/select
  // and the e.target.text don't work, it's needed value.

  hanldeChangeHitsPerPage = e => {
    this.setState({ hitsPerPage: parseInt(e.target.value) });
  };

  hanldeChangeCurrentList = e => {
    this.setState({ currentList: e.target.value });
  };

  handleChangeCurrentBy = e => {
    this.setState({
      currentBy: e.target.value
    });
    this.orderBy();
  };

  handleChangeLastPost = async e => {
    await this.setState({ lastPost: e.target.value });
    await this.renderLastPosts();
  };

  render() {
    // Get current posts
    const indexOfLastPost = this.state.currentPage * this.state.hitsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.hitsPerPage;
    const currentPosts = this.state.posts.slice(
      indexOfFirstPost,
      indexOfLastPost
    );

    // Get current comments
    const indexOfLastComment = this.state.currentPage * this.state.hitsPerPage;
    const indexOfFirstComment = indexOfLastComment - this.state.hitsPerPage;
    const currentComments = this.state.comments.slice(
      indexOfFirstComment,
      indexOfLastComment
    );

    this.renderDomLoadingTime();
    if (this.state.isLoading) {
      return <Loader text={"Loading..."} />;
    } else {
      return (
        <div className="App">
          <Router>
            <Container>
              <Row>
                <Col sm={12} className="bg-grey">
                  <Navcustom
                    posts={this.state.posts}
                    searchTerm={this.state.searchTerm}
                    onKeyUp={e => this.onKeyUp(e)}
                  />
                  <Switch>
                    <Route exact path="/">
                      <Row className="pl-sm-7 pr-md-20 pl-md-20 mt-2 w-100">
                        <Col sm={12} md={8} lg={6}>
                          <div className="d-flex dropdowns">
                            <h5>Search</h5>
                            <DropdownBtn
                              onClick={e => this.setCurrentList(e)}
                              defaultValue={this.state.currentList}
                              dropChilds={this.state.searchTopic}
                            />
                            <h5>By</h5>
                            <DropdownBtn
                              onClick={e => {
                                this.setCurrentBy(e);
                                this.orderBy(e);
                              }}
                              defaultValue={this.state.currentBy}
                              dropChilds={this.state.searchBy}
                            />
                            <h5>For</h5>
                            <DropdownBtn
                              onClick={e => this.setLastPost(e)}
                              defaultValue={this.state.lastPost}
                              dropChilds={this.state.searchFor}
                            />
                          </div>
                        </Col>
                        <Col sm={12} md={4} lg={6} className="text-right">
                          <div className="resultsNumber">
                            {this.renderResultsNumber()} results (
                            {this.renderDomLoadingTime()})
                          </div>
                        </Col>
                      </Row>
                      <RenderList
                        currentList={this.state.currentList}
                        renderLastPost={() => this.renderLastPosts()}
                        lastPost={this.state.lastPost}
                        posts={currentPosts}
                        comments={currentComments}
                        searchTerm={this.state.searchTerm}
                      />
                      <Pagination
                        hitsPerPage={this.state.hitsPerPage}
                        totalPosts={this.renderResultsNumber()}
                        currentPage={this.state.currentPage}
                        paginate={this.paginate}
                      />
                    </Route>
                    <Route exact path="/settings">
                      <Settings
                        hitsPerPage={this.state.hitsPerPage}
                        hanldeChangeHitsPerPage={this.hanldeChangeHitsPerPage}
                        currentList={this.state.currentList}
                        hanldeChangeCurrentList={e =>
                          this.hanldeChangeCurrentList(e)
                        }
                        currentBy={this.state.currentBy}
                        handleChangeCurrentBy={e =>
                          this.handleChangeCurrentBy(e)
                        }
                        lastPost={this.state.lastPost}
                        handleChangeLastPost={e => this.handleChangeLastPost(e)}
                      />
                    </Route>
                    <Route exact path="/about">
                      <About />
                    </Route>
                    <Route exact path="/cool_apps">
                      <CoolApps />
                    </Route>
                  </Switch>
                </Col>
                <Col sm={12} className="p-0">
                  <Footer />
                </Col>
              </Row>
            </Container>
          </Router>
        </div>
      );
    }
  }
}

export default App;
