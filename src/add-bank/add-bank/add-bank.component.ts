import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { agency } from 'src/services/agency';
import { AuthService } from 'src/services/auth.service';
import { BankService } from 'src/services/bank.service';

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.component.html',
  styleUrls: ['./add-bank.component.css']
})
export class AddBankComponent {
  newAgency: any = {
    id: '',
    name: '',
    address: '',
    phone: '',
    image: ''
  };

  constructor(private bankS: BankService, private router: Router, private authService: AuthService) { }
  ngOnInit(): void {
    if (!this.authService.getIsAuthenticated()) {
      this.router.navigate(['login']);
    }
  }
  addAgencies() {
    this.bankS.addAgencies(this.newAgency).subscribe({
      next: (a) => {
        console.log(a);
        this.router.navigate(['list']);
      },
    })
  }
}
