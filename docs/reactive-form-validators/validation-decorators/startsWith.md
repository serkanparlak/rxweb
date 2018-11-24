---
title: startsWith
description: startsWith validation decorator allows user to enter the input which starts with particular value.
author: rxcontributortwo

---
# When to use
Suppose you want to create a user form, which contains fields like userId, name, profession and taskId and you want the user to enter input which starts with a particular value. Here depending upon the requirement, these scenarios may arise..
<ol>
   <li>Apply validation on name field in which you want the user to enter value which starts with ‘j’.</li>
   <li>Apply startsWith validation based on matched condition in the form, like if the name is 'John', then the profession must starts with 'Senior ' (Used as a function).</li>
   <li>Apply startsWith validation based on matched condition in the form, like if the name is 'John', then the taskId must starts with '#'(Used as a string datatype).</li>
   <li>Apply dynamic validation, If the validation is changed based on some criteria in the application.</li>
</ol>
Let's see how StartsWith decorator fulfil the need.

# Basic StartsWith Validation
<data-scope scope="['decorator']">
First we need to create a User model and define a property of name in the model to achieve the functional need of point 1.
<div component="app-code" key="startsWith-add-model"></div> 
</data-scope>
Through Angular FormBuilder service we create FormGroup in the component.
Here we have covered Add and Edit form operations. 

<data-scope scope="['decorator']">
<div component="app-tabs" key="basic-operations"></div>
[!TabGroup]
# [Add](#tab\basicadd)
<div component="app-code" key="startsWith-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="startsWith-add-html"></div> 
<div component="app-startsWith-add" title="startsWith Decorator for add Example"></div>
# [Edit](#tab\basicedit)
<div component="app-code" key="startsWith-edit-component"></div>
The below code is `user-data.json` for getting data from the server 
<div component="app-code" key="data-startsWith"></div> 
Next, we need to write html code.
<div component="app-code" key="startsWith-edit-html"></div> 
<div component="app-startsWith-add" title="startsWith Decorator for edit Example"></div>
***
</data-scope>

<data-scope scope="['validator','templateDriven']">
<div component="app-code" key="startsWith-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="startsWith-add-html"></div> 
<div component="app-startsWith-add" title="startsWith Decorator for add Example"></div>
</data-scope>

# DefaultConfig
message and conditionalExpression are not mandatory to use in the `@startsWith()` decorator. If needed then use the below options.

<table class="table table-bordered table-striped">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a href="value" (click)='scrollTo("#value")'  title="value">value</a></td> The `value` from which the input should starts with.</td></tr>
<tr><td><a href="#conditionalExpression" (click)='scrollTo("#conditionalExpression")'  title="conditionalExpression">conditionalExpression</a></td><td>startsWith validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work as same as client function.</td></tr>
<tr><td><a href="#message" (click)='scrollTo("#message")'  title="message">Message</a></td><td>To override the global configuration message and set the custom message on respective FormControl.</td></tr>

## value
Type: `string`

The `value` from which the input should starts with.

<div component="app-code" key="startsWith-valueExample-model"></div> 
<div component="app-example-runner" ref-component="app-startsWith-value" title="startsWith decorators with value" key="value"></div>

## conditionalExpression 
Type :  `Function`  |  `string` 

StartsWith validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.
If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work as same as client function.

<div component="app-note" key="startsWith-conditionalExpressionExampleFunction-model"></div>
<div component="app-code" key="startsWith-conditionalExpressionExampleFunction-model"></div> 
<div component="app-note" key="startsWith-conditionalExpressionExampleString-model"></div> 
<div component="app-code" key="startsWith-conditionalExpressionExampleString-model"></div> 

<div component="app-example-runner" ref-component="app-startsWith-conditionalExpression" title="startsWith decorators with conditionalExpression" key="conditionalExpression"></div>

## message 
Type :  `string` 

To override the global configuration message and set the custom message on respective FormControl.

<div component="app-code" key="startsWith-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-startsWith-message" title="startsWith decorators with message" key="message"></div>

# Complete StartsWith Example

This Complete startsWith example which includes all the DefaultConfig properties will fulfil the requirement of scenarios 1, 2 and 3.

<div component="app-tabs" key="complete"></div>
[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-startsWith-complete"></div>
<data-scope scope="['decorator']">
# [Model](#tab\completemodel)
<div component="app-code" key="startsWith-complete-model"></div> 
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="startsWith-complete-component"></div> 
# [Html](#tab\completehtml)
<div component="app-code" key="startsWith-complete-html"></div> 
***

# Dynamic StartsWith Example

This Dynamic startsWith example which execute based on json passed. conditional expression with function would be not apply in dynamic startsWith example. 

<div component="app-tabs" key="dynamic"></div>

[!TabGroup]
# [Example](#tab\dynamicexample)
<div component="app-startsWith-dynamic"></div>
<data-scope scope="['decorator']">
# [Model](#tab\dynamicmodel)
<div component="app-code" key="startsWith-dynamic-model"></div>
</data-scope>
# [Component](#tab\dynamiccomponent)
<div component="app-code" key="startsWith-dynamic-component"></div>
# [Json](#tab\dynamicjson)
<div component="app-code" key="startsWith-dynamic-json"></div>
# [Html](#tab\dynamichtml)
<div component="app-code" key="startsWith-dynamic-html"></div> 
***