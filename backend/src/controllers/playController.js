import writePlay from "../services/writeDB.js";

const writePlayData = (req, res) => {
  const length = writePlay(
    req.body.user_id,
    req.body.moves_to_win,
    req.body.sequence,
    req.body.clear_sequence,
    req.body.complete
  );
  res.json({ written_rows: length });
};

export { writePlayData };
