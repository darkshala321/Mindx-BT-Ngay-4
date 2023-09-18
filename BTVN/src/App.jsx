import React from 'react';
import ProductList from './components/ProductList';
import { hotTrend } from './components/data';
import Banner from './components/Banner';

function App() {
  const sampleProduct = {
    img: 'URL_HinhAnh',
    name: 'Tên Sản Phẩm',
    price: 'Giá Sản Phẩm',
    discount: 'Phần trăm Giảm giá',
    chip: 'Thông tin Chip',
    sizeScreen: 'Kích thước màn hình',
    ram: 'Số lượng RAM',
    rom: 'Số lượng ROM',
  };

  return (
    <div className='App'>
      <Banner />
      <ProductList products={[...hotTrend, sampleProduct]} />
    </div>
  );
}

export default App;
