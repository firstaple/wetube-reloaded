const fakeUser = {
  usename: "firstaple",
  loggedIn: false,
};

export const trending = (req, res) =>
  res.render("home", { pageTitle: "Home", fakeUser });
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deletVideo = (req, res) => res.send("DeleteVideo");
