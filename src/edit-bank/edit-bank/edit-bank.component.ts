import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { agency } from 'src/services/agency';
import { AuthService } from 'src/services/auth.service';
import { BankService } from 'src/services/bank.service';

@Component({
  selector: 'app-edit-bank',
  templateUrl: './edit-bank.component.html',
  styleUrls: ['./edit-bank.component.css']
})
export class EditBankComponent {
  agencyDetails: any = {
    id: '',
    name: '',
    address: '',
    phone: '',
    image: ''
  };
  constructor(private route: ActivatedRoute, private editservice: BankService, private router: Router, private authService: AuthService) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        console.log(id);
        if (id) {
          this.editservice.getAgency(id).subscribe({
            next: (response) => {
              console.log(response);
              this.agencyDetails = response;
            }
          })
        }
      }
    })
    if (!this.authService.getIsAuthenticated()) {
      this.router.navigate(['login']);
    }
  }
  updateAgencies() {
    this.editservice.updateAgencies(this.agencyDetails.id, this.agencyDetails).subscribe({
      next: (up) => {
        console.log(up);
        this.router.navigate(['list']);
      },
    })
  }
  deleteAgencies(id: any) {
    this.editservice.deleteAgencies(id).subscribe({
      next: (dp) => {
        console.log(dp);
        this.router.navigate(['list']);
      },
    })
  }
}
