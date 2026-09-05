import React from 'react';

const DashBoardLayout = ({children}) => {
    return (
        <div>
            <h1>DashBoard</h1>
            <main>
                {children}
            </main>
        </div>
    );
};

export default DashBoardLayout;