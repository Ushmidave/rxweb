import {
    ValidatorFn,AbstractControl
} from "@angular/forms";
import { DefaultConfig } from "../models/config/default-config";
import { urlValidator  } from '../reactive-form-validators/index'
import { defaultContainer } from "../core/defaultContainer"
import { AnnotationTypes } from "../core/validator.static"
import {STRING } from '../const/validator.const';

export function urlValidatorExtension(config?: DefaultConfig): ValidatorFn {
    var validator = urlValidator(config,null);
    var rxwebValidator = (control:AbstractControl,target?:object): { [key: string]: any } => {
        if (typeof control == STRING)
          defaultContainer.init(target, 0, control, AnnotationTypes.url, config);
        else
          return validator(control);
      return null
    }
    return rxwebValidator;
}