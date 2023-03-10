import { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "@routes/app.routes";

export const Routes: FC = () => {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
};
