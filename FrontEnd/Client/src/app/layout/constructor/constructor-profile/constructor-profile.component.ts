import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientConstuctorService} from '../../../services/client-constuctor.service';

@Component({
  selector: 'app-constructor-profile',
  templateUrl: './constructor-profile.component.html',
  styleUrls: ['./constructor-profile.component.css']
})
export class ConstructorProfileComponent implements OnInit {

  selectedConstructor: any[];
  selectedWorks: any[];

  constructor(private service: ClientConstuctorService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getConstructor();
  }

  getConstructor() {
    let name = 'Kushan';
    this.service.getConstructor(name)
      .subscribe(response => {
        this.selectedConstructor = response.json();
        for (let constructor of this.selectedConstructor) {
          this.getConstructorWorks(constructor['ConstructorID']);
        }
      });
  }

  getConstructorWorks(conid: number) {

    this.service.getConstructorWorks(conid)
      .subscribe(response => {
        this.selectedWorks = response.json();
      });
  }

}