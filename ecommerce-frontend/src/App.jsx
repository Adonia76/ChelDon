import React from 'react';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import CSS untuk styling
import ProdukList from './components/ProdukList.jsx';
import TambahProduk from './components/tambahproduk.jsx';

function App() {
  return (
    <div>
      {/* Container Utama */}
      <div className="container text-center p-4 bg-white rounded shadow" style={{ maxWidth: '800px' }}>
        <h1 className="mb-4">E-Commerce Sederhana</h1>

        {/* Form Tambah Produk */}
        <TambahProduk />

        {/* Garis Pemisah */}
        <hr className="my-4" />

        {/* Daftar Produk */}
        <ProdukList />
      </div>

      {/* Toast Container untuk Notifikasi */}
      <ToastContainer
        position="top-right" // Posisi notifikasi
        autoClose={3000} // Waktu notifikasi hilang (ms)
        hideProgressBar={false} // Menampilkan progress bar
        newestOnTop={true} // Notifikasi terbaru di atas
        closeOnClick // Tutup saat diklik
        rtl={false} // RTL mode (false untuk LTR)
        pauseOnFocusLoss // Jeda saat kehilangan fokus
        draggable // Dapat didrag
        pauseOnHover // Jeda saat hover
      />
    </div>
  );
}

export default App;