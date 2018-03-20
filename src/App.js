import React from 'react';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Online Home Store</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Cart />
                </div>
                <div className="col-md-12">
                    <ProductList />
                </div>
                
            </div>

        </div>
    );
}

export default App;
