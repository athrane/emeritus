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
* Locate and open the `RunSimulation` operator.
* Locate the LIBS section of the configuration, delete the reference to the used bundle.js file.
* Select the Patch Files menu.
* Delete the current `bundle-DDMMYY.js` file.

### Upload new bundle.js file

* Select the Patch `Files` menu.
* Upload the `bundle-020625.js` file created previouly.
* Locate and open the `RunAgent` operator.
* Locate the LIBS section of the configuration, delete reference to the used `bundle-DDMMYY.js` file. 
* Look in the Cables.gl log and fix the errors.

### How to fix the RunSimulation operator if Cables.gl fails to create instance of it 

In some cases Cables.gl will fail to create an instance of the `RunSimulation` and other simulation operators within the patch. 
The can happen if there are code errors or interfaces changes in the simulation operators code that introduce errors in the JavaScript code in the operator.

If an operator fails to get instanciated, follow these steps to correct the error:

* On the patch canvas, press ESC to add an operator.
* Write `RunSimulation`and select the `Ops.User.thrane.Emeritus.RunSimulation` operator.
* Select `View Documentation`.
* Scroll to the bottom of the page and select `Edit Op Code`
* Update the code to fix any error and/or adopt to changes in the agent code:
   
