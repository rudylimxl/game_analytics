import writePlay from "../services/writeDB.js";
import writeUser from "../services/writeDBuser.js";

const writePlayData = (req, res) => {
  const length = writePlay(
    req.body.user_id,
    req.body.moves_to_win,
    req.body.sequence,
    req.body.clear_sequence,
    req.body.complete,
    req.body.username,
  );
  res.json({ written_rows_play: length });
};

const writeUserData = (req, res) => {
  const length = writeUser(
    req.body.username,
    req.body.email,
    req.body.age,
    req.body.gender,
    req.body.location
  );
  res.json({ written_rows_user: length });
};

export { writePlayData , writeUserData };
