import React from 'react';
import { Link } from 'react-router-dom';


const TopicShowCard = ({topic}) => {
    const {slug, description} = topic;
    const topicsLink = `/articles?topic=${slug}`



    return (
        <div className = 'topic-container'>
            <p className='topic-item'><span className='topic-title'>{slug}</span></p>
            <p className='topic-item'><span className='topic-desc'>{description}</span></p>
            <Link to ={topicsLink}><button className='topic-item topic-button'>View</button></Link>
        </div>
    );
};

export default TopicShowCard;