import React from "react";

export default function Admin() {
  return (
    <div className="h-[90vh] w-full flex items-center justify-center">
      This is the protected admin dashboard restricted to users with the `admin`
      role.
    </div>
  );
}
