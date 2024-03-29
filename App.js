import React, {useState} from 'react'
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css"
import PostItem from "./components/PostItem";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javasript', body: 'Description'},
        {id: 2, title: 'Javasript 2', body: 'Description'},
        {id: 3, title: 'Javasript 3', body: 'Description'},
    ])


    return (
        <div className="App">
            <h1 style={{textAlign: 'center'}}>
                Список постов
            </h1>
            {posts.map(post =>
                <PostItem post={post} key={post.id}/>
            )}
        </div>
    );
}

export default App;
