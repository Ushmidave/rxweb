---
title: oneOf
description: oneOf validation  {{validatorType}}  will check whether the user has entered any one of the given inputs or not.
author: rxcontributortwo
category: form-validations
type:tabs
linktitle: oneOf
---

# When to use
Let's assume that you are creating a employee form in which you want employee to enter any one value of a particular value which contains fields like department, hobbies and skills.Here the field is taken in the form of array and according to that the oneOf is applied on the property by applying matchvalues. Here depending upon the requirement these scenarios may arise.
<ol class='showHideElement'>
<li>The skills field in which you want the user to enter skills based upon matchvalues.</li>
<li>Apply oneOf validation based on matched condition in the form, like if the department  is ‘dotnet’ then the skills value should be based upon matchvalues.</li>
<li>The Custom Message on Hobbies field.</li>
<data-scope scope="['decorator','validator']">
<li>Apply oneOf validation dynamically based on server rules.</li>
</data-scope>
</ol>
Let’s see how oneOf {{validatorType}} fulfil the need.

# Basic oneOf Validation

<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create a employee Model class and define property of hobbies in the model to achieve the functional need of point 1.
<div component="app-code" key="oneOf-add-model"></div> 
</data-scope>
Through Angular FormBuilder service we create FormGroup in the component.
Here we have covered Add form operation.

<div component="app-code" key="oneOf-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="oneOf-add-html"></div> 
<div component="app-example-runner" ref-component="app-oneOf-add"></div>
***

# ArrayConfig
<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@oneOf()` decorator. If needed then use the below options.
</data-scope>

<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.oneOf()` validator. If needed then use the below options.
</data-scope>

<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `oneOf` validation. If needed then use the below options.
</data-scope>
                     
<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a href="#matchValues" (click)='scrollTo("#matchValues")' title="matchValues">matchValues</a></td><td>matchValues is the array based on which the validation property is set </td></tr>
<tr><td><a  (click)='scrollTo("#conditionalExpression")' title="conditionalExpression">conditionalExpression</a></td><td>oneOf validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work same as client function. For boolean variables, if you want to apply conditionalExpression, you must use `===` instead of `==`.</td></tr>
<tr><td><a  (click)='scrollTo("#message")' title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
</table>

## matchValues 
Type :  `any[]` 
matchValues is the array based on which the validation property is set. According to it one of the values in the array should be matched.

<div component="app-code" key="oneOf-matchValuesExample-model"></div> 
<div component="app-example-runner" ref-component="app-oneOf-matchValues" title="oneOf {{validatorType}} with matchValues" key="matchValues"></div>

## conditionalExpression 
Type :  `Function`  |  `string` 

oneOf validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.
If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work same as client function. For boolean variables, if you want to apply conditionalExpression, you must use `===` instead of `==`.

<data-scope scope="['validator','decorator']">
> Binding `conditionalExpression` with `Function` object.
<div component="app-code" key="oneOf-conditionalExpressionExampleFunction-model"></div> 
</data-scope>

> Binding `conditionalExpression` with `string` object.
<div component="app-code" key="oneOf-conditionalExpressionExampleString-model"></div> 

<div component="app-example-runner" ref-component="app-oneOf-conditionalExpression" title="oneOf {{validatorType}} with conditionalExpression" key="conditionalExpression"></div>

## message
Type :  `string` 
To override the global configuration message and set the custom message on respective FormControl.

<div component="app-code" key="oneOf-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-oneOf-message" title="oneOf {{validatorType}} with message" key="message"></div>

# Complete oneOf Example

This Complete oneOf example which includes all the ArrayConfig properties will fulfil the requirement of scenarios 1, 2 and 3.

<div component="app-tabs" key="complete"></div>
[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-oneOf-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="oneOf-complete-model"></div> 
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="oneOf-complete-component"></div> 
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="oneOf-complete-html"></div> 
# [/Html]
***

<data-scope scope="['decorator','validator']">
# Dynamic oneOf Example

This Dynamic oneOf example which execute based on json passed. conditional expression with function would be not apply in dynamic oneOf example. 

<div component="app-tabs" key="dynamic"></div>

[!TabGroup]
# [Example](#tab\dynamicexample)
<div component="app-example-runner" ref-component="app-oneOf-dynamic"></div>
# [/Example]
<data-scope scope="['decorator']">
# [Model](#tab\dynamicmodel)
<div component="app-code" key="oneOf-dynamic-model"></div>
# [/Model]
</data-scope>
# [Component](#tab\dynamiccomponent)
<div component="app-code" key="oneOf-dynamic-component"></div>
# [/Component]
# [Json](#tab\dynamicjson)
<div component="app-code" key="oneOf-dynamic-json"></div>
# [/Json]
# [Html](#tab\dynamichtml)
<div component="app-code" key="oneOf-dynamic-html"></div> 
# [/Html]
***
</data-scope>
