module.exports.signupErrors = (err) => {
  let errors = { username: "", email: "", password: "" };

  err.errors.map(error => {
    if(error.path === "username")
      errors.username = error.message;
    
    if(error.path === "email")
      errors.email = error.message;

    if(error.path === "password")
      errors.password = error.message;
  })
  return errors;
};