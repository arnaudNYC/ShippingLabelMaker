import withAuth from './core/components/withAuth';

import AuthenticatedApp from './core/components/AuthenticatedApp';
import UnauthenticatedApp from './core/components/UnauthenticatedApp';

export default withAuth(AuthenticatedApp, UnauthenticatedApp);
