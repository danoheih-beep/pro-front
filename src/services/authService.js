export const authService = {
    login(username) {
      const user = {
        username,
        token: "demo-token"
      };
  
      localStorage.setItem("mindtrack_user", JSON.stringify(user));
      return user;
    },
  
    logout() {
      localStorage.removeItem("mindtrack_user");
    },
  
    getCurrentUser() {
      const user = localStorage.getItem("mindtrack_user");
      return user ? JSON.parse(user) : null;
    }
  };