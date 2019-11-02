import {AbstractControl, ValidatorFn} from '@angular/forms';

export class MyValidators {

  static isPriceValid(control: AbstractControl): { [key: string]: boolean } | null {
    const value = control.value;
    if ( value > 5000) {
      return { price_invalid: true };
    }
    return null;
  }

  static isValidPrice(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const value = control.value;
      if (value !== undefined && (isNaN(value) || value < min || value > max)) {
        return { invalid_price: true };
      }
      return null;
    };
  }

}
