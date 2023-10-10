const playSchema = [
  {
    name: "play_id",
    type: "INTEGER",
  },
  {
    name: "user_id",
    type: "INTEGER",
  },
  {
    name: "play_datetime",
    type: "TIMESTAMP",
  },
  {
    name: "moves_to_win",
    type: "INTEGER",
  },
  {
    name: "sequence",
    type: "STRING",
  },
  {
    name: "clear_sequence",
    type: "STRING",
  },
  { name: "game_complete", type: "BOOLEAN" },
];

export default playSchema;
