import {
  FaFacebookF,
  FaGoogle,
  FaLinkedinIn,
  FaRegEnvelope,
  FaUser,
  FaUserAlt,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className=" bg-white rounded-2xl shadow-2xl md:flex md:w-2/3">
          <div className=" md:w-3/5 p-5">
            <div className=" text-left font-bold">
              Otak<span className=" text-blue-300">Kanan</span>
            </div>
            <div className=" py-10">
              <h2 className=" text-2xl font-bold text-blue-300 mb-2">
                Bergabunglah Sekarang!
              </h2>
              <div className=" border-2 w-10 border-blue-300 inline-block mb-2"></div>
              <div className=" flex justify-center my-2">
                <a
                  href="#"
                  className=" border-2 border-gray-200 rounded-full p-3 mx-1  hover:bg-blue-300 hover:text-white"
                >
                  <FaFacebookF className=" text-sm" />
                </a>
                <a
                  href="#"
                  className=" border-2 border-gray-200 rounded-full p-3 mx-1  hover:bg-blue-300 hover:text-white"
                >
                  <FaGoogle className=" text-sm" />
                </a>
                <a
                  href="#"
                  className=" border-2 border-gray-200 rounded-full p-3 mx-1  hover:bg-blue-300 hover:text-white"
                >
                  <FaLinkedinIn className=" text-sm" />
                </a>
              </div>
              <p className=" text-gray-400 my-3">
                atau daftar menggunakan email
              </p>
              <div className=" flex flex-col items-center mb-2">
                <div className=" bg-gray-100 w-64 flex items-center p-1 mb-3">
                  <FaUserAlt className=" text-gray-400 m-2" />
                  <input
                    type="name"
                    name="name"
                    placeholder="Masukan Nama"
                    className=" bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className=" bg-gray-100 w-64 flex items-center p-1 mb-3">
                  <FaRegEnvelope className=" text-gray-400 m-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Masukan Email"
                    className=" bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className=" bg-gray-100 w-64 flex items-center p-1 mb-3">
                  <MdLockOutline className=" text-gray-400 m-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Masukan Password"
                    className=" bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
              </div>
              <a
                href="#"
                className=" border-2 rounded-full py-2 px-12 inline-block font-semibold hover:bg-blue-300 hover:text-white"
              >
                Sign Up
              </a>
            </div>
          </div>
          <div className=" md:w-2/5 bg-blue-300 rounded-bl-2xl rounded-br-2xl md:rounded-bl-none md:rounded-e-2xl text-white py-36 px-12">
            <h2 className=" text-3xl font-bold mb-2">Hello, Friend!</h2>
            <div className=" border-2 w-10 border-white inline-block mb-2"></div>
            <p className=" mb-10">
              Selamat datang! Silakan masuk ke akun Anda untuk mengakses layanan
              kami.
            </p>
            <a
              href="./login"
              className=" border-2 rounded-full py-2 px-12 inline-block font-semibold hover:bg-white hover:text-blue-300"
            >
              Sign In
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
