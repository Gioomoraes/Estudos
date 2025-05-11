import { useParams } from "react-router-dom";

const product = () => {
  const { id } = useParams();

  return (
    <>
      <p>ID do produto: {id}</p>
    </>
  );
};

export default product;
