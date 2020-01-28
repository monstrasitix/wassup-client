// Core
import * as React from 'react';


export interface ILandingProps {};


const Buttons = () => (
    <div>
        <button children="Button" className="button" />
        <button children="Button" className="button button--primary" />
        <button children="Button" className="button button--secondary" />

        <br/>

        <button children="Button" disabled className="button" />
        <button children="Button" disabled className="button button--primary" />
        <button children="Button" disabled className="button button--secondary" />        

        <br/>

        <button children="Button" className="button button--tiny" />
        <button children="Button" className="button button--small" />
        <button children="Button" className="button" />
        <button children="Button" className="button button--large" />
        <button children="Button" className="button button--massive" />

        <br/>

        <button children="Button" className="button button--wide button--tiny" />
        <button children="Button" className="button button--wide button--small" />
        <button children="Button" className="button button--wide" />
        <button children="Button" className="button button--wide button--large" />
        <button children="Button" className="button button--wide button--massive" />
    </div>
);


const Fields = () => (
    <div>
        <div className="field">
            <label className="field-label">Label</label>
            <input type="text" className="field-input"/>
            <span className="field-message">Some message</span>
        </div>

        <div className="field field--success">
            <label className="field-label">Label</label>
            <input type="text" className="field-input"/>
            <span className="field-message">Some message</span>
        </div>

        <div className="field field--warning">
            <label className="field-label">Label</label>
            <input type="text" className="field-input"/>
            <span className="field-message">Some message</span>
        </div>

        <div className="field field--error">
            <label className="field-label">Label</label>
            <input type="text" className="field-input"/>
            <span className="field-message">Some message</span>
        </div>
    </div>
);


const Landing: React.FC<ILandingProps> = () => (
    <div>
        <style children={`
            .button {
                margin: 5px;
            }
        `} />
       <Buttons />
       <Fields />
    </div>
);


Landing.propTypes = {};
Landing.defaultProps = {};


export default Landing;