import axios from "axios";

const KEY = "AIzaSyCfuEcgl4ZawNIla0T0xF7uOBx3MjD4Wl8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
