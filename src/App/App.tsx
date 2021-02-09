import React from "react";
import AntLayout from "../modules/ant-theme/ant-layout";
import { Route, Redirect } from "react-router-dom";
import { Navigation } from "./routers/routes";

import AppDashboard from "./components/app-dashboard";
import AppIAM from "./components/app-iam";
import AppCampaign from "./components/app-campaign";

const App: React.FC = () => {
  return (
    <div className="App">
      <AntLayout navigation={Navigation}>
        <Redirect from="/" to="/dashboard" exact />
        <Route path="/dashboard" component={AppDashboard} />
        <Route path="/iam" component={AppIAM} />
        <Route path="/campaign" component={AppCampaign} />
      </AntLayout>
    </div>
  );
};

export default App;
