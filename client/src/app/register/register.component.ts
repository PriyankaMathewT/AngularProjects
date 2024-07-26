import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
cancelRequest=output<boolean>()
  model:any ={}
  private accountservice=inject(AccountService);

  register()
  {
   this.accountservice.register(this.model).subscribe(
    {
      next:response=>{
        console.log(response);
        this.cancel();
      },
      error:error=>console.log(error)
      
    }
   )
  }
  cancel()
  {
    this.cancelRequest.emit(false);
  }

}
