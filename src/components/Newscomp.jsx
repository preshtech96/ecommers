import React, { useEffect, useState } from 'react';

const Newscomp = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const url = 'https://real-time-news-data.p.rapidapi.com/top-headlines?limit=10&country=US&lang=en';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '854660b5bemshdd177fb04fbf564p1bb694jsn9571180e5941',
          'x-rapidapi-host': 'real-time-news-data.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setNews(result.data);
        console.log(result);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch news.');
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h1>Top Headlines News</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {news.map((item, index) => (
          <li key={index} style={{ marginBottom: '2rem' }}>
            <h2>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </h2>
            {item.photo_url && <img src={item.photo_url} alt="news" style={{ maxWidth: '100%' }} />}
            <p><strong>Author:</strong> {item.authors?.join(', ')}</p>
            <p><strong>Published:</strong> {item.published_datetime_utc}</p>
            <p><strong>Snippet:</strong> {item.snippet}</p>
            <p><strong>Source:</strong> {item.source_name}</p>
            {item.related_topics?.length > 0 && (
              <p><strong>Topics:</strong> {item.related_topics.join(', ')}</p>
            )}
            {item.sub_articles?.length > 0 && (
              <div>
                <strong>Sub Articles:</strong>
                <ul>
                  {item.sub_articles.slice(0, 3).map((sub, subIndex) => (
                    <li key={subIndex}>
                      <a href={sub.link} target="_blank" rel="noopener noreferrer">{sub.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Newscomp;
