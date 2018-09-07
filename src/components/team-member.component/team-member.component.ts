import { Component, Input } from '@angular/core';
import { MemberModel } from '../../models/member.model';

@Component({
  selector: 'mcc-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss']
})
export class TeamMemberComponent {

  @Input() member: MemberModel;

}
