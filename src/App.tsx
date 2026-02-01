import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import PurityDashboard from './pages/PurityDashboard';
import RealtimeAnalyzer from './pages/RealtimeAnalyzer';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<PurityDashboard />} />
          <Route path="/realtime" element={<RealtimeAnalyzer />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;