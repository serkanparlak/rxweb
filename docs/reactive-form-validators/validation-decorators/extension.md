---
title: extension
description: extension validation decorator allows user to enter the input which is in the proper extension format.
author: rxcontributortwo

---
# When to use
Suppose you want to create a storageCapacity form, which contains fields like device, videoFileExtension, documentFileExtension and photographFileExtension and you want the user to enter input which is a proper extension format. Here depending upon the requirement, these scenarios may arise..
<ol>
   <li>Allow videoFileExtension which have proper extension format and adding Custom Message on videoFileExtension.</li>
   <li>Apply  extension validation on  documentFileExtension field based on matched condition in the form, like if the device is 'SmartPhone', then the documentFileExtension must be a extension format (Used as a function).</li>
   <li>Apply extension validation on photographFileExtension field based on matched condition in the form, like if the device is 'SmartPhone', then the photographFileExtension must be a extension format (Used as a string datatype).</li>
   <li>Apply extension validation dynamically based on server rules.</li>
</ol>
Let's see how extension decorator fulfil the need.
 
# Basic extension Validation
<data-scope scope="['decorator']">
First we need to create a storageCapacity model and define a property of videoFileExtension in the model to achieve the functional need of point 1.
<div component="app-code" key="extension-add-model"></div> 
</data-scope>
Through Angular FormBuilder service we create FormGroup in the component.
Here we have covered Add and Edit form operations. 

<data-scope scope="['decorator']">
<div component="app-tabs" key="basic-operations"></div>
[!TabGroup]
# [Add](#tab\basicadd)
<div component="app-code" key="extension-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="extension-add-html"></div> 
<div component="app-extension-add" title="extension Decorator for add Example"></div>
# [Edit](#tab\basicedit)
<div component="app-code" key="extension-edit-component"></div>
The below code is `user-data.json` for getting data from the server 
<div component="app-code" key="data-json"></div> 
Next, we need to write html code.
<div component="app-code" key="extension-edit-html"></div> 
<div component="app-extension-add" title="extension Decorator for edit Example"></div>
***
</data-scope>

<data-scope scope="['validator','templateDriven']">
<div component="app-code" key="extension-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="extension-add-html"></div> 
<div component="app-extension-add" title="extension Decorator for add Example"></div>
</data-scope>

# ExtensionConfig
message and conditionalExpression are not mandatory to use in the `@extension()` decorator. If needed then use the below options.

<table class="table table-bordered table-striped">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a href="#extensions" (click)='scrollTo("#extensions")'  title="extensions">extensions</a></td><td>Multiple extensions which are allowed to be entered by the user. It is in form of array.</td></tr>
<tr><td><a href="#conditionalExpression" (click)='scrollTo("#conditionalExpression")'  title="conditionalExpression">conditionalExpression</a></td><td>extension validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work as same as client function.</td></tr>
<tr><td><a href="#message" (click)='scrollTo("#message")'  title="message">Message</a></td><td>To override the global configuration message and set the custom message on respective FormControl.</td></tr>

## extensions
Type :  `string[]` 

extensions parameter is the array of multiple extensions which are allowed to be entered by the user.

<div component="app-code" key="extension-extensionsExample-model"></div> 
<div component="app-example-runner" ref-component="app-extension-extensions" title="extension decorators with extensions" key="extensions"></div>

## conditionalExpression 
Type :  `Function`  |  `string` 

extension validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.
If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work as same as client function.

<div component="app-note" key="extension-conditionalExpressionExampleFunction-model"></div>
<div component="app-code" key="extension-conditionalExpressionExampleFunction-model"></div> 
<div component="app-note" key="extension-conditionalExpressionExampleString-model"></div> 
<div component="app-code" key="extension-conditionalExpressionExampleString-model"></div> 

<div component="app-example-runner" ref-component="app-extension-conditionalExpression" title="extension decorators with conditionalExpression" key="conditionalExpression"></div>

## message 
Type :  `string` 

To override the global configuration message and set the custom message on respective FormControl.

<div component="app-code" key="extension-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-extension-message" title="extension decorators with message" key="message"></div>

# Complete extension Example

This Complete extension example which includes all the ExtensionConfig properties will fulfil the requirement of scenarios 1, 2 and 3.

<div component="app-tabs" key="complete"></div>
[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-extension-complete"></div>
<data-scope scope="['decorator']">
# [Model](#tab\completemodel)
<div component="app-code" key="extension-complete-model"></div> 
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="extension-complete-component"></div> 
# [Html](#tab\completehtml)
<div component="app-code" key="extension-complete-html"></div> 
***

# Dynamic extension Example

This Dynamic extension example which execute based on json passed. conditional expression with function would be not apply in dynamic extension example. 

<div component="app-tabs" key="dynamic"></div>

[!TabGroup]
# [Example](#tab\dynamicexample)
<div component="app-extension-dynamic"></div>
<data-scope scope="['decorator']">
# [Model](#tab\dynamicmodel)
<div component="app-code" key="extension-dynamic-model"></div>
</data-scope>
# [Component](#tab\dynamiccomponent)
<div component="app-code" key="extension-dynamic-component"></div>
# [Json](#tab\dynamicjson)
<div component="app-code" key="extension-dynamic-json"></div>
# [Html](#tab\dynamichtml)
<div component="app-code" key="extension-dynamic-html"></div> 
***