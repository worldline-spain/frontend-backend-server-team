import { Component } from '@angular/core';
import { MemberModel } from '../../models/member.model';
import { TeamMembers } from '../../constants/team.constants';

@Component({
  selector: 'mcc-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent {

  public team: MemberModel[];

  constructor() {
    this.team = TeamMembers;
  }

}
