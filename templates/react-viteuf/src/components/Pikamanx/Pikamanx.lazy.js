
    import React, { lazy, Suspense } from 'react';
    
    const PikamanxWrapper = lazy(() => import('./Pikamanx'));
    
    const Pikamanx = (props) => (
      <Suspense fallback={<div>Loading...</div>}>
        <PikamanxWrapper {...props} />
      </Suspense>
    );
    
    export default Pikamanx;
    