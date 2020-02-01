// Core
import * as React from 'react';


export interface IDashboardProps { };


const _blocks = new Array(10).fill(0).map((_, index) => ({
    id: index + 1,
}));


const Dashboard: React.FC<IDashboardProps> = () => (
    <main className="grid container page">
        {_blocks.map(block => (
            <div key={block.id} className="grid-column">
                <div className="grid-box" />
            </div>
        ))}
    </main>
);


Dashboard.propTypes = {};
Dashboard.defaultProps = {};


export default Dashboard