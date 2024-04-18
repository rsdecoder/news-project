import React, { useEffect, useState } from 'react';
import { fetchAllTopics } from '../../apis';
import TopicShowCard from './TopicShowCard';
import { ThreeDots } from 'react-loader-spinner';

const Topics = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [topics, setTopics] =  useState([])

    useEffect(() => {
        setIsLoading(true);
        fetchAllTopics()
        .then(({topics}) => {
            setTopics(topics)
            setIsLoading(false)
        })
    }, []);

    

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
        <div id = "topics-page">
            <p className= "topic-header">View Articles by the following topics.</p>
            <div className = 'topics-container'>
                {topics.map((topic) => {
                    return <TopicShowCard topic = {topic} key = {topic.slug}/>
                })}
            </div>
            
        </div>
    );
};

export default Topics;