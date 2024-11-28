import { HashRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Home from "./page/Home/Home";
import Layout from "./layouts/layout/layout";
import Profile from "./page/Profile/Profile";
import Search from './page/Search/Search';
import Newpost from "./page/Newpost/Newpost";
import Chat from "./page/Chat/Chat";

import "./App.css";

const intTab = 'home';

function App() {
  const [count, setCount] = useState(0);
  const [tab, setTab] = useState('');
  const [posts, setPosts] = useState([]); // เก็บโพสต์ทั้งหมดใน state

  // ฟังก์ชันที่เพิ่มโพสต์ใหม่
  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]); // เพิ่มโพสต์ใหม่ไปด้านบน
  };

  useEffect(() => {
    setTab(intTab);
  }, []);

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route element={<Layout tab={tab} setTab={setTab} />}>
            <Route path={'/'} element={<Home posts={posts} />} />
            <Route path={'/Home'} element={<Home posts={posts} />} />
            <Route path={'/Profile'} element={<Profile />} />
            <Route path={'/Search'} element={<Search />} />
            <Route path={'/Newpost'} element={<Newpost onAddPost={handleAddPost} />} />
            <Route path={'/Chat'} element={<Chat />} />
            
          </Route>
        </Routes>
      </HashRouter> 
    </div>
  );
}

export default App;
// HELLO WORLD