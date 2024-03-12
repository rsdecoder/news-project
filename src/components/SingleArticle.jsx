import React from 'react';
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import  { fetchArticlesById }  from '../../apis';

const SingleArticle = () => {
    const {article_id} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [article, setArticle] = useState({})
    useEffect(() => {
        setIsLoading(true)
        fetchArticlesById(article_id)
        .then(({article}) => {
            setArticle(article[0])
            setIsLoading(false)
        })
    }, [])
    if(isLoading) return <h1>Loading...</h1>
    return (
        <div className="single-article-container">
            <h1 className ="">{article.title}</h1><br></br>
            <img className = "single-article-img" src = {article.article_img_url} alt = "image" width="500px"/>
            <article>
                <p><b>{article.body}</b></p><br></br>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita neque temporibus nisi nihil, amet deserunt asperiores dolorem porro natus vitae ut dignissimos facere vel minus rem, possimus accusantium, doloribus dolorum?
            Eum suscipit eius ipsum quaerat soluta iure. Veniam dicta neque eligendi cum quod autem quasi perspiciatis, accusantium odit quidem quisquam harum ipsa ut nisi laboriosam vitae! Numquam hic minima praesentium.
            Corporis natus eaque quos eveniet ea maxime? Ipsum porro eum id assumenda non, commodi quod error necessitatibus perferendis corporis tempora est labore harum quisquam architecto illum dolorum ut? Qui, consequatur?
            Nihil expedita non rem. Dolores atque nesciunt incidunt praesentium repellendus. Consequuntur, atque corrupti fugiat repellendus veritatis quam ullam possimus odio, eum vero voluptatem eius quas at a nihil et optio!
            Sit ab vero, inventore placeat quia repudiandae dignissimos itaque doloremque possimus molestiae soluta vitae quisquam qui consectetur odio dolor explicabo est neque ratione nobis ex quasi quas? Ipsum, voluptatum nesciunt?
            </p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia consequuntur ullam molestias eveniet ipsum sed animi, totam praesentium corrupti voluptatibus distinctio delectus cupiditate obcaecati provident recusandae? Ut iure sunt porro?
            Voluptatum minus a vero similique sint debitis expedita aut illo! Animi id provident error commodi quibusdam, iure quo voluptatum vero? Labore harum quia impedit minus officiis enim aspernatur quis asperiores.
            Nulla ratione quis officiis perspiciatis magni debitis distinctio recusandae culpa sint, fugiat, expedita repudiandae ab tempora nobis. Perferendis in molestias quam recusandae aspernatur facere repudiandae cumque, quas dicta, eos veritatis?
            Accusamus officiis qui sed laborum facilis, aliquid vel alias hic ducimus nisi sint nemo fugiat, suscipit praesentium quo maxime odit facere ratione molestiae nam veritatis optio perspiciatis! Quisquam, inventore sint.
            Porro reiciendis placeat vero minima recusandae veniam aut quisquam. Dolores consequatur ullam dicta quidem ipsum quas sint repellendus debitis neque quam maxime consectetur, quibusdam nemo numquam molestias voluptates ratione tempora.
            </p>
            </article><br></br>
            <p><b>Written by:</b> <i>{article.author}</i></p>
            <p><b>Date created</b> - {article.created_at}</p>
        </div>
    );
};

export default SingleArticle;