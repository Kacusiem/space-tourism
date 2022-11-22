export const routes = {
  home: "/",
  register: "/register",
  login: "/login",
  destinations: "/user/destinations",
  destination: "/user/destination/:id",
  crews: "/user/crews",
  crew: "/user/crew/:id",
  technologies: "/user/technologies",
  technology: "/user/technology/:id",
};

export const passParams = (route, params) => {
  const parts = route.split("/");
  let newRoute = "";
  for (let i = 1; i < parts.length; i++) {
    newRoute += "/";
    if (parts[i].includes(":")) {
      newRoute += params[parts[i].replace(":", "")];
    } else {
      newRoute += parts[i];
    }
  }

  return newRoute;
};
