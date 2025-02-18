import { jwtDecode } from "jwt-decode";

const setUserToken = (accessToken) => {
  localStorage.setItem("mc_user_tkn", accessToken);
};

const setAuthUser = (userData) => {
  localStorage.setItem("mc_user", JSON.stringify(userData));
};

const getUserToken = () => {
  return localStorage.getItem("mc_user_tkn") ?? null;
};

const getAuthUser = () => {
  const user = typeof window !== "undefined" && localStorage.getItem("mc_user");
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
  localStorage.removeItem("mc_user_tkn");
};

const deleteAuthUser = () => {
  localStorage.removeItem("mc_user");
};

const logout = () => {
  localStorage.removeItem("mc_user_tkn");
  localStorage.removeItem("mc_user");
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
    const token = localStorage.getItem("mc_user_tkn") ?? null;
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
