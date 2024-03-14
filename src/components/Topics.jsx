import React, { useEffect, useState } from 'react';
import { fetchAllTopics } from '../../apis';
import TopicShowCard from './TopicShowCard';

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
    }, [])
    if(isLoading) return <h1>Loading...</h1>
    return (
        <div id = "topics">
            <p className= "topic-header">View Articles by Topics below</p>
            <ul className= 'topics-list'>
                {topics.map((topic) => {
                    return <TopicShowCard topic = {topic} key = {topic.slug}/>
                })}
            </ul>
        </div>
    );
};

export default Topics;