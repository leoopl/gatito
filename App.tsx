import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import Routes from './src/Routes'
import ScreenStandard from './src/components/ScreenStandard';


export default function App() {
  return(
    <ScreenStandard>
    <Routes/>
    </ScreenStandard>
  ) 
}
