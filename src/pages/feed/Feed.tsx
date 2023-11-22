import { ArticleList } from '../../components/article-list';

const articles = [
  {
    source: {
      id: null,
      name: 'CNBC',
    },
    author: 'Brian Evans',
    title:
      'Stocks slide as November rally pauses on some weak retail earnings: Live updates - CNBC',
    description:
      'Stocks were down Tuesday as traders assessed some disappointing retail results and looked ahead to the release of the Federal Reserve meeting minutes.',
    url: 'https://www.cnbc.com/2023/11/20/stock-market-today-live-updates.html',
    urlToImage:
      'https://image.cnbcfm.com/api/v1/image/107231397-1682520261252-gettyimages-1485421574-032a0173_t7gavw6e.jpeg?v=1700517963&w=1920&h=1080',
    publishedAt: '2023-11-21T14:39:00Z',
    content:
      'Stocks were down Tuesday as traders assessed some disappointing retail results and looked ahead to the release of the Federal Reserve meeting minutes.\r\nThe Dow Jones Industrial Average slipped 76 poi… [+1082 chars]',
  },
  {
    source: {
      id: 'usa-today',
      name: 'USA Today',
    },
    author: 'USA TODAY',
    title:
      'The Fed may be done with rate hikes. That could spark your 401(k) - USA TODAY',
    description: null,
    url: 'https://www.usatoday.com/story/money/2023/11/19/fed-done-rate-hikes-401k/71621187007/',
    urlToImage: null,
    publishedAt: '2023-11-21T14:37:36Z',
    content: null,
  },
  {
    source: {
      id: 'the-washington-post',
      name: 'The Washington Post',
    },
    author: 'Nicolás Rivero',
    title:
      'How to feng shui your fridge and eat more of your food - The Washington Post',
    description:
      'Follow a behavioral scientist’s advice on how to reorganize your refrigerator to waste less food, save money and protect the planet.',
    url: 'https://www.washingtonpost.com/climate-solutions/2023/11/21/food-waste-fridge-feng-shui/',
    urlToImage:
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/11-20-2023/t_2a877cd87bf44d1dbd590234a4e6dc3d_name_1___1920x1080___30p_00_01_43_15_Still015.jpg&w=1440',
    publishedAt: '2023-11-21T14:30:00Z',
    content:
      'Comment on this story\r\nComment\r\nAdd to your saved stories\r\nSave\r\nYour fridge is probably a pretty modern, efficient, carefully engineered machine. But Jiaying Zhao, a behavioral scientist at the Univ… [+3476 chars]',
  },
  {
    source: {
      id: 'abc-news',
      name: 'ABC News',
    },
    author: 'DAVID KOENIG AP airlines writer',
    title:
      'Record crowds are expected to take to the air and roads for Thanksgiving - ABC News',
    description:
      'Millions of people are expected to hit airports and highways in record numbers over the Thanksgiving holiday',
    url: 'https://abcnews.go.com/Travel/wireStory/record-crowds-expected-air-roads-thanksgiving-105056352',
    urlToImage:
      'https://i.abcnewsfe.com/a/6fa3b001-1da9-4ca3-b497-97018ddddd52/wirestory_4dc8ec8af36e686c1bc116df5d736562_16x9.jpg?w=992',
    publishedAt: '2023-11-21T14:11:53Z',
    content:
      'DALLAS -- Despite inflation and memories of past holiday travel meltdowns, millions of people are expected to hit airports and highways in record numbers over the Thanksgiving break.\r\nThe busiest day… [+5346 chars]',
  },
  {
    source: {
      id: null,
      name: 'TheStreet',
    },
    author: 'TheStreet',
    title:
      "Lowe's tumbles as retailer echoes Home Depot warning on big ticket spending - TheStreet",
    description: null,
    url: 'https://www.thestreet.com/investing/stocks/lowes-tumbles-as-retailer-echoes-home-depot-warning-on-big-ticket-spending',
    urlToImage: null,
    publishedAt: '2023-11-21T14:05:16Z',
    content: null,
  },
  {
    source: {
      id: null,
      name: 'CNBC',
    },
    author: 'Gabrielle Fonrouge',
    title:
      'Shares of American Eagle plummet 17% on unimpressive holiday forecast - CNBC',
    description:
      "American Eagle issued a holiday forecast that failed to impress Wall Street, following a string of retailers who've issued muted guidance for the season.",
    url: 'https://www.cnbc.com/2023/11/21/american-eagle-aeo-earnings-q3-2023.html',
    urlToImage:
      'https://image.cnbcfm.com/api/v1/image/107296568-1694022679378-gettyimages-1237697635-BC_AmericanEagle_9555.jpeg?v=1694022734&w=1920&h=1080',
    publishedAt: '2023-11-21T14:04:29Z',
    content:
      'Shares of American Eagle plummeted about 17% Tuesday after the company issued a holiday forecast that failed to impress. \r\nFor its holiday quarter, American Eagle expects sales to be up high-single d… [+2448 chars]',
  },
  {
    source: {
      id: null,
      name: 'CNBC',
    },
    author: 'Jessica Dickler',
    title:
      'Black Friday deals aren’t as good as you think. Here’s how to snag even lower prices - CNBC',
    description:
      'Stores try to tempt you with Black Friday discounts, but these are not necessarily the best prices of the year, according to shopping experts.',
    url: 'https://www.cnbc.com/2023/11/21/black-friday-deals-arent-always-the-best-how-to-snag-lower-prices.html',
    urlToImage:
      'https://image.cnbcfm.com/api/v1/image/107157057-1669387338530-gettyimages-1245081291-BLACK_FRIDAY_2022.jpeg?v=1669486220&w=1920&h=1080',
    publishedAt: '2023-11-21T13:38:11Z',
    content:
      'By most accounts, Black Friday and Cyber Monday promise some of the lowest prices of the season.\r\nAnd in 2023, more people than ever plan to take advantage of the five-day shopping event that begins … [+3118 chars]',
  },
  {
    source: {
      id: 'cnn',
      name: 'CNN',
    },
    author: 'Brian Fung, Clare Duffy',
    title:
      'Pro-Nazi posts next to Apple ads: Elon Musk’s X sues watchdog for its damning report - CNN',
    description:
      'After a devastating advertiser exodus last week involving some of the world’s largest media companies, X owner Elon Musk is suing the progressive watchdog group Media Matters over its analysis highlighting antisemitic and pro-Nazi content on X — a report that…',
    url: 'https://www.cnn.com/2023/11/20/tech/x-sues-media-matters/index.html',
    urlToImage:
      'https://media.cnn.com/api/v1/images/stellar/prod/230914104751-elon-musk-061623.jpg?c=16x9&q=w_800,c_fill',
    publishedAt: '2023-11-21T13:17:00Z',
    content:
      'After a devastating advertiser exodus last week involving some of the worlds largest media companies, X owner Elon Musk is suing the progressive watchdog group Media Matters over its analysis highlig… [+6459 chars]',
  },
  {
    source: {
      id: null,
      name: 'Fox Business',
    },
    author: 'Lawrence Richard',
    title:
      'Texas AG sues Pfizer for allegedly selling medicine it knew was ineffective, manipulated quality-test results - Fox Business',
    description:
      'Texas Attorney General Ken Paxton has sued Pfizer for allegedly selling medicine it knew to be ineffective and manipulating quality-test results.',
    url: 'https://www.foxbusiness.com/politics/texas-ag-sues-pfizer-allegedly-selling-medicine-knew-ineffective-manipulated-quality-test-results',
    urlToImage:
      'https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/11/0/0/GettyImages-1236831296.jpg?ve=1&tl=1',
    publishedAt: '2023-11-21T13:06:00Z',
    content:
      'Texas Attorney General Ken Paxton has sued Pfizer and its drug manufacturer for allegedly providing medicine it knew to be ineffective.\r\nIn a lawsuit unsealed Monday, Paxton sued Pfizer, Inc., Tris P… [+3254 chars]',
  },
  {
    source: {
      id: null,
      name: 'CNBC',
    },
    author: 'Emily Lorsch',
    title:
      "A divorce could cost you more than $140,000. Here's how to prevent a costly split - CNBC",
    description:
      "No one plans on getting divorced. But if you have to part ways with your spouse, here's how to keep your costs down.",
    url: 'https://www.cnbc.com/2023/11/21/heres-how-to-prevent-a-costly-divorce.html',
    urlToImage:
      'https://image.cnbcfm.com/api/v1/image/107329693-1699299642817-GettyImages-1482852071_1.jpg?v=1699299703&w=1920&h=1080',
    publishedAt: '2023-11-21T13:00:01Z',
    content:
      'We all know divorces are not uncommon in the U.S.\r\nSome of the most public splits over the years have included those of celebrities such as Johnny Depp and Amber Heard, Jennifer Lopez and Marc Anthon… [+3410 chars]',
  },
  {
    source: {
      id: null,
      name: 'Yahoo Entertainment',
    },
    author: 'Brooke DiPalma',
    title:
      'Best Buy stock drops as it posts broad sales decline for Q3 - Yahoo Finance',
    description:
      'Sales of appliances, consumer electronics, computing and mobile phones all came in lower, but the company saw strength in its entertainment products.',
    url: 'https://finance.yahoo.com/news/best-buy-stock-drops-as-it-posts-broad-sales-decline-for-q3-125141935.html',
    urlToImage:
      'https://s.yimg.com/ny/api/res/1.2/wFymT6rzwS3px2fYvEVXkA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-10/99c4be60-6f87-11ee-9b87-cb72448acf3f',
    publishedAt: '2023-11-21T12:51:41Z',
    content:
      "Consumers are pulling back on discretionary goods, turning down the wattage on Best Buy's (BBY) Q3 results.\r\nShares of the electronics retailer are down more than 4% early Tuesday, after the company … [+4607 chars]",
  },
  {
    source: {
      id: null,
      name: 'PRNewswire',
    },
    author: null,
    title:
      'Broadcom and VMware Intend to Close Transaction on November 22, 2023 - PR Newswire',
    description:
      '/PRNewswire/ -- Broadcom Inc. (NASDAQ: AVGO) and VMware, Inc. (NYSE: VMW) today announced that they have received all required regulatory approvals and intend...',
    url: 'https://www.prnewswire.com/news-releases/broadcom-and-vmware-intend-to-close-transaction-on-november-22-2023-301994774.html',
    urlToImage: null,
    publishedAt: '2023-11-21T12:45:00Z',
    content:
      'Receives Final Regulatory Approval for Transaction\r\nSAN JOSE, Calif. and PALO ALTO, Calif., Nov. 21, 2023 /PRNewswire/ -- Broadcom Inc. (NASDAQ: AVGO) and VMware, Inc. (NYSE: VMW) today announced tha… [+7856 chars]',
  },
  {
    source: {
      id: 'bloomberg',
      name: 'Bloomberg',
    },
    author: null,
    title:
      'Microsoft Hiring Sam Altman Presents New Challenges for Company - Bloomberg',
    description: null,
    url: 'https://www.bloomberg.com/news/articles/2023-11-21/microsoft-hiring-sam-altman-presents-new-challenges-for-company',
    urlToImage: null,
    publishedAt: '2023-11-21T12:06:03Z',
    content:
      "To continue, please click the box below to let us know you're not a robot.",
  },
  {
    source: {
      id: null,
      name: 'MarketWatch',
    },
    author: 'Barbara Kollmeyer',
    title:
      "Get ready to buy the dip in 2024 as the S&P 500 finds its 'true bottom.' - MarketWatch",
    description: 'Critical information for the U.S. trading day',
    url: 'https://www.marketwatch.com/story/a-dip-buying-year-awaits-investors-in-2024-as-s-p-500-finds-true-bottom-says-this-wall-street-bank-9cca04e3',
    urlToImage: 'https://images.mktw.net/im-26183394/social',
    publishedAt: '2023-11-21T11:54:00Z',
    content:
      'While falling bond-yield heroes helped drag the S&amp;P 500 SPX out of a quick and dirty correction, were about to find out how much earnings still matter for markets, with mega performer Nvidia rele… [+240 chars]',
  },
  {
    source: {
      id: null,
      name: 'HuffPost',
    },
    author: 'AP',
    title:
      'Government Makes More Free COVID Tests Available For The Holidays - HuffPost',
    description: 'Americans can order four free COVID-19 tests again online.',
    url: 'https://www.huffpost.com/entry/free-covid-tests_n_655c96ede4b0c0333bed78ae',
    urlToImage:
      'https://img.huffingtonpost.com/asset/655c96f1220000bd1518e6fe.jpeg?cache=Ed26bwPp6G&ops=1200_630',
    publishedAt: '2023-11-21T11:47:18Z',
    content:
      'WASHINGTON (AP) Americans can order more free COVID-19 tests online for home delivery.\r\nThe U.S. government is offering to send another round of four at-home virus tests ahead of the typical surge in… [+1528 chars]',
  },
  {
    source: {
      id: null,
      name: 'Merck.com',
    },
    author: null,
    title: 'Merck to Acquire Caraway Therapeutics, Inc. - Merck',
    description:
      'Acquisition underscores Merck’s ongoing commitment to developing treatments for neurodegenerative diseases Merck (NYSE: MRK), known as MSD outside of the United States and Canada, and Caraway Therapeutics, Inc. announced today that the companies have entered …',
    url: 'https://www.merck.com/news/merck-to-acquire-caraway-therapeutics-inc/',
    urlToImage:
      'https://cts.businesswire.com/ct/CT?id=bwnews&sty=20231121533067r1&sid=q4-prod&distro=nx&lang=en',
    publishedAt: '2023-11-21T11:45:00Z',
    content:
      'November 21, 2023 6:45 am ET \r\nAcquisition underscores Mercks ongoing commitment to developing treatments for neurodegenerative diseases\r\nRAHWAY, N.J., &amp; CAMBRIDGE, Mass.--(BUSINESS WIRE)-- \r\nMer… [+6413 chars]',
  },
  {
    source: {
      id: null,
      name: "Barron's",
    },
    author: 'Jack Denton',
    title:
      "Baidu Stock Gains After Earnings Beat. AI Is Making Money, but Risks Loom. - Barron's",
    description:
      'The Chinese tech company reported third-quarter earnings of $2.86 a share on revenue of $4.8 billion.',
    url: 'https://www.barrons.com/articles/baidu-earnings-price-stock-e8844a66',
    urlToImage: 'https://images.barrons.com/im-317647/social',
    publishedAt: '2023-11-21T11:31:21Z',
    content:
      'Updated Nov 21, 2023, 6:30 am EST / Original Nov 20, 2023, 4:55 pm EST',
  },
  {
    source: {
      id: null,
      name: 'Forbes',
    },
    author: 'Jeffrey Marcus',
    title:
      'Holiday Shoppers May Be Leaving Black Friday And Cyber Monday Behind - Forbes',
    description:
      'Black Friday, the traditional start to the holiday shopping season, may have lost some of its importance for retailers and holds less appeal among deal-savvy consumers.',
    url: 'https://www.forbes.com/sites/jeffreymarcus/2023/11/21/holiday-shoppers-may-be-leaving-black-friday-and-cyber-monday-behind/',
    urlToImage:
      'https://imageio.forbes.com/specials-images/imageserve/655bce6e1e7ca549cb8d09d5/0x0.jpg?format=jpg&crop=3038,1707,x0,y0,safe&height=900&width=1600&fit=bounds',
    publishedAt: '2023-11-21T11:00:00Z',
    content:
      'The traditional start to the holiday shopping season may have lost some of its importance for retailers and holds less appeal among deal-savvy consumers.\r\nMore than half of American shoppers are expe… [+5968 chars]',
  },
  {
    source: {
      id: null,
      name: 'CoinDesk',
    },
    author: 'Omkar Godbole',
    title: 'Fed Minutes Release May Be a Non-Event for Bitcoin - CoinDesk',
    description:
      'The minutes of the Nov. 1 Fed meeting may be outdated, given the post-meeting softness in economic data and resulting expectations for renewed interest-rate cuts in 2024.',
    url: 'https://www.coindesk.com/markets/2023/11/21/fed-minutes-release-may-be-a-non-event-for-bitcoin/',
    urlToImage:
      'https://www.coindesk.com/resizer/djophja4R5EKZqEm059rn2PflMM=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/W64K6VDAJZEYPEIGDP2DXLKKGI.jpg',
    publishedAt: '2023-11-21T10:32:00Z',
    content:
      '<ul><li>The minutes of the Nov. 1 Fed meeting might look outdated and potential hawkish commentary may not affect markets, including bitcoin.\r\n</li><li>Post-meeting weakness in U.S. economic data has… [+3652 chars]',
  },
  {
    source: {
      id: null,
      name: 'Yahoo Entertainment',
    },
    author: 'Josh Schafer',
    title:
      'Nvidia earnings: OpenAI drama, record high stock price set the table for key report - Yahoo Finance',
    description:
      "Nvidia's stock reached a record high ahead of the company's earnings report, set for release on Tuesday after the bell.",
    url: 'https://finance.yahoo.com/news/nvidia-earnings-openai-drama-record-high-stock-price-set-the-table-for-key-report-211445574.html',
    urlToImage:
      'https://s.yimg.com/ny/api/res/1.2/FslAYptRrZS6fmFdZ3lsFQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04NzI-/https://s.yimg.com/os/creatr-uploaded-images/2023-11/b34b3ca0-87ca-11ee-bab3-68e43893e48e',
    publishedAt: '2023-11-21T10:05:38Z',
    content:
      'Nvidia (NVDA) is set to report third quarter earnings after the bell on Tuesday as Wall Street eagerly awaits an update on the fundamentals behind the artificial intelligence hype cycle.\r\nThis report… [+3460 chars]',
  },
];

export const Feed = () => {
  return (
    <>
      <h1 className="w-auto p-3 text-large font-bold">Your Feed</h1>
      <ArticleList
        articles={articles.map((article) => ({
          ...article,
          sourceName: article.source.name,
          imageUrl: article.urlToImage,
        }))}
      />
    </>
  );
};
