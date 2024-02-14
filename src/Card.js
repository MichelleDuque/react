

function Card(props){

    const card = {
      border: "1px solid black",
      margin: "10px"
    }

    return (
      <div className="card" style={card}>
        <h2>{props.h2}</h2>
        <h3>{props.h3}</h3>
      </div>
    );
  };

  export default Card