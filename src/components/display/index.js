const Display = ({ display }) => {
  return (
    <>
      {display === 200 ? (
        <h1>Você esta logado</h1>
      ) : (
        <h1>Você não está logado</h1>
      )}
    </>
  );
};

export default Display;
