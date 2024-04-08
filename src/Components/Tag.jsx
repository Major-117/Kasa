import React from 'react';

const Tags = ({ tags }) => {
    return (
        <ul className="globalTag">
            {tags.map((tag, index) => (
                <li className="tag" key={index}>{tag}</li>
            ))}
        </ul>
    );
};

export default Tags;