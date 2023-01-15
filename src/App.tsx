import { Route, Routes } from "react-router-dom"
import React from 'react';
import './App.css';
import { Home } from './screens/Home';
import { MakeWishlist } from './screens/MakeWishlist';
import { Wishlists } from './screens/Wishlists';
import { Wishlist } from './screens/Wishlist';
import { AddWish } from './screens/AddWish';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="wishlist/create" element={<MakeWishlist />} />
            <Route path="wishlists" element={<Wishlists />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="wishlist/:id/add" element={<AddWish />} />
            <Route path="*" element={<div>404</div>} />
        </Routes>
  );
}

export default App;
