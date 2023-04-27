import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Detail = ({ Detail }) => {
  const { title } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div style={{ marginTop: "25px" }}>
      {Detail.filter((el) => el.title === title).map((element, index) => (
        <div className="card" key={index}>
          <div className="card-body">
            <h5 className="card-title">{element.title}</h5>
            <p className="card-text">{element.description}</p>
            <button className="btn btn-primary" onClick={handleBack}>
              Précédent
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Detail;
