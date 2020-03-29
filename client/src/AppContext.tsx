import React, { createContext } from 'react';

export const AppContext = createContext<{
    dispatch: React.Dispatch<any>;
}>({
    dispatch: () => null
});
