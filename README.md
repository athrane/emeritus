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

