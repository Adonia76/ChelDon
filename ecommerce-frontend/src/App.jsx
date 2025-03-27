import React from 'react';
import ProdukList from './components/ProdukList.jsx';
import TambahProduk from './components/tambahproduk.jsx';

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center bg-light">
      {/* Container Utama */}
      <div className="container text-center p-4 bg-white rounded shadow" style={{ maxWidth: '600px' }}>
        <h1 className="mb-4">E-Commerce Sederhana</h1>

        {/* Form Tambah Produk */}
        <TambahProduk />

        {/* Garis Pemisah */}
        <hr className="my-4" />

        {/* Daftar Produk */}
        <ProdukList />
      </div>
    </div>
  );
}

export default App;