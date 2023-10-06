import axios from "axios";

export function getKsatriyas(setData) {
  const config = {
    headers: {
      Authorization: "Bearer ",
    },
  };
  axios
    .get(
      `${process.env.REACT_APP_API_URL}/api/ksatriyas?pagination[pageSize]=20&populate=*`,
      config
    )
    .then((res) => {
      const items = res?.data.data;
      setData(items);
    });
}

export function getKsatriyas2(setData) {
  const config = {
    headers: {
      Authorization: "Bearer ",
    },
  };
  axios
    .get(
      `${process.env.REACT_APP_API_URL}/api/ksatriyas?pagination[pageCount]=2&populate=*`,
      config
    )
    .then((res) => {
      const items = res?.data.data;
      setData(items);
    });
}
