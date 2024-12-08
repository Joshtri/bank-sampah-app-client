// import React from 'react';

function Footer() {
  // Mengambil tahun saat ini secara otomatis
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-700 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {currentYear} NatureCare. Semua hak dilindungi. <br />
          Made with ❤️ for a cleaner planet.
        </p>
        {/* <div className="mt-4">
          <a
            href="/tentang"
            className="text-white hover:text-green-200 mx-2"
          >
            Tentang Kami
          </a>
          <a
            href="/kontak"
            className="text-white hover:text-green-200 mx-2"
          >
            Kontak
          </a>
          <a
            href="/kebijakan-privasi"
            className="text-white hover:text-green-200 mx-2"
          >
            Kebijakan Privasi
          </a>
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;
