import { describe, expect, test } from 'vitest';

import { Article } from '../../types/article-types.ts';
import { NytimesDocument } from '../../types/nytimes-types.ts';
import { nytimesMappers } from '../mappers/nytimes-mappers.ts';

const mockNytimesArticles: NytimesDocument[] = [
  {
    abstract:
      'Coexistence for Israelis and Palestinians is possible and is the only alternative to violence.',
    web_url:
      'https://www.nytimes.com/2023/11/25/opinion/israel-gaza-peace-ceasefire.html',
    snippet:
      'Coexistence for Israelis and Palestinians is possible and is the only alternative to violence.',
    lead_paragraph:
      'It is said that wars end when both sides conclude they have nothing more to gain by fighting. By that logic, Israel and the Palestinians should have long ago agreed to the only solution that makes sense: separate states side by side. They’ve tried, again and again, but in this cauldron of religious passion and competing grievances, peace has always lost out. Is there any chance that things will be different when the guns fall silent this time?',
    print_section: 'SR',
    print_page: '11',
    source: 'The New York Times',
    multimedia: [
      {
        rank: 0,
        subtype: 'xlarge',
        caption: null,
        credit: null,
        type: 'image',
        url: 'images/2023/11/25/opinion/25israel/25israel-articleLarge.jpg',
        height: 600,
        width: 600,
        legacy: {
          xlarge:
            'images/2023/11/25/opinion/25israel/25israel-articleLarge.jpg',
          xlargewidth: 600,
          xlargeheight: 600,
        },
        subType: 'xlarge',
        crop_name: 'articleLarge',
      },
    ],
    headline: {
      main: 'The Only Way Forward',
      kicker: 'The Editorial Board',
      content_kicker: null,
      print_headline: 'The Only Way Forward',
      name: null,
      seo: null,
      sub: null,
    },
    keywords: [
      {
        name: 'subject',
        value: 'Israel-Gaza War (2023- )',
        rank: 1,
        major: 'N',
      },
      {
        name: 'subject',
        value: 'Palestinians',
        rank: 2,
        major: 'N',
      },
      {
        name: 'subject',
        value: 'Terrorism',
        rank: 3,
        major: 'N',
      },
      {
        name: 'subject',
        value: 'International Relations',
        rank: 4,
        major: 'N',
      },
      {
        name: 'subject',
        value: 'Civilian Casualties',
        rank: 5,
        major: 'N',
      },
      {
        name: 'subject',
        value: 'Peace Process',
        rank: 6,
        major: 'N',
      },
      {
        name: 'organizations',
        value: 'Palestinian Authority',
        rank: 7,
        major: 'N',
      },
      {
        name: 'organizations',
        value: 'Palestinian Islamic Jihad',
        rank: 8,
        major: 'N',
      },
      {
        name: 'persons',
        value: 'Netanyahu, Benjamin',
        rank: 9,
        major: 'N',
      },
      {
        name: 'glocations',
        value: 'Gaza Strip',
        rank: 10,
        major: 'N',
      },
      {
        name: 'glocations',
        value: 'Israel',
        rank: 11,
        major: 'N',
      },
    ],
    pub_date: '2023-11-25T12:00:21+0000',
    document_type: 'article',
    news_desk: 'OpEd',
    section_name: 'Opinion',
    byline: {
      original: 'By The Editorial Board',
      person: [],
      organization: 'The Editorial Board',
    },
    type_of_material: 'Editorial',
    _id: 'nyt://article/131a4541-9236-5187-aa4b-dc68c1c98eb5',
    word_count: 1761,
    uri: 'nyt://article/131a4541-9236-5187-aa4b-dc68c1c98eb5',
  },
  {
    abstract:
      'An infamous victim of the postwar purges turned out to be a committed collaborator.',
    web_url:
      'https://www.nytimes.com/2023/11/25/opinion/simone-touseau-france-occupation.html',
    snippet:
      'An infamous victim of the postwar purges turned out to be a committed collaborator.',
    lead_paragraph:
      'In August 1944, in a city near Paris, Robert Capa took a photograph of a woman cradling a baby in the middle of a jeering crowd, her head shaved and her forehead marked with a swastika.',
    source: 'The New York Times',
    multimedia: [
      {
        rank: 0,
        subtype: 'xlarge',
        caption: null,
        credit: null,
        type: 'image',
        url: 'images/2023/11/25/opinion/25faure/25faure-articleLarge.jpg',
        height: 373,
        width: 600,
        legacy: {
          xlarge: 'images/2023/11/25/opinion/25faure/25faure-articleLarge.jpg',
          xlargewidth: 600,
          xlargeheight: 373,
        },
        subType: 'xlarge',
        crop_name: 'articleLarge',
      },
    ],
    headline: {
      main: 'Who Was the Real ‘Shaved Woman of Chartres’?',
      kicker: 'Guest Essay',
      content_kicker: null,
      print_headline: null,
      name: null,
      seo: null,
      sub: null,
    },
    keywords: [
      {
        name: 'subject',
        value: 'Books and Literature',
        rank: 1,
        major: 'N',
      },
      {
        name: 'subject',
        value: 'Holocaust and the Nazi Era',
        rank: 2,
        major: 'N',
      },
      {
        name: 'glocations',
        value: 'France',
        rank: 3,
        major: 'N',
      },
    ],
    pub_date: '2023-11-25T12:00:14+0000',
    document_type: 'article',
    news_desk: 'OpEd',
    section_name: 'Opinion',
    byline: {
      original: 'By Valentine Faure',
      person: [
        {
          firstname: 'Valentine',
          middlename: null,
          lastname: 'Faure',
          qualifier: null,
          title: null,
          role: 'reported',
          organization: '',
          rank: 1,
        },
      ],
      organization: null,
    },
    type_of_material: 'Op-Ed',
    _id: 'nyt://article/3348ff69-a752-5fb5-984c-a95ddd06a6bb',
    word_count: 1093,
    uri: 'nyt://article/3348ff69-a752-5fb5-984c-a95ddd06a6bb',
  },
];

const mappedArticles: Article[] = [
  {
    title: 'The Only Way Forward',
    description:
      'Coexistence for Israelis and Palestinians is possible and is the only alternative to violence.',
    sourceName: 'The New York Times',
    author: 'By The Editorial Board',
    url: 'https://www.nytimes.com/2023/11/25/opinion/israel-gaza-peace-ceasefire.html',
    imageUrl: 'images/2023/11/25/opinion/25israel/25israel-articleLarge.jpg',
    publishedAt: '2023-11-25T12:00:21+0000',
    category: 'Opinion',
  },
  {
    title: 'Who Was the Real ‘Shaved Woman of Chartres’?',
    description:
      'An infamous victim of the postwar purges turned out to be a committed collaborator.',
    sourceName: 'The New York Times',
    author: 'By Valentine Faure',
    url: 'https://www.nytimes.com/2023/11/25/opinion/simone-touseau-france-occupation.html',
    imageUrl: 'images/2023/11/25/opinion/25faure/25faure-articleLarge.jpg',
    publishedAt: '2023-11-25T12:00:14+0000',
    category: 'Opinion',
  },
];

describe('nytimes mapper', () => {
  test('maps NytimesDocument objects to Article objects correctly', () => {
    const result = nytimesMappers.articleMapper(mockNytimesArticles);

    expect(result).toEqual(mappedArticles);
  });

  test('returns an empty array when input is an empty array', () => {
    const result = nytimesMappers.articleMapper([]);

    expect(result).toEqual([]);
  });
});
