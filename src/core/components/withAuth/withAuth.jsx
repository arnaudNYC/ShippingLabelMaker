import React from 'react';

const withAuth = (WrappedComponent, LoginComponent) => {
  const AutenticatedApp = props => {
    const [user, setUser] = React.useState();
    const onLogout = () => {
      setUser(null);
    };

    return (
      <>
        {user ? (
          <WrappedComponent logout={onLogout} user={user} {...props} />
        ) : (
          <LoginComponent onLogin={setUser} />
        )}
      </>
    );
  };
  return AutenticatedApp;
};

export default withAuth;
