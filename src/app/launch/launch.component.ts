import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Launch } from '../models/launch';
import { LaunchDetailsModalComponent } from '../launch-details-modal/launch-details-modal.component';

@Component({
  selector: 'atos-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss'],
})
export class LaunchComponent implements OnInit {
  @Input() launch: Launch;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  openDetails(): void {
    const modalRef = this.modalService.open(LaunchDetailsModalComponent, {
      ariaLabelledBy: 'mission-dialog-title',
      ariaDescribedBy: 'mission-dialog-description',
      size: 'lg',
    });

    modalRef.componentInstance.launch = this.launch;
  }
}
