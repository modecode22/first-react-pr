import React from 'react'

function EditList({ deleteData , showData}) {
  return (
    <div className="flex w-96 justify-evenly">
      <button
        onClick={deleteData}
        className="bg-slate-700 text-slate-50 w-28 h-10 text-center rounded-lg hover:bg-sky-500 hover:text-black duration-300"
      >
        مسح الكل
      </button>
      <button
        onClick={showData}
        className="bg-slate-700 text-slate-50 w-28 h-10 text-center rounded-lg hover:bg-sky-500 hover:text-black duration-300"
      >
        رؤية المواعيد
      </button>
    </div>
  );
}

export default EditList
