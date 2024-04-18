import React from 'react';
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import  { fetchArticlesById }  from '../../apis';
import Comments from './Comments';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Expander from './Expander';
import { patchArticle } from '../../apis';
import ErrorPage from './ErrorPage';
import { ThreeDots } from 'react-loader-spinner';

const SingleArticle = () => {
    const [err, setErr] = useState(null)
    const {article_id} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [article, setArticle] = useState({})


    useEffect(() => {
        setIsLoading(true)
        fetchArticlesById(article_id)
        .then(({article}) => {
            setArticle(article)
            setIsLoading(false)
        }).catch((err) => {
            const {msg}= err.response.data
            setErr(msg)
        })
    }, []);
    
    function upVote() {      
        setArticle((currArticle) => {
            return currArticle.map((article) => {
                return {...article, votes: article.votes + 1}
            })
        });
        const incVotes = 1
        patchArticle(article_id, incVotes).catch((err) => {
            setArticle((currArticle) => {
                return currArticle.map((article) => {
                    return {...article, votes: article.votes - 1}
                });
            });          
        });
    
    }

    function downVote() {
        setArticle((currArticle) => {
            return currArticle.map((article) => { 
                return {...article, votes: article.votes - 1}
            })
        }); 
        const decVotes = -1;
        patchArticle(article_id, decVotes).catch((err) =>  {
            setArticle((currArticle) => {
                return currArticle.map((article) => {
                    return {...article, votes: article.votes + 1}
                })
            }) 
        })    
    }
    if(err) return <ErrorPage error = {err}/>

    if(isLoading) {
        return(<ThreeDots
            visible={true}
            height= "30%"
            width="30%"
            color="#4fa94d"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass="spinner-icon"
            />)
    }


    return (
        
        <div className="single-article-container">
            <h1 className ="single-article-title">{article[0].title}</h1><br></br>
            <img className = "single-article-img" src = {article[0].article_img_url} alt = "image" width="500px"/>
            <section className = "vote-section">
                <div className = "vote">
                    <button value = "up" className='button-vote up-vote' onClick = {upVote}><ThumbUpIcon className ='like-button'/></button>
                    <p className='vote-section-item vote-count'>{article[0].votes}</p>
                    <button value = "down" className='button-vote down-vote' onClick = {downVote}><ThumbDownIcon className ='dislike-button'/></button>    
                </div>
                <Expander className = "comments-expander" comment_count = {article[0].comment_count}>
                    <Comments articleId = {article_id}/>
                </Expander>
            </section>
            <article>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure unde labore expedita obcaecati? Alias vel quae beatae! Corrupti odit at illo harum, aliquam quod dicta quaerat quidem? Soluta, magnam perspiciatis?
                Expedita enim aperiam facere beatae molestiae, perspiciatis assumenda eius modi ipsa ipsam incidunt iure quaerat quod aliquam, sed quia totam. Provident vitae repellat cumque soluta quia facilis quisquam animi impedit!
                Omnis voluptate, aut magnam sit quia asperiores sint explicabo, sequi nihil accusamus ipsa veritatis itaque ipsum praesentium impedit quasi amet earum ea iusto consectetur tenetur nam minima totam. Voluptas, distinctio?
                Velit repellat veritatis fugit, quae dolorum quis consequatur aut rerum placeat asperiores natus at mollitia fuga est atque et cupiditate ea aliquam beatae odit repudiandae eveniet nihil, amet doloribus? Aut.
                Neque porro placeat sint, consectetur autem tempora in atque numquam, repellendus quidem iure laborum dolorum eveniet labore rem possimus temporibus quisquam error aspernatur sapiente dolor officiis eum? Consectetur, ut earum?
                </p><br></br>
                <p>Esse fugiat minus eveniet labore, ipsam suscipit officiis, beatae nisi enim maiores unde aspernatur recusandae molestias rem, blanditiis incidunt! Labore sapiente sed esse fuga possimus ipsum, consequuntur consequatur velit deleniti!
                Suscipit alias accusamus explicabo quidem dicta ab commodi nihil quo enim veniam, recusandae porro facere dolore dolorem neque. Perferendis, eos sint voluptates facere consequuntur ad a repellendus iste explicabo ea.
                Dolores, voluptatum numquam illo, libero ex ipsum, recusandae cupiditate praesentium quisquam natus exercitationem alias quae laudantium esse aut officia. Neque labore temporibus cum sapiente nulla dicta, iste quaerat praesentium harum.
                Sapiente asperiores quis itaque iste, aut, necessitatibus tempora vel nulla, dolores eos error cum! Error aperiam ea facilis voluptate cupiditate excepturi, dolore repudiandae autem consectetur qui atque debitis unde culpa!
                Sequi sit tenetur itaque esse obcaecati iusto harum velit cum, illum vel. Harum dolorem eveniet, id temporibus quibusdam laudantium, recusandae ea sit aspernatur, sapiente iste velit eius cumque ab! Ullam.</p><br></br>
            </article><br></br>
            <section className = 'article-end-section'>
                <p className = 'article-end-section-item'><b>Written by:</b> <span className='author-name'>{article[0].author}</span></p>
                <p className = 'article-end-section-item'><span className = 'divider'>|</span><em>{(article[0].created_at)}</em></p>
            </section>
        </div>
    );
};

export default SingleArticle;