import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BlogPost = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const res = await axios(
                'https://content.guardianapis.com/search?api-key=dda0d172-e5ce-49be-8b42-44ec0ef9eed8'
            );
            const data = res.data.response.results;
            setNews(data);
        };

        fetchNews();
    }, []);

    return (
        <div className={'container px-4 px-lg-5'}>
            <div className={'row gx-4 gx-lg-5 justify-content-center'}>
                <div className={'col-11'}>
                    {news.map((post) => (
                        <div className="post-preview">
                            <span>
                                {post.pillarName}, {post.sectionName}
                            </span>
                            <h4 className="post-title" key={post.id}>
                                {post.webTitle}
                            </h4>
                            <a href={post.webUrl} target="_blank">
                                Read More...
                            </a>
                            <h2 className="post-meta">
                                Posted on {post.webPublicationDate}
                            </h2>

                            <hr className="my-4" />
                        </div>
                    ))}
                    <div class="d-flex justify-content-end mb-4">
                        <a class="btn btn-primary text-uppercase" href="#">
                            Older Newzzz →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
