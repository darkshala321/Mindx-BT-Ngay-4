import React from 'react';

function ProductList({ products }) {
  return (
    <div className='ProductList'>
      {products.map((product, index) => (
        <div key={index} className='ProductCard'>
          <img src={product.img} alt={product.name} />
          <h2>{product.name}</h2>
          <p className='discounted-price'>Giá: {product.discount}đ</p>
          <p className='original-price'>
            Giá gốc: <span className='strike-through'>{product.price}đ - {product.discount}%</span>
          </p>
          <p>Chip: {product.chip}</p>
          <p>Kích thước màn hình: {product.sizeScreen} inch</p>
          <p>RAM: {product.ram}GB</p>
          <p>Bộ nhớ trong: {product.rom}GB</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;