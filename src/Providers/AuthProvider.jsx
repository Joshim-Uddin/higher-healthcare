import { createContext, useState } from 'react';

export const AuthContext  = createContext(null)
const AuthProvider = ({children}) => {
    const [open, setOpen] = useState(true)
    const auth = {open, setOpen}
    return (
        <AuthContext.Provider  value={auth}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;