import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";
import { useEffect } from "react";
import { getUserAuth } from "./actions";
import { connect } from "react-redux";
import PostModal from "./components/PostModal";

function App(props) {
  useEffect(() => {
    getUserAuth();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route
          path="/home"
          element={
            <>
              <PostModal />
              <Header />
              <Home />
            </>
          }
        />
      </Routes>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
