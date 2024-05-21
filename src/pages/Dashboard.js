// src/pages/Dashboard.js
import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import Search from '../components/Search';
import BookTable from '../components/BookTable';
import { Container, Typography } from '@mui/material';

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [searchParams, setSearchParams] = useState({ query: 'the+lord+of+the+rings', author: '' });

  const fetchBooks = async (params) => {
    let url = `https://openlibrary.org/search.json?q=${params.query}`;
    if (params.author) {
      url += `&author=${params.author}`;
    }
    const res = await axios.get(url);
    setBooks(res.data.docs);
  };

  useEffect(() => {
    fetchBooks(searchParams);
  }, [searchParams]);

  const handleSearch = (params) => {
    setSearchParams(params);
  };

  const columns = useMemo(() => [
    { Header: 'Title', accessor: 'title' },
    { Header: 'Author Name', accessor: 'author_name' },
    { Header: 'First Publish Year', accessor: 'first_publish_year' },
    { Header: 'Ratings Average', accessor: 'ratings_average' },
    { Header: 'Subject', accessor: 'subject' },
    { Header: 'Author Birth Date', accessor: 'author_birth_date' },
    { Header: 'Author Top Work', accessor: 'author_top_work' },
  ], []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Book Dashboard
      </Typography>
      <Search onSearch={handleSearch} />
      <BookTable columns={columns} data={books} />
    </Container>
  );
};
export default Dashboard;
