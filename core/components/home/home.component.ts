import {Component, HostBinding, OnInit} from '@angular/core';
import {trigger, stagger, animate, style, group, query as q, transition, keyframes} from '@angular/animations';
export function query(s, a, o = { optional: true }) {
  return q(s, a, o);
}

export const homeTransition = trigger('homeTransition', [
  transition(':enter', [
    query('.block', style({ opacity: 0 })),
    query('.block', stagger(300, [
      style({ transform: 'translateY(100px)' }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(0px)', opacity: 1})),
    ])),
  ]),
  transition(':leave', [
    query('.block', stagger(300, [
      style({ transform: 'translateY(0px)', opacity: 1 }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(100px)', opacity: 0})),
    ])),
  ])
]);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [ homeTransition ],

})
export class HomeComponent implements OnInit {

  @HostBinding('@homeTransition') get homeTransition() {
    return '';
  }

  constructor() { }

  ngOnInit() {
  }

}
