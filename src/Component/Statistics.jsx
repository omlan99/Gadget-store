import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import { BarChart, Bar, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { Helmet } from "react-helmet-async";

const Statistics = () => {

  const products = useLoaderData();
  const chartData = products.map((product) => ({
    name: product.title,
    price: product.price,
  }));

  return (
    <div>
    <Helmet>
        <title>Statistics</title>
    </Helmet>
      <Banner
        title={"Statistics"}
        subtitle={
          "A barchart to show the price chart of all avialable products"
        }
      ></Banner>
      <div  >
        <div style={{ width: "100%", height: 400 }}>
          <ResponsiveContainer>
            <BarChart
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="price" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
