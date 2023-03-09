server.post("/", auth, (req, res) => {
  res.json({ type: "POST" });
});