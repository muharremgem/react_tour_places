import "../scss/card.scss";

const Card = ({ data }) => {
  return (
    <div className="container">
      {data.map((item) => {
        const { id, title, desc, image } = item;
        return (
          <div className="content" key={id}>
            <h2>{title}</h2>
            <img src={image} alt="img" width={400} />
            <div className="desc">{desc}</div>
          </div>
        );
      })}
      <div>
        <h3> Muharrem gem</h3>
      </div>
    </div>
  );
};

export default Card;
