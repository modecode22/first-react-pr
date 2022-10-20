import React from 'react'

function ContentBox({person}) {
  return (
    <div className= "overflow-auto shadow-xl bg-white w-96 mb-5 h-96 mt-5 rounded-xl p-2">
      <div className="w-full">
        {person.length ? (
          person.map((item) => {
            return (
              <div key={item.id} className="relative flex items-center">
                <img
                  src="https://media.istockphoto.com/vectors/user-sign-icon-person-symbol-human-avatar-vector-id639085642?k=20&m=639085642&s=170667a&w=0&h=Oz2wAbb8r_b8sU8k4yZ3RR4NRbe-s7GF0kxjs1aez9M="
                  className="mx-2 w-10 h-10 rounded-full"
                  alt=""
                />
                <div className="flex flex-col justify-center items-start">
                  <h1 className="font-bold">{item.name}</h1>
                  <h2 className="font-thin">{item.date}</h2>
                </div>
                <hr className="bottom-0 absolute h-[2px] w-full bg-slate-500 " />
              </div>
            );
          })
        ) : (
          <h2 className="font-black text-4xl"> لا يوجد بيانات </h2>
        )}
      </div>
    </div>
  );
}

export default ContentBox
