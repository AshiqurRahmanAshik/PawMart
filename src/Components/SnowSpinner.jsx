import React from "react";

const SnowSpinner = ({ emoji = "❄️", size = 100 }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-sky-900">
      <style>{`
        @keyframes spinMove {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: rotate(90deg);
          }
          50% {
            transform:rotate(180deg);
          }
          75% {
            transform:rotate(270deg);
          }
          100% {
            transform:  rotate(360deg);
          }
        }
      `}</style>

      <div
        style={{
          fontSize: `${size}px`,
          animation: "spinMove 8s linear infinite",
        }}
      >
        {emoji}
      </div>
    </div>
  );
};

export default SnowSpinner;
