import { Route, Routes } from "react-router-dom"
import React, { useContext } from 'react';
import './App.css';
import { Home } from './screens/Home';
import { MakeWishlist } from './screens/MakeWishlist';
import { Wishlists } from './screens/Wishlists';
import { Wishlist } from './screens/Wishlist';
import { AddWish } from './screens/AddWish';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AuthContext, AuthContextType } from './context/AuthContext';
import { EditWish } from "./screens/EditWish";
import { NotFound } from "./screens/NotFound";

function App() {

    const { isAuthenticated, isLoading, user } = useContext(AuthContext) as AuthContextType;

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route
                path="wishlist/create"
                element={
                    <ProtectedRoute user={user} isAuthenticated={isAuthenticated} isLoading={isLoading}>
                        <MakeWishlist />
                    </ProtectedRoute>
                }
            />
            <Route
                path="wishlists"
                element={
                    <ProtectedRoute user={user} isAuthenticated={isAuthenticated} isLoading={isLoading}>
                        <Wishlists />
                    </ProtectedRoute>
                }
            />
            <Route path="wishlist/:hash" element={<Wishlist />} />
            <Route path="wishlist/:hash/add" element={<AddWish />} />
            <Route path="wishlist/:hash/edit/:id" element={<EditWish />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
  );
}

export default App;
