import React from 'react';

const DropDown = ({ label, name, statedata = [] }) => {


    return (
        <>
            <label className="w-full flex font-semibold mt-4">
                {label}
            </label>

            <select name={name}>
                {statedata.map((state, index) => (
                    <option key={index} value={state}>
                        {state}
                    </option>
                ))}
            </select>
        </>
    );
};

export default DropDown;