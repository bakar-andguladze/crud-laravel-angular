import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/core/services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})

export class AddEditUserComponent implements OnInit {
  
  form!: FormGroup;
  id! : string;
  isAddMode!: boolean;
  loading = false;
  submitted = false;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.form = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl('')
    });
    this.isAddMode = !this.id;

  }

  onSubmit() {
    if (this.isAddMode) {
      this.createUser();
    }
    else {
      this.updateUser();
    }
  }

  private createUser() {
    console.log(this.form.value);
    this.userService.createUser(this.form.value)
    .pipe(first())
    .subscribe(() => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });

  }

  private updateUser() {
    console.log(this.form.value);
    this.userService.updateUser(this.id, this.form.value)
    .pipe(first())
    .subscribe(() => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }

}
