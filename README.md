#### ToC
| Sections |
|---|
| [Semantic Versioning](#semantic-versioning) |
| [Installation](#installation) |
| [Usage](#usage) |



---



## Semantic Versioning
[Back to ToC](#toc)

- If you're not familiar with semantic versioning; or, just need some brushing up, head on over to [http://semver.org/](http://semver.org/).



---



## Installation
[Back to ToC](#toc)

Using command line:

1. Navigate to your project's root.

2. Type the following command:

```
$ npm i --save utility-tool
```

3. Include the module in each script used.

```
const utilityTool = require('utility-tool');
```



---



# Usage
[Back to ToC](#toc)

- ## debug(msg = null, obj = null, errLevel = 1, httpCode = null)

  - ### Important

    - When starting your application from command line, you must include the argument:

    ```
    DEBUG=true
    ```

    Example Usage:

    ```
    $ DEBUG=true npm start
    ```

  - #### Description

    - Displays robust debug messages in terminal.

  - #### Code Examples

    - ##### Display an Error Message:

    ```
    utilityTool.debug('there was an error');
    ```

      - ###### Example Result:

        <div style="background:blue">Thurs 8:29:15 AM</div>
        <div style="background:red">there was an error</div>

    - ##### Display a Success Message:

    ```
    utilityTool.debug('there was not an error', null, 0);
    ```

      - ###### Example Result:

        <div style="background:blue">Thurs 8:30:54 AM</div>
        <div style="background:green">there was not an error</div>

  - #### Parameters

    - msg - String, default null

      - A message to print to the console.

    - obj - Object, default null

      - An object to print to the console.

      - Is converted to JSON.

    - errLevel - Integer, default 1

      - If errLevel is not a truthy value, msg will have a green background, else it will have a red background.

    - httpCode - Integer, default null

      - Will append the httpCode to msg.



- ## isNumber(n, failure, success)

  - #### Description

    - Tests to see if a variable is a number.

  - #### Code Example

  ```
  utilityTool.isNumber(5, (n) =>{
    utilityTool.debug(`${n} is not a number`);
  }, (n) => {
    utilityTool.debug(`${n} is a number`);
  });
  ```

  - #### Parameters

    - n - required, Mixed

      - The variable to test.

    - failure(n) - required, Function

      - n will be the value that was tested.

      - What to do if n is not a number.

    - success(n) - required, Function

      - n will be the value that was tested.

      - What to do if n is a number.
