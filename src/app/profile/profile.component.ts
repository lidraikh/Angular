import { Component, HostListener, HostBinding } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { SlideAnimation }   from '../shared/animations';
import { slideInOutAnimation } from '../shared/slideInOutAnimation';
/**
 * This class represents the lazy loaded ProfileComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.scss'],
  animations: [ SlideAnimation ],
  host: { '[@routerAnimation]': '' }
})
export class ProfileComponent {
  // @HostBinding('@routeAnimation') routeAnimation = true;
  // @HostBinding('style.display')   display = 'block';
  // @HostBinding('style.position')  position = 'absolute';

  public x:number;
  public y:number;

  constructor(private modalService: NgbModal) {

  }

  showDialog() {
      const activeModal = this.modalService.open(ModalComponent, {size: 'lg',backdrop: true} );
      activeModal.componentInstance.modalHeader = 'Large Modal';
      // console.log(activeModal.componentInstance);
  }

  @HostListener('window:resize', ['$event'] )
  public onWindowResize($event:any):void {
      // console.log($event);
      // this.x = $event.currentTarget.innerWidth;
      // this.y = $event.currentTarget.innerHeight;
  }

}