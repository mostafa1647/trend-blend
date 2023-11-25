import { describe, expect, test } from 'vitest';

import { Article } from '../../../types/article-types.ts';
import { GuardianArticle } from '../../../types/guardians-types.ts';
import { guardiansMappers } from '../guardians-mappers.ts';

const mockGuardianArticles: GuardianArticle[] = [
  {
    id: 'media/2023/apr/17/twitter-labels-australias-abc-news-and-sbs-government-funded-media',
    type: 'article',
    sectionId: 'media',
    sectionName: 'Media',
    webPublicationDate: '2023-04-17T06:08:53Z',
    webTitle:
      'Twitter labels Australia’s ABC news and SBS ‘government-funded media’',
    webUrl:
      'https://www.theguardian.com/media/2023/apr/17/twitter-labels-australias-abc-news-and-sbs-government-funded-media',
    apiUrl:
      'https://content.guardianapis.com/media/2023/apr/17/twitter-labels-australias-abc-news-and-sbs-government-funded-media',
    isHosted: false,
    pillarId: 'pillar/news',
    pillarName: 'News',
  },
  {
    id: 'media/2023/aug/12/jeremy-fernandez-to-anchor-abc-sydney-7pm-news-bulletin',
    type: 'article',
    sectionId: 'media',
    sectionName: 'Media',
    webPublicationDate: '2023-08-12T05:00:09Z',
    webTitle:
      'For Jeremy Fernandez, anchoring the ABC news in NSW was never part of the plan – but here he is',
    webUrl:
      'https://www.theguardian.com/media/2023/aug/12/jeremy-fernandez-to-anchor-abc-sydney-7pm-news-bulletin',
    apiUrl:
      'https://content.guardianapis.com/media/2023/aug/12/jeremy-fernandez-to-anchor-abc-sydney-7pm-news-bulletin',
    isHosted: false,
    pillarId: 'pillar/news',
    pillarName: 'News',
  },
];

const mappedArticles: Article[] = [
  {
    author: undefined,
    category: 'Media',
    description: undefined,
    imageUrl: undefined,
    publishedAt: '2023-04-17T06:08:53Z',
    sourceName: 'News',
    title:
      'Twitter labels Australia’s ABC news and SBS ‘government-funded media’',
    url: 'https://www.theguardian.com/media/2023/apr/17/twitter-labels-australias-abc-news-and-sbs-government-funded-media',
  },
  {
    author: undefined,
    category: 'Media',
    description: undefined,
    imageUrl: undefined,
    publishedAt: '2023-08-12T05:00:09Z',
    sourceName: 'News',
    title:
      'For Jeremy Fernandez, anchoring the ABC news in NSW was never part of the plan – but here he is',
    url: 'https://www.theguardian.com/media/2023/aug/12/jeremy-fernandez-to-anchor-abc-sydney-7pm-news-bulletin',
  },
];

describe('guardians mappers', () => {
  test('articleMapper maps GuardianArticle objects to Article objects correctly', () => {
    const result = guardiansMappers.articleMapper(mockGuardianArticles);

    expect(result).toEqual(mappedArticles);
  });

  test('articleMapper returns an empty array when input is an empty array', () => {
    const result = guardiansMappers.articleMapper([]);

    expect(result).toEqual([]);
  });
});
