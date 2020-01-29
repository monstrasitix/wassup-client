// Core
import * as React from 'react';


export interface ILandingProps {};


const Buttons = () => (
    <div>
        <p>Plain</p>

        <button children="Button" className="button" />
        <button children="Button" className="button primary" />
        <button children="Button" className="button secondary" />

        <p>Disabled</p>

        <button children="Button" disabled className="button" />
        <button children="Button" disabled className="button primary" />
        <button children="Button" disabled className="button secondary" />

        <p>Hollow</p>

        <button children="Button" className="button hollow" />
        <button children="Button" className="button hollow-primary" />
        <button children="Button" className="button hollow-secondary" />

        <p>Hollow Disabled</p>

        <button children="Button" disabled className="button hollow" />
        <button children="Button" disabled className="button hollow-primary" />
        <button children="Button" disabled className="button hollow-secondary" />

        <p>Pills</p>

        <button children="Button" className="button pill" />
        <button children="Button" className="button pill primary" />
        <button children="Button" className="button pill secondary" />

        <br/>

        <button children="Button" className="button pill hollow" />
        <button children="Button" className="button pill hollow-primary" />
        <button children="Button" className="button pill hollow-secondary" />

        <p>Sizes</p>

        <button children="Button" className="button tiny" />
        <button children="Button" className="button small" />
        <button children="Button" className="button" />
        <button children="Button" className="button large" />
        <button children="Button" className="button massive" />

        <br/>

        <button children="Button" className="button wide tiny" />
        <button children="Button" className="button wide small" />
        <button children="Button" className="button wide" />
        <button children="Button" className="button wide large" />
        <button children="Button" className="button wide massive" />
    </div>
);


const Fields = () => (
    <div>
        <div className="field">
            <label className="field-label">Label</label>
            <input type="text" className="field-input"/>
            <span className="field-message">Some message</span>
        </div>

        <div className="field">
            <label className="field-label">Label</label>
            <span className="field-message">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque amet in corrupti temporibus culpa reiciendis itaque
                facere optio maiores a placeat, eum veniam voluptates quia,
                voluptatum enim quaerat autem suscipit?
            </span>
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
    <div className="a">
        <style children={`
            .button {
                margin: 5px;
            }
            .a {
                width: 90%;
                max-width: 900px;
                margin: 1rem auto;
            }
            .a > div + div {
                margin-top: 2rem;
            }
        `} />

       <Buttons />
       <Fields />
    </div>
);


Landing.propTypes = {};
Landing.defaultProps = {};


export default Landing;