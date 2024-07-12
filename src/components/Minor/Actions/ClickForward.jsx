import React from "react";

function ClickForward({ label, onclick }) {
  return (
    <div>
      <button
        className="w-full font-semibold btn max-md:btn-sm btn-accent btn-outline"
        onClick={onclick}
      >
        {label}
      </button>
    </div>
  );
}

export default ClickForward;
