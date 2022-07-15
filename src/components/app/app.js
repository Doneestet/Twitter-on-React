import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';
// import style from './App.module.css'; 
// import styled from 'styled-components';
// // import nextId from "react-id-generator";

// const AppBlock = styled.div `
//         margin: 0 auto;
//         max-width: 800px;
// `;





export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : [
                {label: 'Going to learn React', important: true, like: false, id: 1},
                {label: 'That is good', important: false, like: false, id: 2},
                {label: 'I need a break...', important: false, like: false, id: 3}
            ],
            term: '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        // this.onToggleImportant = this.onToggleImportant.bind(this);
        // this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onToggleProp= this.onToggleProp.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);

        this.maxId = 4;
    }
    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)

            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArray = [...before, ...after];

            return {
                data: newArray
            }
        })
    } 
    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArray = [...data, newItem];
            console.log(newArray)
            return {
                data: newArray,
            }
        })
    }

   
    onToggleProp(id, prop) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, [prop]: !old[prop]}; // перезаписывает свойство лайк в объекте

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data:newArr
            }
        })
    }
  

    filterPost(items, filter) {
        if(filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }
    
    searchPost(items, term) {
        if(term.length === 0) {
            return items
        } 
        return items.filter((item) => {
            return item.label.indexOf(term) > - 1 // -1 будет если не найдет совпадений
        })
    }

    onUpdateSearch(term) {
        this.setState({term});
    }

    onFilterSelect(filter) {
        this.setState({filter});
    }


    render() {
        const {data, term, filter} = this.state;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <div className="app">
                <AppHeader 
                liked={liked}
                allPosts={allPosts}/>
                <div className="search-panel d-flex">
                <SearchPanel 
                    onUpdateSearch = {this.onUpdateSearch}/>
                <PostStatusFilter 
                filter = {filter}
                onFilterSelect={this.onFilterSelect}/>
            </div>
            <PostList 
            posts={visiblePosts} 
            onDelete = {this.deleteItem}
            // onToggleImportant = {this.onToggleImportant}
            // onToggleLiked = {this.onToggleLiked}
            onToggleProp = {this.onToggleProp}
            />
            <PostAddForm 
            onAdd={this.addItem}/>
            </div>
        );
    }
}



