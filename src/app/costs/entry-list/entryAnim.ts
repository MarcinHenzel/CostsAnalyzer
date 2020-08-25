import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

export const entryAnim = trigger('entryAnim', [

  transition('* => void', [
    animate(40, style({
      transform: 'scale(1.1)'
    })),
    animate(40, style({
      transform: 'scale(1)',
      opacity: 0.75
    })),
    animate('120ms ease-out', style({
      transform: 'scale(0.60)',
      opacity: 0,
    })),
    animate('100ms ease-out', style({
      height: 0,
      paddingTop: 0,
      paddingBottom: 0,
      paddingRight: 0,
      paddingLeft: 0,
      'margin-bottom': '0',
    }))
  ])
])
export const staggerList = trigger('staggerList', [
  transition('* => *', [
    query(':enter', [
      style({
        opacity: 0,
        height: 0
      }),
      stagger(120, [
        animate('0.2s ease')
      ])
    ])
  ])
]);
