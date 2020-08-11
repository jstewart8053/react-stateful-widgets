/*
INPUT Instructions

Watch this short video:
https://tk-assets.lambdaschool.com/a664dfe7-2dde-48d1-8fa2-48066d98e515_input.gif

How many slices of state do you think are necessary to act as "sources of truth" for all
the things that change in this widget? Give it some thought before continuing reading!

Yup, a single slice of state is enough! In it we'll keep track of the value of the input.
Whether the text shows royalblue or crimson can be derived from the length of the value of the input.

STEP 0:
  Study the component below, and import the state hook.
 
STEP 1:
  Create a slice of state called 'inputValue' and its 'setInputValue' buddy. (why not repeat the same question as Counter #1, with
                                                                              the obvious changes it needs, this is just needlessly confusing 
                                                                                and inconsistent)
  We should initialize this state to the empty string.

STEP 2:
  Make the color of the text be crimson if the length of 'inputValue' goes over ten. (what color is it supposed to be if not crimson?
                                                                                        should it have a default color? or we just keep royalblue?)

STEP 3:
  Interpolate the value of the input inside this <div />. How can we make it show in ALL CAPS? (what does interpolate mean? why not just say
                                                                                                      set the state to all caps, or set 
                                                                                                      the input value to all caps)

STEP 4:
  Set the value of the input -found inside the event object- into state.

STEP 5:
  Set the input value in state to be empty string. The reset still won't work, though! See the next step. (then what is the point?
                                                                                                            is this something we usually would do?)

STEP 6:
  For the input to reset correctly, it needs to "drink" its value from state! (??? What is this supposed to mean, plain english pls)
  We need to add an extra prop to the input element like so: value={inputValue} (saying extra prop is confusing, just say we need to add 
                                                                                      a value for the input, and tell us what to set it to)
*/

/* STEP 0 */
import React, { useState } from 'react'
export default function Input() {
  /* STEP 1 */
  const [inputValue, setInputValue] = useState("");
  const changeInput = evt => {
    // When the input changes, its whole value can be found inside the event object.
    // Log out the synthetic event object 'evt' and see for yourself. (What does this mean? synthetic event object' and comment is distracting)
                                                                                            
    const { value } = evt.target;
setInputValue(value)
    /* STEP 4 */
  };
  const reset = () => {
    /* STEP 5 */
    setInputValue("")
  };

  const style = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color:  inputValue.length > 10 ? 'crimson' : 'royalblue', /* STEP 2 */
  };
         
  return (
    <div className='widget-input container'>
      <h2>Input</h2>
  <div style={style}>{inputValue.toUpperCase()}</div> {/* STEP 3 */}
      <div>
        <input value ={inputValue} type='text' onChange={changeInput} /> {/* STEP 6 */}
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
