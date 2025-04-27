import { Component, inject, OnInit, signal } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonSearchbar,
  IonRow,
  IonCol,
  IonSelect,
  IonSelectOption,
  IonList,
  IonItemDivider,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircle, calendarOutline, chevronForwardCircle, home, homeOutline, menuOutline, notifications, people, peopleOutline, personOutline } from 'ionicons/icons';
import { MemberComponent } from '../../../components/member/member.component'; 

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
  imports: [
    IonIcon,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonSearchbar,
    IonRow,
    IonCol,
    IonSelect,
    IonSelectOption,
    IonList,
    IonItemDivider,
    MemberComponent, // Ensure this is correctly imported
  ],
})
export class MembersPage implements OnInit {
  constructor() {
    addIcons({
      home,
      homeOutline,
      peopleOutline,
      calendarOutline,
      personOutline,
      people,
      menuOutline,
      notifications,
      addCircle,
      chevronForwardCircle,
    });
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}