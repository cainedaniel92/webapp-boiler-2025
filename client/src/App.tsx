import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AccountsPage from '@/pages/Accounts';
import HomePage from '@/pages/Home';
import NotFoundPage from '@/pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/accounts/*" element={<AccountsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
