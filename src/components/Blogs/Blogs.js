import axios from 'axios';
import './blogs.css'
import { useState, useEffect } from 'react';
import { Blog } from '../Blog/Blog';

export const Blogs = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://newsapi.org/v2/everything?q=tesla&from=2024-05-22&sortBy=publishedAt&apiKey=d8717e94dd124ef0aa3bd6a3349efa3e")
            .then((response) => {
                setData(response.data.articles);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className='blogsContainer'>
            {data.map((article) => (
                <Blog key={article.title} image={article.urlToImage} title={article.title} description={article.description} url={article.url} author={article.source.name} />
            ))}
        </div>
    );
};