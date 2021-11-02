const common = {};

const env = {
  dev: {
    ROUTER_BASE_NAME: "/",
    API_BASE_URL: "http://localhost:5000",
  },
};

export default {
  ...common,
  ...env[process.env.REACT_APP_STAGE],
};
