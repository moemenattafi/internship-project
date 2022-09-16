
import { Component, OnInit } from '@angular/core';

import { Observable  } from 'rxjs';

import { CycleService } from 'src/app/services/cycle.service';
import { AuthService } from 'src/app/services/auth.service';

import { Cycle } from 'src/app/models/Cycle';
import { Admin } from 'src/app/models/Admin';


@Component({
  selector: 'app-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.scss']
})
export class CycleComponent implements OnInit {
  cycles$: Observable <Cycle[]>;
  adminId : Pick<Admin,'id'>;

  constructor(private cycleService : CycleService,
    private authService : AuthService) { }

  ngOnInit(): void {
    this.cycles$=this.fetchAll();
    this.adminId = this.authService.adminId;
  }

  fetchAll():Observable<Cycle[]>{
    return this.cycleService.fetchAll();
  }


  createCycle():void{
  this.cycles$=this.fetchAll();
  }

  deleteCycle(cycleId):void{
    this.cycleService.deleteCycle(cycleId).subscribe(()=>(this.cycles$=this.fetchAll()))
  }

}
