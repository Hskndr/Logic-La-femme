import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MembersService} from '../../../../services/members.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styles: []
})
export class UpdateComponent implements OnInit {

  memberForm: FormGroup;
  memberID: any;
  memberData: any;

  constructor(
    private fb: FormBuilder,
    private memberService: MembersService,
    private router: Router,
    private actRoute: ActivatedRoute) {
    this.memberForm = this.fb.group({
      name: ['', Validators.required],
      desc: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(1000)])],
      price: ['', Validators.compose([Validators.required])],
    });
// code
  }

  ngOnInit() {
    this.memberID = this.actRoute.snapshot.params['id'];
    this.loadMemberDetails(this.memberID);
  }

  loadMemberDetails(memberID) {
    this.memberService.getMemberDetails(memberID).subscribe(member => {
      this.memberData = member;
      this.memberForm.controls['name'].setValue(this.memberData['p_name']);
      this.memberForm.controls['email'].setValue(this.memberData['p_email']);
      this.memberForm.controls['password'].setValue(this.memberData['p_password']);
    });
  }

  updateMemberData(values) {
    const memberData = new FormData();
    memberData.append('id', this.memberID);
    memberData.append('name', values.name);
    memberData.append('email', values.email);
    memberData.append('password', values.password);
    this.memberService.updateMember(memberData).subscribe(result => {
      this.router.navigate(['']);
    });
  }

}
