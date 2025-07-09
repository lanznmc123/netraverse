function toggleMenu() {
  const menu = document.querySelector('.dropdown-menu');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

function lihatDetail(id) {
  window.location.href = `detail.html?id=${id}`;
}

// Jika kamu ingin memastikan gambar yang ditampilkan di detail.html juga mengarah ke produk_image
// Pastikan di detail.html menggunakan path seperti produk_image/gambarproduk1.jpg, dst