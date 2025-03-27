import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProdukList() {
  const [produk, setProduk] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduk, setEditingProduk] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/produk')
      .then((response) => setProduk(response.data))
      .catch((error) => console.error(error));
  }, []);

  const openEditModal = (produk) => {
    setEditingProduk(produk);
    setIsModalOpen(true);
  };

  const closeEditModal = () => {
    setIsModalOpen(false);
    setEditingProduk(null);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/produk/${id}`)
      .then(() => {
        setProduk(produk.filter((p) => p.id !== id));
      })
      .catch(err => console.error(err));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      nama: e.target.nama.value,
      harga: e.target.harga.value,
    };

    axios.put(`http://localhost:3001/produk/${editingProduk.id}`, updatedData)
      .then(() => {
        setProduk(
          produk.map((p) =>
            p.id === editingProduk.id ? { ...p, ...updatedData } : p
          )
        );
        closeEditModal();
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2 className="mb-4 text-center">Daftar Produk</h2>

      {/* Daftar Produk */}
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {produk.map((item) => (
          <div key={item.id} className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item.nama}</h5>
                <p className="card-text">Rp{item.harga}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <button 
                    className="btn btn-sm btn-warning me-2" 
                    onClick={() => openEditModal(item)}
                  >
                    Edit
                  </button>
                  <button 
                    className="btn btn-sm btn-danger" 
                    onClick={() => handleDelete(item.id)}
                  >
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Edit */}
      {isModalOpen && (
        <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Produk</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={closeEditModal}
                />
              </div>
              <div className="modal-body">
                <form onSubmit={handleEditSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Nama Produk</label>
                    <input 
                      type="text" 
                      name="nama" 
                      defaultValue={editingProduk?.nama} 
                      className="form-control" 
                      required 
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Harga</label>
                    <input 
                      type="number" 
                      name="harga" 
                      defaultValue={editingProduk?.harga} 
                      className="form-control" 
                      required 
                    />
                  </div>
                  <div className="d-flex justify-content-end gap-2">
                    <button type="submit" className="btn btn-primary">Simpan</button>
                    <button 
                      type="button" 
                      className="btn btn-secondary" 
                      onClick={closeEditModal}
                    >
                      Batal
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProdukList;