export const trending = (req, res) => {
  const videos = [
    {
      title: "First Video",
      rating: 5,
      comment: 2,
      createAt: "2 minuter ago",
      views: 59,
      id: 1,
    },
    {
      title: "Second Video",
      rating: 5,
      comment: 2,
      createAt: "2 minuter ago",
      views: 59,
      id: 1,
    },
    {
      title: "Third Video",
      rating: 5,
      comment: 2,
      createAt: "2 minuter ago",
      views: 59,
      id: 1,
    },
  ];
  return res.render("home", { pageTitle: "Home", videos });
};
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deletVideo = (req, res) => res.send("DeleteVideo");
