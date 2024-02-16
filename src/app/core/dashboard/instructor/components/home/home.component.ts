import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  userId: string;
  constructor(private _ActivatedRoute: ActivatedRoute) {
    this.userId = _ActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }
}
