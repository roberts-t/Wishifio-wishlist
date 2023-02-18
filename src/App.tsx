import { Route, Routes } from "react-router-dom"
import React from 'react';
import './App.css';
import { Home } from './screens/Home';
import { MakeWishlist } from './screens/MakeWishlist';
import { Wishlists } from './screens/Wishlists';
import { Wishlist } from './screens/Wishlist';
import { AddWish } from './screens/AddWish';
import { ProtectedRoute } from './components/ProtectedRoute';
import { EditWish } from "./screens/EditWish";
import { NotFound } from "./screens/NotFound";

function App() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route
                path="wishlist/create"
                element={<ProtectedRoute screen={<MakeWishlist />} />}
            />
            <Route
                path="wishlists"
                element={<ProtectedRoute screen={<Wishlists />} />}
            />
            <Route
                path="wishlist/:hash"
                element={<Wishlist />}
            />
            <Route
                path="wishlist/:hash/add"
                element={<ProtectedRoute screen={<AddWish />} />}
            />
            <Route
                path="wishlist/:hash/edit/:id"
                element={<ProtectedRoute screen={<EditWish />} />}
            />
            <Route path="*" element={<NotFound />} />
        </Routes>
  );
}

export default App;
