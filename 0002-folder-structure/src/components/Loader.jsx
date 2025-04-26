// src/components/Loader.jsx
export default function Loader() {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold animate-pulse"> 
          <span className="loading loading-ring loading-xl text-info"></span>
          </p>
      </div>
    );
  }
  