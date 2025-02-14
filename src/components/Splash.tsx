
import React, { useEffect, useState } from 'react';

const Splash = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    // 2초 후에 스플래시 화면 종료
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center">
      <h1 className="text-3xl font-bold tracking-wider">
        GRANHAND.
      </h1>
    </div>
  );
};

export default Splash;
