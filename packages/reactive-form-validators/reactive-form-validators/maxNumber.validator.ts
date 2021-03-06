import {
  ValidatorFn,
  AbstractControl
} from "@angular/forms";
import { NumberConfig } from "../models/config/number-config";
import { ObjectMaker } from "../util/object-maker";
import { AnnotationTypes } from "../core/validator.static";
import { ValidatorValueChecker } from "../util/validator-value-checker";
import { ApplicationUtil } from "../util/app-util";
export function maxNumberValidator(config: NumberConfig): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    config = ApplicationUtil.getConfigObject(config);
    if (ValidatorValueChecker.pass(control, config)) {
      if (!(parseFloat(control.value) <= config.value))
        return ObjectMaker.toJson(AnnotationTypes.maxNumber, config, [control.value, config.value])
    }
    return ObjectMaker.null();
  }
}
