export default function authMiddleware(to, from, next) {
    console.log(to.query.callback)

    // Apply callback from auth
    if (to.query.callback) {
        localStorage.setItem('token', to.query.callback);
    }

    // Your authentication logic here
    const isAuthenticated = localStorage.getItem("token");

    if (to.meta.requiresAuth && (!isAuthenticated || isAuthenticated === 'null') && !['/register', '/login'].includes(to.path)) {
        // Redirect to the login page if the user is not authenticated
        next("/login");
    } else if (['/register', '/login'].includes(to.path) && isAuthenticated && isAuthenticated !== 'null') {
        // Redirect to the home page if the user is authenticated
        next("/");
    } else {
        // Continue to the requested route
        next();
    }
}