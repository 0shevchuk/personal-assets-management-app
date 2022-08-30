import { Route, Routes } from 'react-router-dom';
import { AppRoute } from 'common/enums/app-route.enum';
import PortalPage from 'pages/PortalPage';
import Dashboard from 'pages/portalPages/Dashboard';
import Transactions from 'pages/portalPages/Transactions';
import Invoices from 'pages/portalPages/Invoices';
import MyWallet from 'pages/portalPages/MyWallet';
import Chats from 'pages/portalPages/Chats';
import Settings from 'pages/portalPages/Settings';

export default function App() {
  return (
    <div className="">
      <Routes>
        <Route path={AppRoute.HOME} element={<PortalPage />} />
        <Route path={AppRoute.PORTAL} element={<PortalPage />}>
          <Route index element={<Dashboard />} />
          <Route path={'dashboard'} element={<Dashboard />} />
          <Route path={'transactions'} element={<Transactions />} />
          <Route path={'my-wallets'} element={<MyWallet />} />
          <Route path={'invoices'} element={<Invoices />} />
          <Route path={'chats'} element={<Chats />} />
          <Route path={'settings'} element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}
