/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Product } from './pages/Product';
import { Story } from './pages/Story';
import { Booking } from './pages/Booking';
import { Blueprint } from './pages/Blueprint';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="story" element={<Story />} />
          <Route path="booking" element={<Booking />} />
          <Route path="blueprint" element={<Blueprint />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
