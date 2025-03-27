import React, { useState } from 'react';
import axios from 'axios';

function TambahProduk() {
  const [nama, setNama] = useState('');
  const [harga, setHarga] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State untuk loading

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nama || !harga) {
      setError('Nama dan Harga wajib diisi');
      return;
    }

    setError('');
    setIsLoading(true); // Aktifkan loading

    try {
      await axios.post('http://localhost:3001/produk', { nama, harga });
      setNama('');
      setHarga('');
    } catch (err) {
      console.error('Error menambah produk:', err);
      setError('Gagal menambah produk. Silakan coba lagi.');
    } finally {
      setIsLoading(false); // Matikan loading
    }
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title mb-4">Tambah Produk</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          {/* Input Nama dan Harga */}
          <div className="mb-3">
            <label className="form-label">Nama Produk</label>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="form-control"
              placeholder="Contoh: Laptop Gaming"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Harga</label>
            <input
              type="number"
              value={harga}
              onChange={(e) => setHarga(e.target.value)}
              className="form-control"
              placeholder="Contoh: 15000000"
              required
            />
          </div>
          <button 
            type="submit" 
            className="btn btn-success w-100" 
            disabled={isLoading} // Nonaktifkan tombol saat loading
          >
            {isLoading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2"></span>
                Menyimpan...
              </>
            ) : (
              'Tambah Produk'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default TambahProduk;