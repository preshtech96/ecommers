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
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center">Top Headlines News</h1>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <ul className="space-y-8">
        {news.map((item, index) => (
          <li key={index} className="border rounded-lg p-4 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {item.title}
              </a>
            </h2>
            {item.photo_url && (
              <img
                src={item.photo_url}
                alt="news"
                className="w-full max-h-64 object-cover rounded-md mb-4"
              />
            )}
            <p><span className="font-semibold">Author:</span> {item.authors?.join(', ')}</p>
            <p><span className="font-semibold">Published:</span> {item.published_datetime_utc}</p>
            <p><span className="font-semibold">Snippet:</span> {item.snippet}</p>
            <p><span className="font-semibold">Source:</span> {item.source_name}</p>

            {item.related_topics?.length > 0 && (
              <p><span className="font-semibold">Topics:</span> {item.related_topics.join(', ')}</p>
            )}

            {item.sub_articles?.length > 0 && (
              <div className="mt-2">
                <p className="font-semibold">Sub Articles:</p>
                <ul className="list-disc list-inside">
                  {item.sub_articles.slice(0, 3).map((sub, subIndex) => (
                    <li key={subIndex}>
                      <a
                        href={sub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        {sub.title}
                      </a>
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
