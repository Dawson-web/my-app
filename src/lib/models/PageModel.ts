const { default: mongoose } = require("mongoose");

const Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: Buffer,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);

const PageModel = mongoose.models.page || mongoose.model("page", Schema);

export default PageModel;
