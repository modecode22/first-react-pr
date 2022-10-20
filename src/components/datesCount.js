import React from 'react'

function DatesCount({person}) {
  return (
    <div className="font-black text-4xl">لديك اليوم {person.length} مواعيد</div>
  );
}

export default DatesCount
