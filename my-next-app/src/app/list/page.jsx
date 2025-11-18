"use client";

import ApplicantProfile from "@/components/ApplicantProfile";
import axios from "axios";
import { FileUser, Trash } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";

const Page = () => {
  const [pdfOpen, setPdfOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");
  const [data, setData] = useState([]);
  // get user profile state management
  const [profileOpen, setProfileOpen] = useState(false);
  const [profileData, setProfileData] = useState({});
  // delete button state management
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  // handle user pdf file
  const handlePdfOpen = (url) => {
    setPdfUrl(`http://localhost:4000${url}`);
    setPdfOpen(true);
  };

  // get users data
  async function dataFetching() {
    try {
      const res = await axios.get("http://localhost:4000/api/user");
      setData(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  // render on start
  useEffect(() => {
    dataFetching();
  }, []);

  // handle user profile
  const handleProfileData = (item) => {
    setProfileData(item);
  };

  const confirmDelete = (id) => {
    setDeleteId(id);
    setShowConfirmModal(true);
  };

  const handleDelete = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:4000/api/user/${deleteId}`,
      );

      if (res.data.ok) {
        setData((prev) => prev.filter((item) => item.id !== deleteId));
        setShowConfirmModal(false);
        setDeleteId(null);
        toast.success("Applicant rejected successfully!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } else {
        alert("Failed to delete applicant.");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Error deleting applicant.");
    }
  };

  return (
    <>
      <div className="mx-8 mt-20">
        <h1 className="mb-6 text-2xl font-semibold text-gray-800">
          All Applicants
        </h1>
        <div className="max-h-[65vh] w-full overflow-auto rounded border border-gray-300 p-12">
          <table className="scrollbar-default w-full table-auto border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">No.</th>
                <th className="border border-gray-300 p-2">Name</th>
                <th className="border border-gray-300 p-2">Email</th>
                <th className="border border-gray-300 p-2">Phone</th>
                <th className="border border-gray-300 p-2">Applying For</th>
                <th className="border border-gray-300 p-2">Degree</th>
                <th className="border border-gray-300 p-2">Resume</th>
                <th className="border border-gray-300 p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr className="text-center" key={index}>
                  <td className="border border-gray-300 p-2">{index + 1}</td>
                  <td className="border border-gray-300 p-2">{item.name}</td>
                  <td className="border border-gray-300 p-2">{item.email}</td>
                  <td className="border border-gray-300 p-2">{item.phone}</td>
                  <td className="border border-gray-300 p-2">
                    {item.apply_for.slice(0, 10)}
                  </td>
                  <td className="border border-gray-300 p-2">{item.degree}</td>
                  <td className="border border-gray-300 p-1">
                    <Image
                      onClick={() => handlePdfOpen(item.file_path)}
                      src="/pdf-svgrepo-com.svg"
                      alt="pdf icon"
                      width={18}
                      height={18}
                      className="mx-auto cursor-pointer hover:saturate-10"
                    />
                  </td>
                  <td className="border border-gray-300 p-1">
                    <span className="flex justify-center gap-2">
                      <FileUser
                        onClick={() => {
                          setProfileOpen(true);
                          handleProfileData(item);
                        }}
                        className="w-5 cursor-pointer text-blue-500 hover:text-blue-700"
                      />
                      <Trash
                        onClick={() => confirmDelete(item.id)}
                        className="w-5 cursor-pointer text-red-500 hover:text-red-700"
                      />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {pdfOpen && (
        <div className="fixed top-0 left-0 h-screen w-screen bg-black/50">
          <span
            className="absolute top-0 right-4 cursor-pointer text-4xl text-white"
            onClick={() => {
              return setPdfOpen(false);
            }}
          >
            &times;
          </span>

          <iframe
            src={pdfUrl}
            width="90%"
            title="Resume Preview"
            className="mx-auto h-full rounded border border-gray-300"
          />
        </div>
      )}

      {profileOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500/90">
          <div className="scrollbar-hide md:scrollbar-default h-[90vh] w-[90%] overflow-y-auto rounded bg-white shadow-lg">
            <span
              className="absolute top-0 right-2 cursor-pointer text-6xl text-white"
              onClick={() => {
                return setProfileOpen(false);
              }}
            >
              &times;
            </span>
            <ApplicantProfile data={profileData} />
          </div>
        </div>
      )}

      {showConfirmModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 transition-opacity duration-200">
          <div className="w-[90%] max-w-sm rounded-lg bg-white p-6 text-center shadow-xl">
            <h2 className="mb-3 text-lg font-semibold text-gray-800">
              Confirm Deletion
            </h2>
            <p className="mb-6 text-sm text-gray-600">
              Are you sure you want to delete this applicant? This action cannot
              be undone.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="cursor-pointer rounded-lg bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300 active:scale-95"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="cursor-pointer rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600 active:scale-95"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="light"
        transition={Bounce}
      />
    </>
  );
};

export default Page;
