export const checkSignInValidData = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );

  if (!isEmailValid) return "Your Email-Id is not valid!!";
  if (!isPasswordValid) return "Your Password is not Valid!!";
  return null;
};

export const checkSignUpEmailValidData = (email) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  if (!isEmailValid) return "Your Email-Id is not valid!!";
  return null;
};

export const checkSignUpPasswordValidData = (password) => {
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );
  if (!isPasswordValid)
    return "Create Strong Password containing atleast one special, upper and lower case character also with number";
  return null;
};
