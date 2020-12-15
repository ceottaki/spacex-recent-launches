import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Launch } from '../models/launch';

@Component({
  selector: 'atos-launch-details-modal',
  templateUrl: './launch-details-modal.component.html',
  styleUrls: ['./launch-details-modal.component.scss'],
})
export class LaunchDetailsModalComponent implements OnInit {
  @Input() launch: Launch;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
