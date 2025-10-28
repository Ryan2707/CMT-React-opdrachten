import '../App.css';
import Layout from "../components/Layout";
import BookList from "../components/BookList";
import React from 'react';

const Home = () => {
  return (
    <Layout>
      <h1>Opdracht 1 - Books</h1>
      <BookList />
    </Layout>
  );
};

export default Home;