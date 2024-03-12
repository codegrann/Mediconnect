import React from "react";

function ClickForward({ label, buttonType }) {
  return (
    <div>
      <button className="w-full font-semibold btn max-md:btn-sm btn-accent btn-outline">
        {label}
      </button>
    </div>
  );
}

export default ClickForward;
