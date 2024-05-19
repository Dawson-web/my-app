const { default: mongoose } = require("mongoose");

const Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false, // 默认值为false
    },
  },
  { timestamp: true }
);

const PageModel = mongoose.models.page || mongoose.model("page", Schema);

export default PageModel;
