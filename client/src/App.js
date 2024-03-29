import React, { Profiler } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";

import { setContext } from "@apollo/client/link/context";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/RegisterPage";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./pages/Profile";
import Login from "./pages/LoginPage";
import Firebase from "./pages/FirebasePage";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Healthcare from "./pages/Healthcare";
import ProductOnHome from "./pages/ProductOnHome";
import ProductList from "./pages/productList";
import ProductDetails from "./pages/productDetails";
import Quiz from "./components/Quiz";
import SingleMeetUp from "./pages/SingleMeetUp";
import PrivacyPolicy from "./pages/PrivacyPolicy";

// WORK IN PROGRESS
import MeetUp from "./pages/MeetUp";

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: "http://localhost:8000/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/firebase" element={<Firebase />} />
          <Route path="/me" element={<Profile />} />
          <Route path="/profiles/:username" element={<Profile />} />
          <Route path="/productOnHome" element={<ProductOnHome />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/product/:slug" element={<ProductDetails />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/home" element={<Home />} />
          <Route path="/policy" element={<PrivacyPolicy />} />

          <Route path="/" element={<Navigate to="/home" />} />

          {/* quiz componenent needs route so i can use navigation hook in Register page */}
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/meetUp" element={<MeetUp />} />
          <Route path="/meetUp/:meetUpId" element={<SingleMeetUp />} />
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
