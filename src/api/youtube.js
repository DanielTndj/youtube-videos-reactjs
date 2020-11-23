import Axios from "axios";

const key = "AIzaSyA6jfkOGMfXpL2cWNog4HH7WuM4gD8lHSI";

export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: key,
  },
});
