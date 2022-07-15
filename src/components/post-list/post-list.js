import React from 'react';
import PostListItem from '../post-list-item';
import {ListGroup} from 'reactstrap';
import './post-list.css';

const PostList = ({posts, onDelete, onToggleProp }) => {  // onToggleImportant, onToggleLiked
    
    const elements = posts.map((item) => {
        if(typeof item !== 'object' ) {
            return false;
        }
        if(typeof item == 'object' && Object.getOwnPropertyNames(item).length === 0 ){
            return false; 
        }
        const {id, ...itemProps} = item;

        return (
            <li key={id} className='list-group-item'>
            <PostListItem 
            {...itemProps}
            onDelete={() => onDelete(id)}
            // onToggleImportant={() => onToggleImportant(id)}
            // onToggleLiked={() => onToggleLiked(id)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))} 
            />
            </li>
        )
        
    })
    
    return (
        <ListGroup className="app-list">
            
            {elements}

        </ListGroup>
    )
}

export default PostList;