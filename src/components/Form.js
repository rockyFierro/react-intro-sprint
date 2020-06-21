import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import { useHistory, Route } from 'react-router-dom';
import Order from "./Order";
import {Card} from 'reactstrap';
import CardBody from "reactstrap/es/CardBody";
import CardGroup from "reactstrap/es/CardGroup";

export default function Form() {

    const [post, setPost] = useState([]);

    const [pizza, setPizza]= useState([]);


    //reqres.in
    // managing state for our form inputs
    const [formState, setFormState] = useState({
        name: "",
        inst: "",
        size: "",
        pep: "",
        saus: "",
        bacon: "",
        chx: "",
        pepper: "",
        olives: "",
        jala: "",
        oni: ""
    });



    const [ButtonDisabled, setButtonDisabled] = useState(true);

    const [errors, setErrors] = useState({
        name: "",
        inst: "",
        size: "",
        pep: "",
        saus: "",
        bacon: "",
        chx: "",
        pepper: "",
        olives: "",
        jala: "",
        oni: ""

    });

    const formSchema = yup.object().shape({
        name: yup.string().required("Name is a required field"),
        size: yup.string(),
        pep: yup.boolean(),
        saus: yup.boolean(),
        bacon: yup.boolean(),
        chx: yup.boolean(),
        pepper: yup.boolean(),
        olives: yup.boolean(),
        jala: yup.boolean(),
        oni: yup.boolean(),
        inst: yup.string()
    })
        //extended validation
        //   {/* Issues with selecting multiple checkboxes
        //         Will look into fields as well as checkbox arrays*/}
        .test(
            'toppings', null,
            (object) => {
                if ( object.pep
                    || object.saus
                    || object.bacon
                    || object.chx
                    || object.pepper
                    || object.olives
                    || object.jala
                    || object.oni) {
                    return true; // everything is fine
                }

                return new yup.ValidationError(
                    'Please check one topping',
                    null,
                    'Meat'
                );
            }
        );


    console.log("error state", errors);

    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            setButtonDisabled(!valid);
        });
    }, [formState]);

    // onSubmit function
    const formSubmit = e => {
        e.preventDefault();
        axios
            .post("https://reqres.in/api/users", formState)
            .then(response => {
                setPost(response.data);
                setPizza([...pizza, response.data]);
                setFormState({
                    name: "",
                    inst: "",
                    size: "",
                    pep: "",
                    saus: "",
                    bacon: "",
                    chx: "",
                    pepper: "",
                    olives: "",
                    jala: "",
                    oni: ""
                });
            })
            .catch(err => console.log(err.response));

    };

    const history = useHistory();

    const routeToOrder = event => {
        console.log("Submitting...");
        setTimeout(() => {
            history.push("/Order");
        }, 2000);
        // history.goBack()
    };

    // onChange function
    const inputChange = e => {
        console.log("input changed!", e.target.value);

        const newFormData = {
            ...formState,
            [e.target.name]:
                e.target.type === "checkbox" ? e.target.checked : e.target.value
        };
        validateChange(e);
        setFormState(newFormData);
    };

    const validateChange = event => {
        event.persist()
        // Reach will allow us to "reach" into the schema and test only one part.
        yup
            .reach(formSchema, event.target.name)
            .validate(event.target.value)
            .then(valid => {
                setErrors({
                    ...errors,
                    [event.target.name]: ""
                });
            })
            .catch(err => {
                setErrors({
                    ...errors,
                    [event.target.name]: err.errors[0]
                });
            });
    };

    return (

        <Card>
            <CardBody onSubmit={formSubmit}>
                <CardGroup htmlFor="name">
                    Name
                    <input
                        id="name"
                        type="text"
                        name="name"
                        onChange={inputChange}
                        value={formState.name}
                        placeholder ="Name "
                        data-cy="name"
                    />
                    {errors.name.length > 2 ? <p className="error">{errors.name}</p> : null}
                </CardGroup>
                <CardGroup>
                <label htmlFor="size">
                    What Size of Pizza?
                    <select id="size" name="size" onChange={inputChange}>
                        <option value="Small">  Small</option>
                        <option value="Medium">  Medium</option>
                        <option value="Large">  Large</option>
                        <option value="Family">  Family</option>
                    </select>
                </label>
                </CardGroup>

                <CardBody>
                    <h2>Meat</h2>
                    <div>
                        <label htmlFor="pep" className="pep">
                            Pepperoni
                            <input
                                type="checkbox"
                                name="pep"
                                checked={formState.pep}
                                onChange={inputChange}
                            />
                        </label>
                        <label htmlFor="saus" className="saus">
                            Sausage
                            <input
                                type="checkbox"
                                name="saus"
                                checked={formState.saus}
                                onChange={inputChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="bacon" className="bacon">
                            Canadian Bacon
                            <input
                                type="checkbox"
                                name="bacon"
                                checked={formState.bacon}
                                onChange={inputChange}
                            />
                        </label>

                        <label htmlFor="chx" className="chx">
                            Chicken
                            <input
                                type="checkbox"
                                name="chx"
                                checked={formState.chx}
                                onChange={inputChange}
                            />
                        </label>
                    </div>
                </CardBody>

                <div>
                    <h2>Veggies</h2>
                    <div>
                        Green Pepper
                        <label htmlFor="pepper" className="pepper">
                            <input
                                type="checkbox"
                                name="pepper"
                                checked={formState.pepper}
                                onChange={inputChange}
                            />
                        </label>
                        <label htmlFor="olives" className="olives">
                            Olives
                            <input
                                type="checkbox"
                                name="olives"
                                checked={formState.olives}
                                onChange={inputChange}
                            />

                        </label>
                    </div>
                    <div>
                        <label htmlFor="jala" className="jala">
                            Jalapeno Peppers
                            <input
                                type="checkbox"
                                name="jala"
                                value="jala"
                                checked={formState.jala}
                                onChange={inputChange}
                            />

                        </label>

                        <label htmlFor="oni" className="oni">
                            Onion
                            <input
                                type="checkbox"
                                name="oni"
                                checked={formState.oni}
                                onChange={inputChange}
                            />

                        </label>
                    </div>
                </div>

                <hr></hr>
                <div>
                    <label htmlFor="inst">
                        <p>Special Instructions</p>
                        <textarea
                            name="inst"
                            onChange={inputChange}
                            value={formState.inst}
                            placeholder ="Any instructions?"
                            data-cy="inst"
                        />
                        {errors.inst.length >= 0 ? (
                            <p className="error">{errors.inst}</p>
                        ) : null}
                    </label>
                </div>

                <pre>
          {JSON.stringify(post, null, 2)}
      </pre>

                <div disabled={ButtonDisabled}
                        type="submit"
                        pizza={pizza}
                        onClick={routeToOrder}
                        data-cy="submit" to="/Order" >
                    Add to Order
                </div>
            </CardBody>
            <Order pizza={pizza} />
        </Card>

    );

}