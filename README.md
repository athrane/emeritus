# emeritus
Visualization of an old man living in a house. 

## Installing the agent code into the Cables.gl patch

The agent code is implemented by the athrane/emeritus-agent repository.

To install the bundle build into the Cables.gl patch, follow these steps:

### Create versioned bundle.js file

* Download the `bundle.js` file.
* Soft-version the file by renaming the bundle file with the current DDMMYY, e.g. `bundle-020625.js`

### Delete to old bundle.js file

* Open the Cables.gl patch.
* Locate and open the `RunAgent` operator.
* Locate the LIBS section of the configuration, delete the reference to the used bundle.js file.
* Select the Patch Files menu.
* Delete the current `bundle-DDMMYY.js` file.

### Upload new bundle.js file

* Select the Patch `Files` menu.
* Upload the `bundle-020625.js` file created previouly.
* Locate and open the `RunAgent` operator.
* Locate the LIBS section of the configuration, delete reference to the used `bundle-DDMMYY.js` file. 
* Look in the Cables.gl log and fix the errors.

### How to re-create the RunAgent operator if Cables.gl deletes it

In some cases Cables.gl will delete the `runAgent` operator from the patch. 
The can happen if code errors or interfaces changes in the agent code that break to JavaScript ode in the operator.

If the operator gets deleted, follow these steps to re-create the operator:

* On the patch canvas, press ESC to add an operator.
* Write `RunAgent`and select the `Ops.User.thrane.RunAgent` operator.
* Select `View Documentation`.
* Scroll to the bottom of the page and select `Edit Op Code`
* Update the code to fix any error and/or adopt to changes in the agent code:
   
```javascript

Ops.User.thrane.RunAgent = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments=op.attachments={};
// welcome to your new op!
// have a look at the documentation:
// https://cables.gl/docs/5_writing_ops/dev_ops/dev_ops

const
    exec = op.inTrigger("Trigger"),
    myOutPort = op.outString("Intention"),
    myOutPort2 = op.outNumber("Hunger");

// create agent
var oldMan=AgentFactory.createOldManAgent();

exec.onTriggered = () =>
{
    oldMan.run();

    let currentIntention = oldMan.getCurrentIntention();
    myOutPort.set(currentIntention.name);

    let hunger = oldMan.getBelief("hunger").getValue()
    myOutPort2.set(hunger);
};
```
