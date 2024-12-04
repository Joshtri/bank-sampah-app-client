import { Link, useNavigate } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';

function CustomNavbar() {
  const isLoggedIn = false; // Simulasi kondisi login
  const navigate = useNavigate();

  const handleScroll = () => {
    navigate('/');
    setTimeout(() => {
      const section = document.getElementById('tentang-layanan');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100); // Tunggu hingga navigasi selesai
  };

  return (
    <nav className="bg-green-600 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand Name with Icon */}
        <Link
          to="/"
          className="text-white text-2xl font-bold flex items-center hover:text-green-200"
        >
          <FaTrashAlt className="mr-2" /> EcoBank
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {isLoggedIn ? (
            <>
              <Link
                to="/dashboard"
                className="text-white hover:text-green-200 text-lg font-medium"
              >
                Dashboard
              </Link>
              <Link
                to="/transaksi"
                className="text-white hover:text-green-200 text-lg font-medium"
              >
                Transaksi
              </Link>
              <Link
                to="/kategori"
                className="text-white hover:text-green-200 text-lg font-medium"
              >
                Kategori Sampah
              </Link>
              <Link
                to="/profil"
                className="text-white hover:text-green-200 text-lg font-medium"
              >
                Profil Saya
              </Link>
            </>
          ) : (
            <>
              <button
                onClick={handleScroll}
                className="text-white hover:text-green-200 text-lg font-medium"
              >
                Tentang Layanan
              </button>
              <Link
                to="/buat-akun/masyarakat"
                className="text-white hover:text-green-200 text-lg font-medium"
              >
                Buat Akun
              </Link>
              <Link
                to="/masuk"
                className="text-white hover:text-green-200 text-lg font-medium"
              >
                Masuk
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            id="menu-toggle"
            className="text-white focus:outline-none hover:text-green-200"
            onClick={() =>
              document
                .getElementById('mobile-menu')
                .classList.toggle('hidden')
            }
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="md:hidden hidden bg-green-700 px-4 py-4 space-y-3"
      >
        {isLoggedIn ? (
          <>
            <Link
              to="/dashboard"
              className="block text-white hover:text-green-200 text-lg font-medium"
            >
              Dashboard
            </Link>
            <Link
              to="/transaksi"
              className="block text-white hover:text-green-200 text-lg font-medium"
            >
              Transaksi
            </Link>
            <Link
              to="/kategori"
              className="block text-white hover:text-green-200 text-lg font-medium"
            >
              Kategori Sampah
            </Link>
            <Link
              to="/profil"
              className="block text-white hover:text-green-200 text-lg font-medium"
            >
              Profil Saya
            </Link>
          </>
        ) : (
          <>
            <button
              onClick={handleScroll}
              className="block text-white hover:text-green-200 text-lg font-medium"
            >
              Tentang Layanan
            </button>
            <Link
              to="/buat-akun"
              className="block text-white hover:text-green-200 text-lg font-medium"
            >
              Buat Akun
            </Link>
            <Link
              to="/masuk"
              className="block text-white hover:text-green-200 text-lg font-medium"
            >
              Masuk
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default CustomNavbar;
