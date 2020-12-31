export const login = (user) => ({ type: 'LOGIN', user });

export const logout = () => ({ type: 'LOGOUT' });

export const addCustomer = (customer) => ({ type: 'ADD', customer });

export const removeCustomer = (customer) => ({ type: 'REMOVE', customer });

export const resetCustomer = () => ({ type: 'RESET' });
