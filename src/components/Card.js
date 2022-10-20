export const Card = (props) => {
  const roro = () => {
    props.koka(props.title);
  };

  return (
    <div className="m-5 text-slate-50 rounded-xl flex flex-col items-center bg-slate-600 h-80 w-52">
      <img
        className="w-40 h-52 rounded-xl"
        src="https://images-us.bookshop.org/ingram/9781324035473.jpg?height=500&v=v2"
        alt=""
      />
      <h2 className="text-2xl">{props.pp}</h2>
      <h3>{props.title}</h3>
      <p onClick={roro}>{props.pp}</p>
    </div>
  );
};
