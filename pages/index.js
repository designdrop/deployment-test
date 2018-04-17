import Layout from '../components/MyLayout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = props => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <div>Yokels: {props.shows}</div>
    <div>Yokels: {props.offset}</div>
    <div>Yokels: {props.currently}</div>
    <div>Yokels: {props.temp}</div>
  </Layout>
);

Index.getInitialProps = async function() {
  const url =
    'https://api.darksky.net/forecast/9cefcc8d65ae02757e47a85ecf48a94e/37.8267,-122.4233';

  const options = {
    mode: 'no-cors'
  };

  const res = await fetch(url, options);
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data}`);

  return {
    shows: data.timezone,
    offset: data.offset,
    currently: data.currently.summary,
    temp: data.currently.temperature
  };
};

export default Index;
