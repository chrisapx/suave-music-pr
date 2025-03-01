import { jwtDecode } from "jwt-decode";

const setUserToken = (accessToken) => {
  localStorage.setItem("suave_user_tkn", accessToken);
};

const setAuthUser = (userData) => {
  localStorage.setItem("suave_user", JSON.stringify(userData));
};

const getUserToken = () => {
  return localStorage.getItem("suave_user_tkn") ?? null;
};

const getAuthUser = () => {
  const user = typeof window !== "undefined" && localStorage.getItem("suave_user");
  if (user) {
    try {
      return JSON.parse(user);
    } catch (error) {
      console.error("Error parsing user data:", error);
      return null;
    }
  }
  return null;
};

const deleteUserToken = () => {
  localStorage.removeItem("suave_user_tkn");
};

const deleteAuthUser = () => {
  localStorage.removeItem("suave_user");
};

const logout = () => {
  localStorage.removeItem("suave_user_tkn");
  localStorage.removeItem("suave_user");
};

const isAuthTokenExpired = (expirationTime) => {
  const currentTime = Math.floor(Date.now() / 1000);

  return expirationTime < currentTime;
};

const decodeToken = (token) => {
  return jwtDecode(token);
};

const isAuthenticated = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("suave_user_tkn") ?? null;
    if (token) {
      const decodedToken = decodeToken(token);
      if (decodedToken.exp !== undefined) {
        const isTokenExpired = isAuthTokenExpired(decodedToken.exp);
        return !isTokenExpired;
      }
    }
  }
  return false;
};

export {
  decodeToken,
  setUserToken,
  isAuthenticated,
  getUserToken,
  deleteUserToken,
  setAuthUser,
  getAuthUser,
  deleteAuthUser,
  logout,
};
