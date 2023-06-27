import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "forkfacts",
  server: {
    androidScheme: "https",
    url: "https://forkfacts-v2-jn4gw4u3g-bonsaiilabs.vercel.app/",
  },
};

export default config;
