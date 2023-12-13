const jwtConfig = {
  access: {
    expiresIn: `${10000 * 5}`,
  },
  refresh: {
    expiresIn: `${1000 * 60 * 60 * 12}`,
  },
};

export default jwtConfig;
