import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import "./assets/app-assets/vendors/css/vendors.min.css";
import "./assets/app-assets/vendors/css/charts/apexcharts.css";
import "./assets/app-assets/vendors/css/extensions/toastr.min.css";

import "./assets/app-assets/css/bootstrap.css";
import "./assets/app-assets/css/bootstrap-extended.css";
import "./assets/app-assets/css/colors.css";
import "./assets/app-assets/css/components.css";
import "./assets/app-assets/css/themes/dark-layout.css";
import "./assets/app-assets/css/themes/bordered-layout.css";
import "./assets/app-assets/css/themes/semi-dark-layout.css";

import "./assets/app-assets/css/core/menu/menu-types/vertical-menu.css";
import "./assets/app-assets/css/pages/dashboard-ecommerce.css";
import "./assets/app-assets/css/plugins/charts/chart-apex.css";
import "./assets/app-assets/css/plugins/extensions/ext-component-toastr.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
