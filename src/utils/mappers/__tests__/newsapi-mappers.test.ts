import { describe, expect, test } from 'vitest';

import { Article } from '../../../types/article-types.ts';
import {
  NewsapiArticle,
  NewsapiCategory,
} from '../../../types/newsapi-types.ts';
import { newsapiMappers } from '../newsapi-mappers.ts';

const mockNewsapiArticles: NewsapiArticle[] = [
  {
    source: {
      id: 'cnn',
      name: 'CNN',
    },
    author: 'Chelsea Stone, Caroline Curran',
    title:
      'Here are all 177 best deals to shop at Amazon during Black Friday 2023 - CNN Underscored',
    description:
      'Amazon’s Black Friday sale is officially live and features deals on TVs, laptops, vacuums, gifts and more up to 60% off.',
    url: 'https://www.cnn.com/cnn-underscored/deals/amazon-black-friday-deals-2023-11-24',
    urlToImage:
      'https://media.cnn.com/api/v1/images/stellar/prod/bf2023-collage-lead-amazon.jpg?c=16x9&q=w_800,c_fill',
    publishedAt: '2023-11-24T10:24:00Z',
    content:
      'Just shy of its all-time low price, the pan features titanium-infused plasma primer and high-tech coating for long-lasting nonstick properties, a silicone grip and ergonomic design. \r\nLiven up your h… [+1639 chars]',
  },
  {
    source: {
      id: 'cnn',
      name: 'CNN',
    },
    author: 'Henry T. Casey',
    title:
      '23 best Black Friday laptop deals in 2023: MacBooks, Chromebooks and more - CNN Underscored',
    description:
      'Top laptop brands, including Apple and Dell, are on sale during Black Friday from major retailers like Amazon and Best Buy.',
    url: 'https://www.cnn.com/cnn-underscored/deals/black-friday-laptop-deals-2023-11-24',
    urlToImage:
      'https://media.cnn.com/api/v1/images/stellar/prod/bf2023-collage-lead-laptop-deals-1.jpg?c=16x9&q=w_800,c_fill',
    publishedAt: '2023-11-24T09:47:00Z',
    content:
      'Want more deals? Visit CNN Underscoreds Guide to Black Fridayfor wall-to-wall coverage of the best discounts to be found during the biggest shopping event of the year.\r\nBlack Friday deals are here to… [+1697 chars]',
  },
];

const mappedArticles: Article[] = [
  {
    title:
      'Here are all 177 best deals to shop at Amazon during Black Friday 2023 - CNN Underscored',
    description:
      'Amazon’s Black Friday sale is officially live and features deals on TVs, laptops, vacuums, gifts and more up to 60% off.',
    sourceName: 'CNN',
    author: 'Chelsea Stone, Caroline Curran',
    url: 'https://www.cnn.com/cnn-underscored/deals/amazon-black-friday-deals-2023-11-24',
    imageUrl:
      'https://media.cnn.com/api/v1/images/stellar/prod/bf2023-collage-lead-amazon.jpg?c=16x9&q=w_800,c_fill',
    publishedAt: '2023-11-24T10:24:00Z',
    category: 'business',
  },
  {
    title:
      '23 best Black Friday laptop deals in 2023: MacBooks, Chromebooks and more - CNN Underscored',
    description:
      'Top laptop brands, including Apple and Dell, are on sale during Black Friday from major retailers like Amazon and Best Buy.',
    sourceName: 'CNN',
    author: 'Henry T. Casey',
    url: 'https://www.cnn.com/cnn-underscored/deals/black-friday-laptop-deals-2023-11-24',
    imageUrl:
      'https://media.cnn.com/api/v1/images/stellar/prod/bf2023-collage-lead-laptop-deals-1.jpg?c=16x9&q=w_800,c_fill',
    publishedAt: '2023-11-24T09:47:00Z',
    category: 'business',
  },
];

describe('newsapi mappers', () => {
  test('maps NewsapiArticle objects to Article objects with a specified category', () => {
    const result = newsapiMappers.articleMapper(
      mockNewsapiArticles,
      NewsapiCategory.BUSINESS,
    );

    expect(result).toEqual(mappedArticles);
  });

  test('returns an empty array when input is an empty array', () => {
    const result = newsapiMappers.articleMapper([], NewsapiCategory.BUSINESS);

    expect(result).toEqual([]);
  });
});
