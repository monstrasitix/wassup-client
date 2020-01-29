// Core
import * as React from 'react';


export interface ILandingProps {};


const Buttons = () => (
    <div>
        <div className="flex">
            <div>
                <p>Plain</p>

                <button children="Button" className="button" />
                <button children="Button" className="button primary" />
                <button children="Button" className="button secondary" />
            </div>

            <div>
                <p>Disabled</p>

                <button children="Button" disabled className="button" />
                <button children="Button" disabled className="button primary" />
                <button children="Button" disabled className="button secondary" />
            </div>
        </div>
        

        <div className="flex">
            <div>
                <p>Hollow</p>

                <button children="Button" className="button hollow" />
                <button children="Button" className="button hollow-primary" />
                <button children="Button" className="button hollow-secondary" />
            </div>

            <div>
                <p>Hollow Disabled</p>

                <button children="Button" disabled className="button hollow" />
                <button children="Button" disabled className="button hollow-primary" />
                <button children="Button" disabled className="button hollow-secondary" />
            </div>
        </div>

        <div className="flex">
            <div>
                <p>Pills</p>

                <button children="Button" className="button pill" />
                <button children="Button" className="button pill primary" />
                <button children="Button" className="button pill secondary" />
            </div>

            <div>
                <p>Hollow pills</p>

                <button children="Button" className="button pill hollow" />
                <button children="Button" className="button pill hollow-primary" />
                <button children="Button" className="button pill hollow-secondary" />
            </div>
        </div>
        
        <p>Sizes</p>

        <button children="Button" className="button tiny" />
        <button children="Button" className="button small" />
        <button children="Button" className="button" />
        <button children="Button" className="button large" />
        <button children="Button" className="button massive" />

        <p>Wide</p>

        <button children="Button" className="button wide tiny" />
        <button children="Button" className="button wide small" />
        <button children="Button" className="button wide" />
        <button children="Button" className="button wide large" />
        <button children="Button" className="button wide massive" />
    </div>
);


const Fields = () => (
    <div>
        <div className="flex">
            <div className="field">
                <label className="field-label">Label</label>
                <span className="field-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque amet in corrupti temporibus culpa reiciendis itaque
                    facere optio maiores a placeat, eum veniam voluptates quia,
                    voluptatum enim quaerat autem suscipit?
                </span>
                <input type="text" className="field-input" placeholder="Enter input" />
                <span className="field-message">Some message</span>
            </div>

            <div className="field">
                <label className="field-label">Label</label>
                <span className="field-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque amet in corrupti temporibus culpa reiciendis itaque
                    facere optio maiores a placeat, eum veniam voluptates quia,
                    voluptatum enim quaerat autem suscipit?
                </span>
                <input type="text" disabled className="field-input" placeholder="Enter input" />
                <span className="field-message">Some message</span>
            </div>
        </div>

        <div className="flex">
            <div className="field success">
                <label className="field-label">Label</label>
                <span className="field-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque amet in corrupti temporibus culpa reiciendis itaque
                    facere optio maiores a placeat, eum veniam voluptates quia,
                    voluptatum enim quaerat autem suscipit?
                </span>
                <input type="text" className="field-input" placeholder="Enter input" />
                <span className="field-message">Some message</span>
            </div>

            <div className="field success">
                <label className="field-label">Label</label>
                <span className="field-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque amet in corrupti temporibus culpa reiciendis itaque
                    facere optio maiores a placeat, eum veniam voluptates quia,
                    voluptatum enim quaerat autem suscipit?
                </span>
                <input type="text" disabled className="field-input" placeholder="Enter input" />
                <span className="field-message">Some message</span>
            </div>
        </div>

        <div className="flex">
            <div className="field warning">
                <label className="field-label">Label</label>
                <span className="field-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque amet in corrupti temporibus culpa reiciendis itaque
                    facere optio maiores a placeat, eum veniam voluptates quia,
                    voluptatum enim quaerat autem suscipit?
                </span>
                <input type="text" className="field-input" placeholder="Enter input" />
                <span className="field-message">Some message</span>
            </div>

            <div className="field warning">
                <label className="field-label">Label</label>
                <span className="field-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque amet in corrupti temporibus culpa reiciendis itaque
                    facere optio maiores a placeat, eum veniam voluptates quia,
                    voluptatum enim quaerat autem suscipit?
                </span>
                <input type="text" disabled className="field-input" placeholder="Enter input" />
                <span className="field-message">Some message</span>
            </div>
        </div>

        <div className="flex">
            <div className="field error">
                <label className="field-label">Label</label>
                <span className="field-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque amet in corrupti temporibus culpa reiciendis itaque
                    facere optio maiores a placeat, eum veniam voluptates quia,
                    voluptatum enim quaerat autem suscipit?
                </span>
                <input type="text" className="field-input" placeholder="Enter input" />
                <span className="field-message">Some message</span>
            </div>

            <div className="field error">
                <label className="field-label">Label</label>
                <span className="field-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque amet in corrupti temporibus culpa reiciendis itaque
                    facere optio maiores a placeat, eum veniam voluptates quia,
                    voluptatum enim quaerat autem suscipit?
                </span>
                <input type="text" disabled className="field-input" placeholder="Enter input" />
                <span className="field-message">Some message</span>
            </div>
        </div>

        <div className="field">
            <label className="field-label">Label</label>
            <select className="field-input">
                <option value="1">Value</option>
                <option value="1">Value</option>
                <option value="1">Value</option>
                <option value="1">Value</option>
            </select>
        </div>

        <div className="field">
            <label className="field-label">Label</label>
            <textarea className="field-input" placeholder="Enter message ..." />
        </div>

        
        <p>Checkboxes</p>
        <p>Radios</p>
        <p>Switches</p>
    </div>
);


const Images = () => (
    <div>
        <div className="flex">
            <div><img src="./placeholder.png" alt="Placeholder" className="image"/></div>
            <div><img src="./placeholder.png" alt="Placeholder" className="image rounded"/></div>
            <div><img src="./placeholder.png" alt="Placeholder" className="image circle"/></div>
        </div>

        <div className="flex">
            <div><img src="./placeholder.png" alt="Placeholder" className="image thumbnail"/></div>
            <div><img src="./placeholder.png" alt="Placeholder" className="image thumbnail rounded"/></div>
            <div><img src="./placeholder.png" alt="Placeholder" className="image thumbnail circle"/></div>
        </div>
    </div>
);


const Landing: React.FC<ILandingProps> = () => (
    <div className="a">
        <style children={`
            .button {
                margin: 5px;
            }
            .flex {
                display: flex;
            }
            .flex > * {
                width: 100%;
                margin: 1em;
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
       <Images />
    </div>
);


Landing.propTypes = {};
Landing.defaultProps = {};


export default Landing;