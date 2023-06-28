import { CapacitorConfig } from "@capacitor/cli";
import dotenv from "dotenv";

dotenv.config();

const config: CapacitorConfig = {
  appId: "com.forkfacts.app",
  appName: "Forkfacts",
  bundledWebRuntime: false,
  server: {
    url: process.env.GATSBY_APP_URL,
    cleartext: true,
  },
};

export default config;
