import axios from "axios";

// const baseUrl = "http://localhost:3000/api/lineChart";

const getLineChartData = async () => {
  try {
    const res = axios.get("http://localhost:3000/api/lineChart");
    return res.data;
  } catch (error) {
    console.log(error);
    return { status: error };
  }
};

const getBarChartData = async () => {
  try {
    const res = axios.get("http://localhost:3000/api/barChart");
    return res.data;
  } catch (error) {
    console.log(error);
    return { status: error };
  }
};

export { getLineChartData, getBarChartData };
