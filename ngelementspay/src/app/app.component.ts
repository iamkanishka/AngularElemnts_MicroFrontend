import {Component, Input} from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() payConfig:any | undefined =
  {
      apiKey : '123445',
      apiServerKey:'344563456234554',
      payButtonPosition:'center'

  }



  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '500px',
      hasBackdrop:true,
      height:'auto',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }


}

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dialog-animations-example-dialog.html',
  styleUrls: ['./app.component.scss']

})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
  phoneFormControl = new FormControl('', [Validators.required, Validators.pattern(new RegExp("[0-9 ]{10}"))]);

  matcher = new MyErrorStateMatcher();
}
