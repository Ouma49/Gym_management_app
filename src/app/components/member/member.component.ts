import { Component, OnInit } from '@angular/core';
import { IonCard, IonItem, IonThumbnail, IonLabel, IonButton, IonIcon,IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
  standalone: true,
  imports: [IonCard, IonItem, IonThumbnail, IonLabel, IonButton, IonIcon,IonText]  
})
export class MemberComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
