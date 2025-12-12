const AuthLayout = ({ title, children }) => {
  return (
    <div className="container vh-100 d-flex align-items-center">
      <div className="row w-100 justify-content-center">
        <div className="col-md-5">
          <div className="card shadow-lg border-0">
            <div className="card-body p-4">
              <h3 className="text-center mb-4">{title}</h3>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
