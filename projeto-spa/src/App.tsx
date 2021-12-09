import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Page1} from './pages/Page1';
import {Page2} from './pages/Page2';
import {Page3} from './pages/Page3';
import {Page4} from './pages/Page4';
import {Page5} from './pages/Page5';
import {FormProvider} from './contexts/FormContext';

const App = () => {
  return (
    <FormProvider>
      <Router>
        <Routes>
          <Route path="/" element= {<Page1 />} />
          <Route path="/cadastro" element= {<Page2 />} />
          <Route path="/vagas" element= {<Page3 />} />
          <Route path="/dados-vaga" element= {<Page4 />} />
          <Route path="/final" element= {<Page5 />} />
        </Routes>
      </Router>
    </FormProvider>
  );
}

export default App;
