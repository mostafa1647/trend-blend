import { cleanup } from '@testing-library/react';
import { afterEach, describe, expect, test } from 'vitest';

import { Article } from '../../types/article-types.ts';
import { aggregators } from '../aggregators.ts';

const mockedArticle: Article = {
  author: 'Igor Bonifacic',
  category: 'business',
  description:
    'If you recently treated yourself to an iPhone 15 or Mac, Amazon’s Black Friday sale has Apple accessories you can purchase to complete your setup.',
  imageUrl:
    'https://s.yimg.com/ny/api/res/1.2/s6r2nDXmHqvT3uz_j1oSBQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-11/6f0948f0-8a6a-11ee-b577-274dcaab8784',
  publishedAt: '2023-11-24T01:53:00Z',
  sourceName: 'Engadget',
  title:
    'Apple Black Friday deals include up to 25 percent off USB-C chargers, MagSafe accessories and more - Engadget',
  url: 'https://www.engadget.com/apple-black-friday-deals-include-up-to-25-percent-off-usb-c-chargers-magsafe-accessories-and-more-015305089.html',
};

afterEach(() => {
  cleanup();
});

describe('aggregators', () => {
  test('articleAggregator should aggregate articles', () => {
    const params = {
      newsapiArticles: new Array<Article>(3).fill(mockedArticle),
      nytimesArticles: new Array<Article>(3).fill(mockedArticle),
      guardianArticles: new Array<Article>(3).fill(mockedArticle),
    };

    expect(aggregators.articleAggregator(params)).toBeInstanceOf(Array);
    expect(aggregators.articleAggregator(params)).toHaveLength(9);
    expect(
      aggregators.articleAggregator(params)[Math.floor(Math.random() * 9)],
    ).toBeTypeOf('object');
    expect(
      aggregators.articleAggregator(params)[Math.floor(Math.random() * 9)],
    ).toBe(mockedArticle);
  });

  test('articleAggregator sorts articles in ascending order by publishedAt', () => {
    const result = aggregators.articleAggregator({
      newsapiArticles: [{ ...mockedArticle, publishedAt: '2023-01-01' }],
      nytimesArticles: [{ ...mockedArticle, publishedAt: '2023-01-02' }],
      guardianArticles: [{ ...mockedArticle, publishedAt: '2023-01-03' }],
      sort: 'asc',
    });

    expect(result[0].publishedAt).toBe('2023-01-01');
    expect(result[1].publishedAt).toBe('2023-01-02');
    expect(result[2].publishedAt).toBe('2023-01-03');
  });

  test('articleAggregator sorts articles in descending order by publishedAt', () => {
    const result = aggregators.articleAggregator({
      newsapiArticles: [{ ...mockedArticle, publishedAt: '2023-01-01' }],
      nytimesArticles: [{ ...mockedArticle, publishedAt: '2023-01-02' }],
      guardianArticles: [{ ...mockedArticle, publishedAt: '2023-01-03' }],
      sort: 'desc',
    });

    expect(result[0].publishedAt).toBe('2023-01-03');
    expect(result[1].publishedAt).toBe('2023-01-02');
    expect(result[2].publishedAt).toBe('2023-01-01');
  });

  test('articleAggregator handles empty arrays', () => {
    const result = aggregators.articleAggregator({
      newsapiArticles: [],
      nytimesArticles: [],
      guardianArticles: [],
    });

    expect(result).toEqual([]);
  });

  test('articleAggregator uses descending order by default', () => {
    const result = aggregators.articleAggregator({
      newsapiArticles: [{ ...mockedArticle, publishedAt: '2023-01-01' }],
      nytimesArticles: [{ ...mockedArticle, publishedAt: '2023-01-02' }],
      guardianArticles: [{ ...mockedArticle, publishedAt: '2023-01-03' }],
    });

    expect(result[0].publishedAt).toBe('2023-01-03');
    expect(result[1].publishedAt).toBe('2023-01-02');
    expect(result[2].publishedAt).toBe('2023-01-01');
  });
});
