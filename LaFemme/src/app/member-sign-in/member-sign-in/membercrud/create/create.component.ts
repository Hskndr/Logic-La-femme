import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MembersService} from '../../../../services/members.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styles: []
})
export class CreateComponent implements OnInit {

  memberForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private memberService: MembersService,
    private router: Router) {
    this.memberForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(1000)])],
      password: [''],
    });
  }

  ngOnInit() {
  }

  saveMember(values) {
    const memberData = new FormData();
    memberData.append('name', values.name);
    memberData.append('email', values.email);
    memberData.append('password', values.password);
    this.memberService.createMember(memberData).subscribe(result => {
      this.router.navigate(['/memberSignIn/view']);
    });
  }

}
