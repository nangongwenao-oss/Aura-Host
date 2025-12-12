import React, { useState } from 'react';
import { View } from './types';
import { Layout } from './components/Layout';
import { Login } from './views/Login';
import { ModelConfig } from './views/ModelConfig';
import { ScriptCenter } from './views/ScriptCenter';
import { Performance } from './views/Performance';
import { Settings } from './views/Settings';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.LOGIN);

  const renderView = () => {
    switch (currentView) {
      case View.LOGIN:
        return <Login onLoginSuccess={() => setCurrentView(View.MODEL_CONFIG)} />;
      case View.MODEL_CONFIG:
        return <ModelConfig />;
      case View.SCRIPT_CENTER:
        return <ScriptCenter />;
      case View.PERFORMANCE:
        return <Performance />;
      case View.SETTINGS:
        return <Settings />;
      default:
        return <ModelConfig />;
    }
  };

  return (
    <Layout currentView={currentView} onChangeView={setCurrentView}>
      {renderView()}
    </Layout>
  );
};

export default App;
