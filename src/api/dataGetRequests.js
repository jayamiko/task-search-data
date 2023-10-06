import axios from "axios";

export function getKsatriyas(setData) {
  const config = {
    headers: {
      Authorization: "Bearer ",
    },
  };
  axios
    .get(`${process.env.REACT_APP_API_URL}/api/ksatriyas?populate=*`, config)
    .then((res) => {
      const items = res?.data.data;
      setData(items);
    });
}
