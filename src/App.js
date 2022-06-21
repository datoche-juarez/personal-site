import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home.jsx";
import { About } from "./About.jsx";
import { Projects } from "./Projects.jsx";
// import { Blog } from "./Blog.jsx";
import Contact from "./Contact.jsx";
import { NoMatch } from "./NoMatch.jsx";
import { Layout } from "./components/Layout.jsx";
import NavigationBar from "./components/NavigationBar.js";
import { Jumbotron } from "./components/Jumbotron.js";
import { Footer } from "./components/Footer.jsx";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Jumbotron />
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            {/* <Route path="/blog" component={Blog} /> */}
            <Route path="/contact" component={Contact} />
            {/* <Route component={NoMatch} /> */}
            <Route component={Home} />
          </Switch>
        </Layout>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
