import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { BankService } from 'src/services/bank.service';

@Component({
  selector: 'app-listbank',
  templateUrl: './listbank.component.html',
  styleUrls: ['./listbank.component.css']
})
export class ListbankComponent {

  constructor(private agency: BankService, private authService: AuthService, private router: Router) { }

  myAgency: any;
  ngOnInit(): void {
    this.agency.getData().subscribe((data) => {
      this.myAgency = data;
    })
    if (!this.authService.getIsAuthenticated()) {
      this.router.navigate(['login']);
    } else {
      this.agency.getData().subscribe({
        next: (agency) => {
          this.myAgency = agency;
        },

        error: (response) => {
          console.log(response);
        }

      })
    }
  }
}
