export default function authMiddleware(to, from, next) {
    console.log('authMiddleware')
  // Your authentication logic here
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  if (to.meta.requiresAuth && !isAuthenticated) {
    // Redirect to the login page if the user is not authenticated
    next("/login");
  } else {
    // Continue to the requested route
    next();
  }
}