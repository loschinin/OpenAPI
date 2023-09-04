import React, { useState } from 'react';
import { DateTime } from 'luxon';

import { fetchData } from '../api';
import { useQuery } from '@tanstack/react-query';
import {
  IconButton,
  InputAdornment,
  LinearProgress,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

type Source = {
  id: string | null;
  name: string;
};

type Article = {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

type Response<T> = {
  articles: T[];
  status: string;
  totalResults: number;
};

const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = process.env.REACT_APP_ARTICLES_API_KEY;
const SORT_BY: 'popularity' | 'publishedAt' = 'publishedAt';
const INITIAL_QUERY = '';
const FROM = DateTime.now().toISODate();

export const ArticlesPage = () => {
  const [query, setQuery] = useState(INITIAL_QUERY);
  const dataUrl = `${BASE_URL}/top-headlines?q=${query}&country=us&from=${FROM}&sortBy=${SORT_BY}&apiKey=${API_KEY}`;
  const {
    data: articles,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['articles'],
    queryFn: () =>
      fetchData(dataUrl).then(({ articles }: Response<Article>) => articles),
    select: (data) =>
      data.filter(
        ({ title, urlToImage }) => title !== '[Removed]' && urlToImage
      ),
  });

  if (isLoading) return <LinearProgress />;
  console.log('articles', articles);

  const Articles = () => {
    if (!articles?.length)
      return (
        <Stack p={2} gap={2} alignItems={'center'}>
          No data
        </Stack>
      );
    return articles.map(
      ({ title, description, urlToImage, publishedAt }, index) => (
        <Stack key={index} gap={1} p={1} component={Paper} direction={'row'}>
          <img src={urlToImage} alt={'broken image'} width={250} />
          <Stack gap={1}>
            <Typography variant={'h5'}>{title}</Typography>
            <Typography variant={'body1'}>{description}</Typography>
            <Typography variant={'caption'}>
              {DateTime.fromISO(publishedAt).toLocaleString(DateTime.DATE_FULL)}
            </Typography>
          </Stack>
        </Stack>
      )
    );
  };

  return (
    <Stack p={2} gap={2}>
      <Typography variant={'h4'}>News</Typography>

      <TextField
        value={query}
        onChange={({ target }) => setQuery(target.value)}
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        onBlur={handleSearch}
      />

      <Articles />
    </Stack>
  );

  function handleSearch() {
    refetch();
  }
};
