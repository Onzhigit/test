import inMemoryJwt from "../helpers/inMemoryJwt";

export const registrationAPI = async (values) => {
  const config = {
    method: "POST",
    body: JSON.stringify({
      full_name: values.lastName + " " + values.firstName,
      mobile: values.mobile,
      iin: values.iin,
      username: values.userName,
      email: values.email,
      password: values.password,
      
    }),
    headers: { "Content-Type": "application/json" },
  };
  return fetch("someAPI", config);
};

export const loginAPI = async (iin, password) => {
  const config = {
    method: "POST",
    body: JSON.stringify({ iin: iin, password: password }),
    headers: { "Content-Type": "application/json" },
  };
  return fetch("someAPI", config);
};

export const getRolesAPI = () => {
  return fetch("someAPI")
}

export const getMeAPI = async () => {
  const token = inMemoryJwt.getToken();
  const config = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  return fetch("someAPI", config);
};
