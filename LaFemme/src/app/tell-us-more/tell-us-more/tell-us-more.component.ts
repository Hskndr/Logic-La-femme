import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MemberRegisterService} from '../../services/member-register.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-tell-us-more',
  templateUrl: './tell-us-more.component.html',
  styleUrls: ['./tell-us-more.component.css']
})
export class TellUsMoreComponent implements OnInit {

  memberRegisterForm: FormGroup;

  constructor(private fb: FormBuilder,
              private memberRegisterService: MemberRegisterService,
              private router: Router) {
    this.memberRegisterForm = this.fb.group({

      lookingFor: [''],
      // bodyType: [''],
      // height: [''],
      // weight: [''],
      // eyesColor: [''],
      // hairColor: [''],
      // hairLength: [''],
      // tattoos: ['']
    });
  }

  ngOnInit() {
  }

  saveMemberRegister(values) {
    const memberData = new FormData();
    memberData.append('lookingFor', values.lookingFor);
    // memberData.append('bodyType', values.bodyType);
    // memberData.append('height', values.height);
    // memberData.append('weight', values.weight);
    // memberData.append('eyesColor', values.eyesColor);
    // memberData.append('hairColor', values.hairColor);
    // memberData.append('hairLength', values.hairLength);
    // memberData.append('tattoos', values.tattoos);

    this.memberRegisterService.createMemberRegister(memberData).subscribe(result => {
      this.router.navigate(['/relationType']);
    });
  }

}
