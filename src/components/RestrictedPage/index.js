const RestrictedPage = ({ isLoggedIn, user, Login, Logout }) => (
  <div>
    {isLoggedIn ? (
      <div>
        <span> Bem-vindo {user || "Pessoa"} </span>
        <button onClick={Logout}>Logout</button>
      </div>
    ) : (
      <div>
        <span>Você não pode acessar essa página</span>
        <p></p>
        <button onClick={Login}>Login</button>
      </div>
    )}
  </div>
);
export default RestrictedPage;
