import React, { ReactNode } from 'react';

const FormEditLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            {children}
        </main>
    );
}

export default FormEditLayout;
